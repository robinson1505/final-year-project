// import 'package:flutter/material.dart';
// import 'package:flutter_beacon/flutter_beacon.dart';
// import 'package:location/location.dart';

// class BleBeacon extends StatefulWidget {
//   const BleBeacon({super.key});

//   @override
//   State<BleBeacon> createState() => _BleBeaconState();
// }

// class _BleBeaconState extends State<BleBeacon> {
//   bool _isScanning = false;
//   String _attendanceStatus = '';

//   @override
//   void initState() {
//     super.initState();
//     initBeacon();
//   }
//  Future<void> initBeacon() async {
//    final flutterBeacon = FlutterBeacon(
//       proximityUUID: 'YOUR_PROXIMITY_UUID',
//     );

//     await flutterBeacon.initializeScanning;

//   final location = Location();
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Container();
//   }
// }
