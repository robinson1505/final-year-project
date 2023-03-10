import 'package:attendance/models/timetable_model.dart';
import 'package:attendance/services/timetable_service.dart';
import 'package:get/get.dart';


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
