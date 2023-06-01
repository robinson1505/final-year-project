import 'package:attendance/controllers/beacon_controller.dart';
import 'package:attendance/models/beacon_model.dart';
import 'package:attendance/queries/beacon_query.dart';
import 'package:attendance/services/beacon_service.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_beacon/flutter_beacon.dart';
import 'package:get/get.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
// import 'package:graphql_flutter/graphql_flutter.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final BeaconController beaconController = Get.put(BeaconController(BeaconService()));

  // void setup() async {
  //   try {
  //     await flutterBeacon.initializeAndCheckScanning;
  //   } on PlatformException catch (e) {
  //     print(e);
  //   }
  //   final regions = <BeaconModel>[];
  //   flutterBeacon
  //       .monitoring(regions.cast<Region>())
  //       .listen((MonitoringResult result) {
  //     print("Monitored beacon ${result.region.identifier}");
  //   });
  //   flutterBeacon.ranging(regions.cast<Region>()).listen((event) {
  //     print("Ranged beacon ${event.region.identifier}");
  //   });
  // }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text(
          "Beacon Scanning",
        ),
      ),
      body: Obx(() {
        final List<BeaconModel> beacons = beaconController.allBeacons;
        if (beacons.isEmpty) {
          return const Center(
            child: Text('No beacons found'),
          );
        }

        return ListView.builder(
            itemCount: beacons.length,
            itemBuilder: (context, index) {
              final BeaconModel beacon = beacons[index];
              return ListTile(
                title: Text(beacon.uuid),
                subtitle: Text(beacon.beaconMacAddress),
              );
            });
      }),
    );

    // setup();
    // return const Scaffold(
    //   body: Center(child: Text("Ranging................")),
    // );

    // StreamSubscription<RangingResult>? _streamRanging;
    // final _regionBeacons = <Region, List<BeaconModel>>{};
    // final beacon = <BeaconModel>[];
    // final beaconController =
    //     Get.put(BeaconController(BeaconService as BeaconService));

    // @override
    // void initState() {
    //   super.initState();
    // }

    // initScanBeacon() async {
    //   await flutterBeacon.initializeScanning;
    //   if (!beaconController.authorizationStatusOk ||
    //       !beaconController.locationServiceEnabled ||
    //       !beaconController.bluetoothEnabled) {
    //     print(
    //         'RETURNED, authorizationStatusOk=${beaconController.authorizationStatusOk}, '
    //         'locationServiceEnabled=${beaconController.locationServiceEnabled}, '
    //         'bluetoothEnabled=${beaconController.bluetoothEnabled}');
    //     return;
    //   }

    //}

//     const String student = """
// query{
//    student{
//      student_registration_number
//        student_full_name
//    }
//  }
//  """;

    //   QueryOptions _buildQueryOptions(String uuid) {
    //     return QueryOptions(document: gql(beacon()), variables: {
    //       'uuid': uuid,
    //     });
    //   }

    // Future<QueryResult> _fetchBeacon(String uuid) {
    //   final options = _buildQueryOptions(uuid);
    //   return client.value.query(options);
    // }

    // return GestureDetector(
    //   onTap: () {
    //     FocusScope.of(context).unfocus();
    //   },
    //   child: Scaffold(
    //     appBar: AppBar(
    //       centerTitle: true,
    //       backgroundColor: const Color.fromRGBO(
    //         1,
    //         179,
    //         239,
    //         1,
    //       ),
    //       title: const Text(
    //         'Attendance App',
    //         style: TextStyle(
    //           fontSize: 25,
    //         ),
    //       ),
    //       actions: [
    //         IconButton(
    //           onPressed: () {},
    //           icon: const Icon(
    //             Icons.settings,
    //           ),
    //         )
    //       ],
    //     ),
    //     body: Query(
    //       options: QueryOptions(document: gql(student)),
    //       builder: ((result, {fetchMore, refetch}) {
    //         if (result.hasException) {
    //           return Center(
    //             child: Text(result.exception.toString()),
    //           );
    //         }

    //         if (result.isLoading) {
    //           return const Center(
    //             child: CircularProgressIndicator(),
    //           );
    //         }
    //         return const SessionList();
    //       }),
    //     ),
    //     // bottomNavigationBar: bottomNavigationBar(),
    //   ),
    // );
  }
}
