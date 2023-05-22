// import 'package:attendance/models/timetable_model.dart';
// import 'package:http/http.dart' as http;

// class TimetableService {
//   static var client = http.Client();

//   static Future<List<TimetableModel>?> fetchTimetable() async {
//     Uri url = Uri.parse("http://192.168.1.9:4000/timetable");

//     var response = await http.get(url);
//     if (response.statusCode == 200) {
//       var jsonString = response.body;
//       return timetableFromJson(jsonString);
//     } else {
//       return null;
//     }
//   }
// }
