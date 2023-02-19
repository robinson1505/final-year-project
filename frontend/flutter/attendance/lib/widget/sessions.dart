import 'package:attendance/models/timetableModel.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class SessionCard extends StatelessWidget {
  const SessionCard({super.key, required this.timetable});
  final TimetableModel timetable;

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
                  
                  children: [
                    Expanded(
                      child: Text(
                        DateFormat('EEEE')
                            .format(timetable.moduleDay as DateTime),
                      ),
                    ),
                     Expanded(
                child: Text(
                  "${timetable.timetableModule}",
                ),
              ),
                  
                  ],
                ),
              ),
             
              const Expanded(
                child: Text(
                  "Mobile Development",
                ),
              ),
              Expanded(
                child: Text(
                  "${timetable.timetableVenue}",
                ),
              ),
              Expanded(
                child: Text(
                  "${timetable.timetableLecturer}",
                ),
              ),
                Expanded(
                      child: Text(
                        "${timetable.timeIn} - ${timetable.timeOut}",
                      ),
                    )
            ]),
          )),
    );
  }
}
