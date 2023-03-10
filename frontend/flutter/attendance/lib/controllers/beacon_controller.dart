import 'package:attendance/models/beacon_model.dart';
import 'package:attendance/services/beacon_service.dart';
import 'package:flutter_beacon/flutter_beacon.dart';
import 'package:get/get.dart';

class BeaconController extends GetxController {
  var bluetoothState = BluetoothState.stateOff.obs;
  var authorizationStatus = AuthorizationStatus.notDetermined.obs;
  var locationService = false.obs;

  final _startScanning = false.obs;
  final _pauseScanning = false.obs;

  bool get bluetoothEnabled => bluetoothState.value == BluetoothState.stateOn;
  bool get authorizationStatusOk =>
      authorizationStatus.value == AuthorizationStatus.allowed ||
      authorizationStatus.value == AuthorizationStatus.always;
  bool get locationServiceEnabled => locationService.value;

  updateBluetoothState(BluetoothState state) {
    bluetoothState.value = state;
  }

  updateAuthorizationStatus(AuthorizationStatus status) {
    authorizationStatus.value = status;
  }

  updateLocationService(bool flag) {
    locationService.value = flag;
  }

  startScanning() {
    _startScanning.value = true;
    _pauseScanning.value = false;
  }

  pauseScanning() {
    _startScanning.value = false;
    _pauseScanning.value = true;
  }

  Stream<bool> get startStream {
    return _startScanning.stream;
  }

  Stream<bool> get pauseStream {
    return _pauseScanning.stream;
  }

  var timetableList = <BeaconModel>[].obs;
  @override
  void onInit() {
    getTimetable();
    super.onInit();
  }

  void getTimetable() async {
    var isLoading = true.obs;
    try {
      isLoading(true);
      var timetable = await BeaconService.fetchBeacon();
      if (timetable != null) {
        timetableList.value = timetable;
      }
    } finally {
      isLoading(false);
    }
  }
}
