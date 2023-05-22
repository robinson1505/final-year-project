import 'package:flutter/material.dart';

extension ShowSnackbar on BuildContext {
  void showSnackBar(String message) {
    ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(
        elevation:2 ,
        backgroundColor: const Color.fromRGBO(
          1,
          179,
          239,
          1,
        ),
        content: Text(
          message,
          textAlign: TextAlign.center,
          style: const TextStyle(color: Colors.white,fontSize: 16,fontWeight: FontWeight.bold),
        ),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      ),
      
    );
  }
}
