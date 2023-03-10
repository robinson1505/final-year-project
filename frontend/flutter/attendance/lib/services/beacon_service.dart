import 'package:attendance/models/beacon_model.dart';
import 'package:http/http.dart' as http;

class BeaconService {
  static var client = http.Client();

  static Future<List<BeaconModel>?> fetchBeacon() async {
    Uri url = Uri.parse("http://192.168.1.9:4000/beacon");

    var response = await http.get(url);
    if (response.statusCode == 200) {
      var jsonString = response.body;
      return beaconFromJson(jsonString);
    } else {
      return null;
    }
  }
}
