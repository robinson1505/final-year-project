import 'package:flutter/material.dart';

class Sessions extends StatelessWidget {
  Sessions({
    super.key,
    required this.icon,
    required this.day,
    required this.module,
    required this.venue,
    required this.time,
  });
  Icon icon;
  Widget day;
  Widget module;
  Widget venue;
  Widget time;

  @override
  Widget build(BuildContext context) {
    // Size size = MediaQuery.of(context).size;
    return Padding(
        padding: const EdgeInsets.all(2.0),
        child: Container(
          padding: const EdgeInsets.all(15.0),
          decoration: BoxDecoration(
            color: const Color.fromRGBO(
              53,
              190,
              156,
              0.7,
            ),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              icon,
              Column(
                children: [
                  day,
                  const SizedBox(height: 15),
                  module,
                ],
              ),
              Column(children: [venue, const SizedBox(height: 15), time])
            ],
          ),
        ));
  }
}
// ListTile(
            
//           minLeadingWidth:double.infinity,
//             contentPadding: const EdgeInsets.all(2.0),
//             leading: icon,
//             title: day,
//             subtitle: module,
//             trailing: time,
//             iconColor: Colors.white,
//             textColor: Colors.white,
//             tileColor: const Color.fromRGBO(53, 190, 156, 0.5),
//           ),