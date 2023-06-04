import 'package:flutter/material.dart';

class PercentCard extends StatelessWidget {
  const PercentCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Card(
      color: const Color.fromRGBO(
        53,
        190,
        156,
        1,
      ),
      child: SizedBox(
        height: 200,
        child: Row(
          children: [
            const Expanded(
              flex: 1,
              child: Card(
                elevation: 0,
                color: Color.fromRGBO(
                  255,
                  255,
                  255,
                  0.2,
                ),
                child: SizedBox(
                    height: 200,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          "Week No:",
                          style: TextStyle(
                              color: Colors.white,
                              fontSize: 25,
                              fontWeight: FontWeight.bold),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        Text("15",
                            style: TextStyle(
                                color: Colors.white,
                                fontSize: 60,
                                fontWeight: FontWeight.bold))
                      ],
                    )),
              ),
            ),
            Expanded(
              flex: 2,
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Card(
                  elevation: 0,
                  color: const Color.fromRGBO(
                    53,
                    190,
                    156,
                    1,
                  ),
                  child: SizedBox(
                      height: 200,
                      child: Column(
              
                      mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Expanded(
                            flex: 2,
                            child: Image.asset(
                              "assets/images/logo_2.png",
                              width: 80,
                              height: 80,
                            ),
                          ),
                          const Expanded(
                            flex: 1,
                            child: Text(
                              "Attendance Percentage",
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          const Expanded(
                            flex: 1,
                            child: Text(
                              "80%",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 50,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                        ],
                      )),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// class PercentCard extends StatefulWidget {
//   const PercentCard({super.key});

//   @override
//   State<PercentCard> createState() => _PercentCardState();
// }

// class _PercentCardState extends State<PercentCard> {
//   @override
//   Widget build(BuildContext context) {
//     Size size = MediaQuery.of(context).size;
//     return Container(
//        width: double.infinity,
//        height: size.height * 0.2,
      
//        decoration: BoxDecoration(
//        borderRadius: BorderRadius.circular(
//            18,
//          ),
//          color: const Color.fromRGBO(
//            53,
//            190,
//            156,
//            1,
//          ),
//        ),
//        child: Row(
//          children: [
//            Flexible(
//              flex: 2,
//              child: Padding(
//                padding: const EdgeInsets.all(
//                  14.0,
//                ),
//                child: Container(
//                 padding: const EdgeInsets.all(15),
//                  height: double.infinity,
//                  decoration: BoxDecoration(
//                    color: const Color.fromRGBO(
//                      255,
//                      255,
//                      255,
//                      0.2,
//                    ),
//                    borderRadius: BorderRadius.circular(
//                      18,
//                    ),
//                  ),
//                  child: Column(
//                    mainAxisSize: MainAxisSize.max,
//                    mainAxisAlignment: MainAxisAlignment.center,
//                    children: const [
//                      Flexible(
                      
//                        child: SizedBox(
//                          width: double.infinity,
//                          child: FittedBox(
                           
//                            child: Text(
//                              "Week No:",
//                              style: TextStyle(
//                                  color: Colors.white,
//                                  fontSize: 25,
//                                  fontWeight: FontWeight.bold),
//                            ),
//                          ),
//                        ),
//                      ),
//                      SizedBox(height: 18),
//                      Flexible(
//                          child: SizedBox(
//                        width: double.infinity,
//                        child: FittedBox(
//                          fit: BoxFit.fill,
//                          child: Text(
//                            "15",
//                            style: TextStyle(
//                                color: Colors.white,
//                                fontSize: 30,
//                                fontWeight: FontWeight.bold),
//                          ),
//                        ),
//                      ))
//                    ],
//                  ),
//                ),
//              ),
//            ),
//            Flexible(
//             flex: 3,
//             child: Padding(
//               padding: const EdgeInsets.all(
//                 14.0,
//               ),
//               child: Container(
//                 height: double.infinity,
              
//                 child: Column(
//                   mainAxisSize: MainAxisSize.max,
//                   mainAxisAlignment: MainAxisAlignment.center,
//                   children: [
//                     Flexible(
//                       child: SizedBox(

//                          child: FittedBox(
//                            fit: BoxFit.fill,
//                            child: Image.asset(
//                              'assets/images/logo_2.png',
//                            ),
//                          ),
//                        ),
//                      ),
//                      const SizedBox(
//                        height: 18,
//                      ),
//                      const Flexible(
//                        child: SizedBox(

//                          child: FittedBox(
//                            fit: BoxFit.fill,
//                            child: Text(
//                              "Attendance Percent ",
//                              textAlign: TextAlign.center,
//                              style: TextStyle(
//                                  color: Colors.white,
//                                  fontSize: 25,
//                                  fontWeight: FontWeight.bold),
//                            ),
//                          ),
//                        ),
//                      ),
//                      const SizedBox(
//                        height: 18,
//                      ),
//                      const Flexible(
//                        child: SizedBox(

//                         child: FittedBox(
//                           child: Text(
//                             "80%",
//                             style: TextStyle(
//                                 color: Colors.white,
//                                 fontSize: 40,
//                                 fontWeight: FontWeight.bold),
//                           ),
//                         ),
//                       ),
//                     ),
//                   ],
//                 ),
//               ),
//             ),
//           ),
//         ],
//       ),
//      );
//   }
// }
