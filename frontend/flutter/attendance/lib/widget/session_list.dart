// import 'package:attendance/controllers/timetable_controller.dart';
// import "package:attendance/widget/sessions.dart";
import "package:attendance/models/timetable_list.dart";
import "package:attendance/queries/timetable_query.dart";
import "package:flutter/material.dart";
import "package:flutter_spinkit/flutter_spinkit.dart";
import "package:graphql_flutter/graphql_flutter.dart";
import "package:intl/intl.dart";
// import "package:flutter_spinkit/flutter_spinkit.dart";
// import "package:get/get.dart";

class SessionList extends StatelessWidget {
  const SessionList({super.key});
  // final TimetableController timetableController =
  //     Get.put(TimetableController());

  @override
  Widget build(BuildContext context) {
    return Query(
        options: QueryOptions(document: gql(timetable())),
        builder: (result, {fetchMore, refetch}) {
          if (result.isLoading) {
            return const Center(
              child: SpinKitFadingCircle(
                color: Color.fromRGBO(
                  1,
                  179,
                  239,
                  1,
                ),
              ),
            );
          }
          if (result.hasException) {
            return Center(
              child: Text(result.exception.toString()),
            );
          }
          final timetables = List<Map<String, dynamic>>.from(
              result.data?['getStudentTimetable']);

          timetables.sort((a, b) {
            final daySort = a['module_day'].compareTo(b['module_day']);
            if (daySort == 0) {
              return a['time_in'].compareTo(b['time_in']);
            }
            return daySort;
          });

          if (timetables.isEmpty) {
            return const Center(
              child: Text("No todo items yet"),
            );
          }

          return GridView.builder(
            padding: const EdgeInsets.fromLTRB(15, 10, 15, 0),
            itemCount: timetables.length,
            shrinkWrap: true,
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2),
            itemBuilder: (context, index) {
              final timetable = timetables[index];
              String moduleDayString = timetable['module_day'];
              DateTime moduleDay = DateTime.parse(moduleDayString);
              String day = DateFormat('EEEE').format(moduleDay);

              return Card(
                elevation: 2,
                child: Padding(
                  padding: const EdgeInsets.all(
                    10.0,
                  ),
                  child: SizedBox(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              day,
                              style: const TextStyle(
                                  color: Color.fromRGBO(
                                    1,
                                    179,
                                    239,
                                    1,
                                  ),
                                  fontSize: 15,
                                  fontWeight: FontWeight.bold),
                            ),
                            Text(moduleDayString),
                          ],
                        ),
                        Text(timetable['module']['module_name']),
                        Text(timetable['module']['module_code']),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text(
                              timetable['time_in'],
                              style: const TextStyle(
                                  color: Color.fromRGBO(
                                    1,
                                    179,
                                    239,
                                    1,
                                  ),
                                  fontSize: 15,
                                  fontWeight: FontWeight.bold),
                            ),
                            Text(timetable['time_out']),
                          ],
                        ),
                        Text(timetable['venue']['venue_name']),
                        Text(timetable['module']['lecturer']
                            ['lecturer_full_name']),
                      ],
                    ),
                  ),
                ),
              );
            },
          );
        });
  }
}











  // return GridView.builder(
  //     shrinkWrap: true,
  //     itemCount: timetableController.timetableList.length,
  //     gridDelegate:
  //         const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
  //     itemBuilder: (context, index) {
  //       return const SessionCard();
  //     },
  //   );

//  Obx(() {
//       if (timetableController.isLoading.value) {
//         return const Center(
//           child: SpinKitFadingCircle(
          
//             color: Color.fromRGBO(
//               53,
//               190,
//               156,
//               1,
//             ),
//           ),
//         );
//       }