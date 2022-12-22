import 'package:flutter/material.dart';

class PercentCard extends StatefulWidget {
  const PercentCard({super.key});

  @override
  State<PercentCard> createState() => _PercentCardState();
}

class _PercentCardState extends State<PercentCard> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
       width: double.infinity,
       height: size.height * 0.2,
      
       decoration: BoxDecoration(
       borderRadius: BorderRadius.circular(
           18,
         ),
         color: const Color.fromRGBO(
           53,
           190,
           156,
           1,
         ),
       ),
       child: Row(
         children: [
           Flexible(
             flex: 2,
             child: Padding(
               padding: const EdgeInsets.all(
                 14.0,
               ),
               child: Container(
                padding: const EdgeInsets.all(15),
                 height: double.infinity,
                 decoration: BoxDecoration(
                   color: const Color.fromRGBO(
                     255,
                     255,
                     255,
                     0.2,
                   ),
                   borderRadius: BorderRadius.circular(
                     18,
                   ),
                 ),
                 child: Column(
                   mainAxisSize: MainAxisSize.max,
                   mainAxisAlignment: MainAxisAlignment.center,
                   children: const [
                     Flexible(
                      
                       child: SizedBox(
                         width: double.infinity,
                         child: FittedBox(
                           
                           child: Text(
                             "Week No:",
                             style: TextStyle(
                                 color: Colors.white,
                                 fontSize: 25,
                                 fontWeight: FontWeight.bold),
                           ),
                         ),
                       ),
                     ),
                     SizedBox(height: 18),
                     Flexible(
                         child: SizedBox(
                       width: double.infinity,
                       child: FittedBox(
                         fit: BoxFit.fill,
                         child: Text(
                           "15",
                           style: TextStyle(
                               color: Colors.white,
                               fontSize: 30,
                               fontWeight: FontWeight.bold),
                         ),
                       ),
                     ))
                   ],
                 ),
               ),
             ),
           ),
           Flexible(
            flex: 3,
            child: Padding(
              padding: const EdgeInsets.all(
                14.0,
              ),
              child: Container(
                height: double.infinity,
              
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Flexible(
                      child: SizedBox(

                         child: FittedBox(
                           fit: BoxFit.fill,
                           child: Image.asset(
                             'assets/images/logo_2.png',
                           ),
                         ),
                       ),
                     ),
                     const SizedBox(
                       height: 18,
                     ),
                     const Flexible(
                       child: SizedBox(

                         child: FittedBox(
                           fit: BoxFit.fill,
                           child: Text(
                             "Attendance Percent ",
                             textAlign: TextAlign.center,
                             style: TextStyle(
                                 color: Colors.white,
                                 fontSize: 25,
                                 fontWeight: FontWeight.bold),
                           ),
                         ),
                       ),
                     ),
                     const SizedBox(
                       height: 18,
                     ),
                     const Flexible(
                       child: SizedBox(

                        child: FittedBox(
                          child: Text(
                            "80%",
                            style: TextStyle(
                                color: Colors.white,
                                fontSize: 40,
                                fontWeight: FontWeight.bold),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
     );
  }
}
