import 'package:attendance/models/venue_model.dart';
import 'dart:convert';
List<BeaconModel> beaconFromJson(String str) => List<BeaconModel>.from(
    json.decode(str).map((x) => BeaconModel.fromJson(x)));

class BeaconModel {
  String? id;
  String? beaconMacAddress;
  VenueModel? venue;

  BeaconModel({this.id, this.beaconMacAddress, this.venue});

  BeaconModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    beaconMacAddress = json['beacon_mac_address'];
    venue = json['venue'] != null ? VenueModel.fromJson(json['venue']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['beacon_mac_address'] = beaconMacAddress;

    if (venue != null) {
      data['venue'] = venue!.toJson();
    }
    return data;
  }
}
