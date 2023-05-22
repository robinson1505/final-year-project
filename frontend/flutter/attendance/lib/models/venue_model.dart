class VenueModel {
  final String venueName;
  final String venueCode;

  VenueModel({required this.venueName, required this.venueCode});

  factory VenueModel.fromJson(Map<String, dynamic> json) {
    return VenueModel(
        venueName: json['venue_name'], venueCode: json['venue_code']);
  }

  // Map<String, dynamic> toJson() {
  //   final Map<String, dynamic> data = new Map<String, dynamic>();
  //   data['id'] = this.id;
  //   data['venue_name'] = this.venueName;
  //   data['venue_code'] = this.venueCode;
  //   return data;
  // }
}
