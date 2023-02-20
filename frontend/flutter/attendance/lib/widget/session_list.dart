import "package:attendance/controllers/timetableController.dart";
import "package:attendance/widget/sessions.dart";
import "package:flutter/material.dart";
import "package:flutter_spinkit/flutter_spinkit.dart";
import "package:get/get.dart";

class SessionList extends StatelessWidget {
  SessionList({super.key});
  final TimetableController timetableController =
      Get.put(TimetableController());

  @override
  Widget build(BuildContext context) {
    return Obx(() {
      if (timetableController.isLoading.value) {
        return const Center(
          child: SpinKitFadingCircle(
          
            color: Color.fromRGBO(
              53,
              190,
              156,
              1,
            ),
          ),
        );
      } else {
        return GridView.builder(
          shrinkWrap: true,
          itemCount: timetableController.timetableList.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2),
          itemBuilder: (context, index) {
            return SessionCard(
                timetable: timetableController.timetableList[index]);
          },
        );
      }
    });
  }
}
