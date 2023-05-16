import 'package:flutter/material.dart';

class InputTextFieldWidget extends StatelessWidget {
  // final TextEditingController textEditingController;
  // final String hintText;
  // final bool hidePassword ;
 const InputTextFieldWidget(
      {super.key});
  @override
  Widget build(BuildContext context) {
    return const SizedBox(
      height: 46,
      child: TextField(
        // obscureText: hidePassword,
        // controller: textEditingController,
        decoration: InputDecoration(
          alignLabelWithHint: true,
          focusedBorder: UnderlineInputBorder(
              borderSide: BorderSide(
            color: Color.fromRGBO(
              53,
              190,
              156,
              1,
            ),
          )),
          fillColor: Colors.white54,
          // hintText: hintText,
          hintStyle: TextStyle(
            color: Color.fromRGBO(
              53,
              190,
              156,
              1,
            ),
          ),
          contentPadding: EdgeInsets.only(bottom: 15),
          focusColor: Color.fromRGBO(
            53,
            190,
            156,
            1,
          ),
        ),
      ),
    );
  }
}
