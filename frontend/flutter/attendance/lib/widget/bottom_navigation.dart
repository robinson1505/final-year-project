import 'package:flutter/material.dart';

Widget bottomNavigationBar() {
  return BottomNavigationBar(
    backgroundColor: const Color.fromRGBO(53, 190, 156, 1) ,
    selectedItemColor: Colors.white,
    unselectedItemColor: Colors.blueGrey,
    elevation: 20,
    items:const [
    BottomNavigationBarItem(
      icon: Icon(Icons.home),
      label:"Home"
      ),
        BottomNavigationBarItem(
      icon: Icon(Icons.message),
      label:"Updates"
      ),
  BottomNavigationBarItem(
      icon: Icon(Icons.person),
      label:"Profile"
      )


  ],);
}
