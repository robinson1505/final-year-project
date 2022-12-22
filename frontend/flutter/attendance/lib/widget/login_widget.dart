import 'package:attendance/widget/form_widget.dart';
import 'package:flutter/material.dart';

Widget loginWidget() {
  return Scaffold(
    body: SingleChildScrollView(
      child: Column(
        children: [
          Container(
            height: 250,
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(
                    50,
                  ),
                  bottomRight: Radius.circular(
                    50,
                  )),
              color: Color.fromRGBO(
                53,
                190,
                156,
                1,
              ),
            ),
            child: Center(
              child: SizedBox(
                height: 90,
                width: 90,
                child: Image.asset('assets/images/logo_2.png'),
              ),
            ),
          ),
          const SizedBox(
            height: 20,
          ),
          Container(padding:const EdgeInsets.only(right: 15,left: 15,), child: const FormWidget())
        ],
      ),
    ),
  );
}
//  Container(
//                     margin: const EdgeInsets.only(right: 20, top: 20),
//                     alignment: Alignment.bottomRight,
//                     child: const Text(
//                       "Login",
//                       style: TextStyle(
//                         fontSize: 25,
//                         fontWeight: FontWeight.bold,
//                         color: Colors.white,
//                       ),
//                     ),
//                   )