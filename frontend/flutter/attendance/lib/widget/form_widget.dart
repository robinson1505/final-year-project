import 'dart:async';
import 'package:attendance/controllers/beacon_controller.dart';
import 'package:attendance/models/beacon_model.dart';
import 'package:attendance/screens/home_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_beacon/flutter_beacon.dart';
import 'package:get/get.dart';

class FormWidget extends StatefulWidget {
  const FormWidget({super.key});

  @override
  State<FormWidget> createState() => _FormWidgetState();
}

class _FormWidgetState extends State<FormWidget> {
  // StreamSubscription<RangingResult>? _streamRanging;
  // final _regionBeacons = <Region, List<Beacon>>{};
  // final _beacons = <BeaconModel>[];
  // final beaconController = Get.put(BeaconController());
  final _formKey = GlobalKey<FormState>();
  final regNoController = TextEditingController();
  final passwordController = TextEditingController();
  final hidePassword = true;

  // @override
  // void initState() {
  //   super.initState();
  //   beaconController.startStream.listen((flag) {
  //     if (flag == true) {
  //       initScanBeacon();
  //     }
  //   });
  //   beaconController.pauseStream.listen((flag) {
  //     if (flag == true) {
  //       pauseScanBeacon();
  //     }
  //   });
  // }

  // initScanBeacon() async {
  //   await flutterBeacon.initializeScanning;
  //   if (!beaconController.authorizationStatusOk ||
  //       beaconController.locationServiceEnabled ||
  //       beaconController.bluetoothEnabled) {
  //     print(
  //         'RETURNED, authorizationStatusOk=${beaconController.authorizationStatusOk}, '
  //         'locationServiceEnabled=${beaconController.locationServiceEnabled}, '
  //         'bluetoothEnabled=${beaconController.bluetoothEnabled}');
  //     return;
  //   }
  //   final List<Region> regions = <BeaconModel>[].cast<Region>();
  //   if (_streamRanging != null) {
  //     if (_streamRanging!.isPaused) {
  //       _streamRanging?.resume();
  //       return;
  //     }
  //   }
  //   _streamRanging =
  //       flutterBeacon.ranging(regions).listen((RangingResult result) {
  //     print(result);
  //     if (mounted) {
  //       setState(() {
  //         _regionBeacons[result.region] = result.beacons;
  //         _beacons.clear();
  //         _regionBeacons.values.forEach((list) {
  //           _beacons.addAll(list as Iterable<BeaconModel>);
  //         });
  //         _beacons.sort(_compareParameters as int Function(
  //             BeaconModel a, BeaconModel b)?);
  //       });
  //     }
  //   });
  // }

  // pauseScanBeacon() async {
  //   _streamRanging?.pause();
  //   if (_beacons.isNotEmpty) {
  //     setState(() {
  //       _beacons.clear();
  //     });
  //   }
  // }

  // int _compareParameters(Beacon a, Beacon b) {
  //   int compare = a.proximityUUID.compareTo(b.proximityUUID);

  //   if (compare == 0) {
  //     compare = a.major.compareTo(b.major);
  //   }

  //   if (compare == 0) {
  //     compare = a.minor.compareTo(b.minor);
  //   }

  //   return compare;
  // }

  // @override
  // void dispose() {
  //   _streamRanging?.cancel();
  //   super.dispose();
  // }

  @override
  Widget build(BuildContext context) {
    return Center(
      child:Container(
              padding: const EdgeInsets.all(18),
              width: double.infinity,
              decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(
                    20,
                  ),
                  boxShadow: const [
                    BoxShadow(
                      color: Color.fromRGBO(53, 190, 156, 0.5),
                      spreadRadius: 2,
                      blurRadius: 4,
                      offset: Offset(0, 0), //change position of shadow
                    )
                  ]),
              child: Form(
                key: _formKey,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const SizedBox(
                      height: 20,
                    ),
                    const Text(
                      "Login",
                      style: TextStyle(
                        fontSize: 30,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    TextFormField(
                      controller: regNoController,
                      decoration: const InputDecoration(
                        focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: Color.fromRGBO(53, 190, 156, 1),
                            width: 2.0,
                          ),
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderSide: BorderSide(
                            color: Color.fromRGBO(53, 190, 156, 1),
                            width: 2.0,
                          ),
                        ),
                        icon: Icon(
                          Icons.person,
                          color: Color.fromRGBO(53, 190, 156, 1),
                        ),
                        labelText: "Reg No",
                      ),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    TextFormField(
                      controller: passwordController,
                      obscuringCharacter: '*',
                      obscureText: hidePassword,
                      decoration: InputDecoration(
                          focusedBorder: const OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Color.fromRGBO(53, 190, 156, 1),
                              width: 2.0,
                            ),
                          ),
                          enabledBorder: const OutlineInputBorder(
                            borderSide: BorderSide(
                              color: Color.fromRGBO(53, 190, 156, 1),
                              width: 2.0,
                            ),
                          ),
                          icon: const Icon(
                            Icons.lock,
                            color: Color.fromRGBO(53, 190, 156, 1),
                          ),
                          labelText: "Password",
                          suffixIcon: IconButton(
                              onPressed: () {},
                              icon: const Icon(Icons.visibility_off))),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    ElevatedButton(
                        style: ButtonStyle(
                          backgroundColor: MaterialStateProperty.all<Color>(
                            const Color.fromRGBO(
                              53,
                              190,
                              156,
                              1,
                            ),
                          ),
                        ),
                        onPressed: () {
                          Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => const HomeScreen()));
                        },
                        child: const Text("Login",
                            style: TextStyle(
                                fontSize: 30, fontWeight: FontWeight.bold)))
                  ],
                ),
              ),
            ),
    );
  }
}
