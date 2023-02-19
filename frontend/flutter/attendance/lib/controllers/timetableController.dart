// import 'dart:convert';

// import 'package:attendance/models/timetableModel.dart';
import 'dart:ffi';

import 'package:attendance/models/timetableModel.dart';
import 'package:attendance/services/timetableService.dart';
import 'package:get/get.dart';
// import 'package:http/http.dart' as http;

// class TimetableController extends GetxController {
//   var timetable = <TimetableModel>[].obs;

//   getUser() async {
//     Uri url = Uri.parse("http://192.168.1.9:4000/timetable");
//     try {
//       var response = await http.get(url);
//       if (response.statusCode == 200) {
//         var data = List<TimetableModel>.from(jsonDecode(response.body)
//             .map((e) => TimetableModel.fromJson(e))).toList();
//         timetable.value = data;
//       }
//     } catch (e) {
//       print("Failed to fetch data");
//     }
//   }
// }

class TimetableController extends GetxController {
  var isLoading = true.obs;
  var timetableList = <TimetableModel>[].obs;
  @override
  void onInit() {
    getTimetable();
    super.onInit();
  }

  void getTimetable() async {
    try {
      isLoading(true);
      var timetable = await TimetableService.fetchTimetable();
      if (timetable != null) {
        timetableList.value = timetable;
      }
    } finally {
      isLoading(false);
    }
  }
}
