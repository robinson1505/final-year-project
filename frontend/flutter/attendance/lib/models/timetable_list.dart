import 'package:attendance/models/timetable_model.dart';

class TimetableList {
  TimetableList({required this.timetable});
  final List<TimetableModel> timetable;

  factory TimetableList.fromJson(Map<String, dynamic> json) {
    return TimetableList(
        timetable: (json['data'] as List<dynamic>)
            .map((timetableJson) => TimetableModel.fromJson(timetableJson))
            .toList());
  }
}
