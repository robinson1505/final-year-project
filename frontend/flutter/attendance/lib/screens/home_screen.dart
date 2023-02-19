import 'package:attendance/widget/bottom_navigation.dart';
import 'package:attendance/widget/session_list.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: () {
          FocusScope.of(context).unfocus();
        },
        child: Scaffold(
          appBar: AppBar(
            centerTitle: true,
            backgroundColor: const Color.fromRGBO(
              53,
              190,
              156,
              1,
            ),
            title: const Text(
              'Attendance App',
              style: TextStyle(
                fontSize: 25,
              ),
            ),
          ),
          body: Padding(
            padding: const EdgeInsets.all(10),
            child: SessionList(),
          ),
          bottomNavigationBar: bottomNavigationBar(),
        ));
  }
}
