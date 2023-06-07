import 'dart:async';
import 'dart:io';

import 'package:attendance/controllers/beacon_controller.dart';
import 'package:attendance/models/beacon_model.dart';
import 'package:attendance/screens/login_screen.dart';
import 'package:attendance/services/beacon_service.dart';
import 'package:attendance/widget/session_list.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_beacon/flutter_beacon.dart';
import 'package:get/get.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:shared_preferences/shared_preferences.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> with WidgetsBindingObserver {
  final beaconController = Get.put(BeaconController(BeaconService()));
  StreamSubscription<BluetoothState>? _streamBluetooth;
  int currentIndex = 0;

  @override
  void initState() {
    WidgetsBinding.instance.addObserver(this);
    super.initState();
    listeningState();
  }

  listeningState() async {
    print('Listening to bluetooth state');
    _streamBluetooth = flutterBeacon
        .bluetoothStateChanged()
        .listen((BluetoothState state) async {
      beaconController.updateBluetoothState(state);
      await checkAllRequirements();
    });
  }

  checkAllRequirements() async {
    final bluetoothState = await flutterBeacon.bluetoothState;
    beaconController.updateBluetoothState(bluetoothState);
    print('BLUETOOTH $bluetoothState');

    final authorizationStatus = await flutterBeacon.authorizationStatus;
    beaconController.updateAuthorizationStatus(authorizationStatus);
    print('AUTHORIZATION $authorizationStatus');

    final locationServiceEnabled =
        await flutterBeacon.checkLocationServicesIfEnabled;
    beaconController.updateLocationService(locationServiceEnabled);
    print('LOCATION SERVICE $locationServiceEnabled');

    if (beaconController.bluetoothEnabled &&
        beaconController.authorizationStatusOk &&
        beaconController.locationServiceEnabled) {
      print('STATE READY');
      // HERE comes the notification
      if (currentIndex == 0) {
        print('SCANNING');
        beaconController.startScanning();
      }
    } else {
      // HERE comes the notification
      beaconController.pauseScanning();
    }
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) async {
    print('AppLifecycleState = $state');
    if (state == AppLifecycleState.resumed) {
      if (_streamBluetooth != null) {
        if (_streamBluetooth!.isPaused) {
          _streamBluetooth?.resume();
        }
      }
      await checkAllRequirements();
    } else if (state == AppLifecycleState.paused) {
      _streamBluetooth?.pause();
    }
  }

  @override
  void dispose() {
    _streamBluetooth?.cancel();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return const TabScanning();
    // return Scaffold(
    //   appBar: AppBar(
    //     backgroundColor: Colors.blueGrey,
    //     title: const Text('Flutter Beacon'),
    //     centerTitle: false,
    //     actions: <Widget>[
    //       Obx(() {
    //         if (!beaconController.locationServiceEnabled) {
    //           return IconButton(
    //             tooltip: 'Not Determined',
    //             icon: const Icon(Icons.portable_wifi_off),
    //             color: Colors.grey,
    //             onPressed: () {},
    //           );
    //         }

    //         if (!beaconController.authorizationStatusOk) {
    //           return IconButton(
    //             tooltip: 'Not Authorized',
    //             icon: const Icon(Icons.portable_wifi_off),
    //             color: Colors.red,
    //             onPressed: () async {
    //               await flutterBeacon.requestAuthorization;
    //             },
    //           );
    //         }

    //         return IconButton(
    //           tooltip: 'Authorized',
    //           icon: const Icon(Icons.wifi_tethering),
    //           color: Colors.blue,
    //           onPressed: () async {
    //             await flutterBeacon.requestAuthorization;
    //           },
    //         );
    //       }),
    //       Obx(() {
    //         return IconButton(
    //           tooltip: beaconController.locationServiceEnabled
    //               ? 'Location Service ON'
    //               : 'Location Service OFF',
    //           icon: Icon(
    //             beaconController.locationServiceEnabled
    //                 ? Icons.location_on
    //                 : Icons.location_off,
    //           ),
    //           color: beaconController.locationServiceEnabled
    //               ? Colors.blue
    //               : Colors.red,
    //           onPressed: beaconController.locationServiceEnabled
    //               ? () {}
    //               : handleOpenLocationSettings,
    //         );
    //       }),
    //       Obx(() {
    //         final state = beaconController.bluetoothState.value;

    //         if (state == BluetoothState.stateOn) {
    //           return IconButton(
    //             tooltip: 'Bluetooth ON',
    //             icon: const Icon(Icons.bluetooth_connected),
    //             onPressed: () {},
    //             color: Colors.lightBlueAccent,
    //           );
    //         }

    //         if (state == BluetoothState.stateOff) {
    //           return IconButton(
    //             tooltip: 'Bluetooth OFF',
    //             icon: const Icon(Icons.bluetooth),
    //             onPressed: handleOpenBluetooth,
    //             color: Colors.red,
    //           );
    //         }

    //         return IconButton(
    //           icon: const Icon(Icons.bluetooth_disabled),
    //           tooltip: 'Bluetooth State Unknown',
    //           onPressed: () {},
    //           color: Colors.grey,
    //         );
    //       }),
    //     ],
    //   ),
    //   body: TabScanning(),
    // );
  }

  handleOpenLocationSettings() async {
    if (Platform.isAndroid) {
      await flutterBeacon.openLocationSettings;
    } else if (Platform.isIOS) {
      await showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: const Text('Location Services Off'),
            content: const Text(
              'Please enable Location Services on Settings > Privacy > Location Services.',
            ),
            actions: [
              TextButton(
                onPressed: () => Navigator.pop(context),
                child: const Text('OK'),
              ),
            ],
          );
        },
      );
    }
  }

  handleOpenBluetooth() async {
    if (Platform.isAndroid) {
      try {
        await flutterBeacon.openBluetoothSettings;
      } on PlatformException catch (e) {
        print(e);
      }
    } else if (Platform.isIOS) {
      await showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: const Text('Bluetooth is Off'),
            content:
                const Text('Please enable Bluetooth on Settings > Bluetooth.'),
            actions: [
              TextButton(
                onPressed: () => Navigator.pop(context),
                child: const Text('OK'),
              ),
            ],
          );
        },
      );
    }
  }
}

class TabScanning extends StatefulWidget {
  const TabScanning({super.key});

  @override
  State<TabScanning> createState() => _TabScanning();
}

class _TabScanning extends State<TabScanning> {
  final BeaconController beaconController =
      Get.put(BeaconController(BeaconService()));
  StreamSubscription<RangingResult>? _streamRanging;

  final _regionBeacons = <Region, List<BeaconModel>>{};

  final _beacons = <BeaconModel>[];

  @override
  void initState() {
    super.initState();

    beaconController.startStream.listen((flag) {
      if (flag == true) {
        initScanBeacon();
      }
    });

    beaconController.pauseStream.listen((flag) {
      if (flag == true) {
        pauseScanBeacon();
      }
    });
  }

  initScanBeacon() async {
    if (!beaconController.authorizationStatusOk ||
        !beaconController.locationServiceEnabled ||
        !beaconController.bluetoothEnabled) {
      print(
          'RETURNED, authorizationStatusOk=${beaconController.authorizationStatusOk}, '
          'locationServiceEnabled=${beaconController.locationServiceEnabled}, '
          'bluetoothEnabled=${beaconController.bluetoothEnabled}');
      return;
    }

    final List<BeaconModel> beaconData = await beaconController.fetchBeacons();
    final List<Region> regions = convertToRegions(beaconData);

    if (_streamRanging != null) {
      if (_streamRanging!.isPaused) {
        _streamRanging?.resume();
        return;
      }
    }
    _streamRanging = flutterBeacon
        .ranging(regions.cast<Region>())
        .listen((RangingResult result) {
      print(result);
      if (mounted) {
        setState(() {
          _regionBeacons[result.region] = result.beacons.map((beacon) {
            return BeaconModel(
              proximityUUID: beacon.proximityUUID,
              beaconMacAddress: '',
            );
          }).toList();
          _beacons.clear();
          for (var list in _regionBeacons.values) {
            _beacons.addAll(list);
          }
        });
      }
    });
  }

  pauseScanBeacon() async {
    _streamRanging?.pause();
    if (_beacons.isNotEmpty) {
      setState(() {
        _beacons.clear();
      });
    }
  }

  @override
  void dispose() {
    _streamRanging?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // return Scaffold(
    //   body: _beacons.isEmpty
    //       ? const Center(child: CircularProgressIndicator())
    //       : ListView(
    //           children: ListTile.divideTiles(
    //             context: context,
    //             tiles: _beacons.map(
    //               (beacon) {
    //                 return ListTile(
    //                   title: Text(
    //                     beacon.proximityUUID,
    //                     style: const TextStyle(fontSize: 15.0),
    //                   ),
    //                   subtitle: Row(
    //                     mainAxisSize: MainAxisSize.max,
    //                     children: <Widget>[
    //                       Flexible(
    //                         flex: 1,
    //                         fit: FlexFit.tight,
    //                         child: Text(
    //                           'proximityUUID: ${beacon.proximityUUID}',
    //                           style: const TextStyle(fontSize: 13.0),
    //                         ),
    //                       ),
    //                     ],
    //                   ),
    //                 );
    //               },
    //             ),
    //           ).toList(),
    //         ),
    // );

//     // return Scaffold(
//     //   appBar: AppBar(
//     //     centerTitle: true,
//     //     title: const Text(
//     //       "Beacon Scanning",
//     //     ),
//     //   ),
//     //   body: Obx(() {
//     //     final List<BeaconModel> beacons = beaconController.allBeacons;
//     //     if (beacons.isEmpty) {
//     //       return const Center(
//     //         child: Text('No beacons found'),
//     //       );
//     //     }

//     //     return ListView.builder(
//     //         itemCount: beacons.length,
//     //         itemBuilder: (context, index) {
//     //           final BeaconModel beacon = beacons[index];
//     //           return ListTile(
//     //             title: Text(beacon.proximityUUID),
//     //             subtitle: Text(beacon.beaconMacAddress),
//     //           );
//     //         });
//     //   }),
//     // );

//     // setup();
//     // return const Scaffold(
//     //   body: Center(child: Text("Ranging................")),
//     // );

//     // StreamSubscription<RangingResult>? _streamRanging;
//     // final _regionBeacons = <Region, List<BeaconModel>>{};
//     // final beacon = <BeaconModel>[];
//     // final beaconController =
//     //     Get.put(BeaconController(BeaconService as BeaconService));

//     // @override
//     // void initState() {
//     //   super.initState();
//     // }

//     // initScanBeacon() async {
//     //   await flutterBeacon.initializeScanning;
//     //   if (!beaconController.authorizationStatusOk ||
//     //       !beaconController.locationServiceEnabled ||
//     //       !beaconController.bluetoothEnabled) {
//     //     print(
//     //         'RETURNED, authorizationStatusOk=${beaconController.authorizationStatusOk}, '
//     //         'locationServiceEnabled=${beaconController.locationServiceEnabled}, '
//     //         'bluetoothEnabled=${beaconController.bluetoothEnabled}');
//     //     return;
//     //   }

//     //}

    const String student = """
query{
   student{
     student_registration_number
       student_full_name
   }
 }
 """;

    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
      },
      child: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          backgroundColor: const Color.fromRGBO(
            1,
            179,
            239,
            1,
          ),
          title: const Text(
            'Attendance App',
            style: TextStyle(
              fontSize: 25,
            ),
          ),
          actions: [
            PopupMenuButton(
                icon: const Icon(Icons.settings),
                itemBuilder: (context) => [
                      PopupMenuItem(
                          onTap: () async {
                            final prefs = await SharedPreferences.getInstance();
                            await prefs.remove('token');
                            if (mounted) {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => const LoginScreen()),
                              );
                            }
                          },
                          child: Text("sign out"))
                    ])
          ],
        ),
        body: Query(
          options: QueryOptions(document: gql(student)),
          builder: ((result, {fetchMore, refetch}) {
            if (result.hasException) {
              return Center(
                child: Text(result.exception.toString()),
              );
            }

            if (result.isLoading) {
              return const Center(
                child: CircularProgressIndicator(),
              );
            }
            return const SessionList();
          }),
        ),
        // bottomNavigationBar: bottomNavigationBar(),
      ),
    );
  }

  List<Region> convertToRegions(List<BeaconModel> beaconData) {
    // Convert the BeaconModel objects to Region objects
    final List<Region> regions = beaconData.map((beacon) {
      return Region(
          identifier: beacon.beaconMacAddress,
          proximityUUID: beacon.proximityUUID,
          major: 0,
          minor: 0);
    }).toList();

    return regions;
  }
}
