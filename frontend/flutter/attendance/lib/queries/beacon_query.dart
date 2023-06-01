String beacon() {
  return '''
 query GetBeacons() {
   getBeacon() {
     id
     beacon_mac_address
   }
}
''';
}
