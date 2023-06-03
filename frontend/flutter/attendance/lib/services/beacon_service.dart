import 'package:attendance/config/graphql_client.dart';
import 'package:attendance/models/beacon_model.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class BeaconService {
  Future<BeaconModel> fetchBeacon(String uuid) async {
    const String beacon = '''
 query GetBeacon(\$uuid: String!,) {
   getBeacon(id:\$uuid) {
     id
     beacon_mac_address
   }
}
''';

    final QueryOptions options =
        QueryOptions(document: gql(beacon), variables: {
      'uuid': uuid,
    });
    final QueryResult result = await client.value.query(options);
    if (result.hasException) {
      throw Exception('Error fetching beacon!');
    }
    final Map<String, dynamic> beaconJson = result.data!['beacon'];
    final BeaconModel fetchedBeacon = BeaconModel.fromJson(beaconJson);
    // beacon.value = fetchedBeacon;
    return fetchedBeacon;
  }

  Future<List<BeaconModel>> getBeacons() async {
    const String beacons = '''
 query GetAllBeacon{
   getAllBeacons{
     id
     beacon_mac_address
   }
}
''';

    final QueryOptions options = QueryOptions(
      document: gql(beacons),
    );
    final QueryResult result = await client.value.query(options);
    if (result.hasException) {
      throw Exception('Error fetching beacon!');
    }
    final List<dynamic> beaconsJson = result.data!['getAllBeacons'];
    final List<BeaconModel> fetchedBeacons =
        beaconsJson.map((json) => BeaconModel.fromJson(json)).toList();
    // beacon.value = fetchedBeacon;
    return fetchedBeacons;
  }
}
