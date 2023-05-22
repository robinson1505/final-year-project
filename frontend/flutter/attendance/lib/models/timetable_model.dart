// import 'dart:convert';

// List<TimetableModel> timetableFromJson(String str) => List<TimetableModel>.from(
//     json.decode(str).map((x) => TimetableModel.fromJson(x)));

// String timetableToJson(List<TimetableModel> data) =>
//     json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

// class TimetableModel {
//   TimetableModel({
//     required this.timetableId,
//     required this.timetableModule,
//     required this.timetableVenue,
//     required this.timetableLecturer,
//     required this.moduleDay,
//     required this.timeIn,
//     required this.timeOut,
//   });

//   String? timetableId;
//   String? timetableModule;
//   String? timetableVenue;
//   String? timetableLecturer;
//   DateTime? moduleDay;
//   String? timeIn;
//   String? timeOut;

//   factory TimetableModel.fromJson(Map<String, dynamic> json) => TimetableModel(
//         timetableId: json["timetable_id"],
//         timetableModule: json["timetable_module"],
//         timetableVenue: json["timetable_venue"],
//         timetableLecturer: json["timetable_lecturer"],
//         moduleDay: DateTime.parse(json["module_day"]),
//         timeIn: json["time_in"],
//         timeOut: json["time_out"],
//       );

//   Map<String, dynamic> toJson() => {
//         "timetable_id": timetableId,
//         "timetable_module": timetableModule,
//         "timetable_venue": timetableVenue,
//         "timetable_lecturer": timetableLecturer,
//         "module_day": moduleDay?.toIso8601String(),
//         "time_in": timeIn,
//         "time_out": timeOut,
//       };
// }

import 'package:attendance/models/lecturer_model.dart';
import 'package:attendance/models/module_model.dart';
import 'package:attendance/models/venue_model.dart';

class TimetableModel {
  TimetableModel(
      {required this.timetableId,
      required this.module,
      required this.venue,
      required this.lecturer,
      required this.moduleDay,
      required this.timeIn,
      required this.timeOut});

  final String timetableId;
  final ModuleModel module;
  final VenueModel venue;
  final LecturerModel lecturer;
  final DateTime moduleDay;
  final String timeIn;
  final String timeOut;

  factory TimetableModel.fromJson(Map<String, dynamic> json) {
    return TimetableModel(
      timetableId: json['id'],
      module: ModuleModel.fromJson(json['module']),
      venue: VenueModel.fromJson(json['venue']),
      lecturer: LecturerModel.fromJson(json['lecturer']),
      moduleDay: DateTime.parse(json["module_day"]),
      timeIn: json["time_in"],
      timeOut: json["time_out"],
    );
  }
}
