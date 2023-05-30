String beacon() {
  return '''
 query GetBeacon(\$uuid: String!,) {
   getBeacon(id:\$uuid) {
     id
     beacon_mac_address
   }
}
''';
}
