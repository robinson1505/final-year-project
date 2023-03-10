class VenueModel {
  String? id;
  String? venueName;
  String? venueCode;

  VenueModel({this.id, this.venueName, this.venueCode});

  VenueModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    venueName = json['venue_name'];
    venueCode = json['venue_code'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['venue_name'] = this.venueName;
    data['venue_code'] = this.venueCode;
    return data;
  }
}
