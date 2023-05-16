// import 'package:attendance/models/timetable_model.dart';
import 'package:flutter/material.dart';
// import 'package:intl/intl.dart';

class SessionCard extends StatelessWidget {
  const SessionCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      child: Padding(
          padding: const EdgeInsets.all(
            8.0,
          ),
          child: SizedBox(
            child: Column(children: [
              Expanded(
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: const [
                    Expanded(
                      flex: 1,
                      child: Text("day"),
                    ),
                  ]))
            ]),
          )),
    );
  }
}
// Expanded(
//                       flex: 1,
//                       child: Text(
//                         DateFormat('EEEE')
//                             .format(timetable.moduleDay as DateTime)
//                             .toUpperCase(),
//                       ),
//                     ),

//  Card(
//       elevation: 2,
//       child: Padding(
//           padding: const EdgeInsets.all(
//             8.0,
//           ),
//           child: SizedBox(
//             child: Column(children: [
// Expanded(
//   child: Row(
//     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
//     crossAxisAlignment: CrossAxisAlignment.center,
//     children: const [
//       Expanded(
//         flex: 1,
//         child: Text(
//           "day"
//         ),
//       ),
//                     Expanded(
//                       flex: 2,
//                       child: Text(
//                         "timetable Module",
//                         textAlign: TextAlign.end,
//                       ),
//                     ),
//                   ],
//                 ),
//               ),
//               const Expanded(
//                 child: Text(
//                   "Mobile Development",
//                 ),
//               ),
//               const Expanded(
//                 child: Text(
//                   "Venue",
//                 ),
//               ),
//               const Expanded(
//                 child: Text(
//                   "timetable Lecturer",
//                 ),
//               ),
//               const Expanded(
//                 child: Text(
//                   "time in and time out",
//                 ),
//               )
//             ]),
//           )),
//     );
