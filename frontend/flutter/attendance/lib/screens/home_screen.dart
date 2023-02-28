import 'package:attendance/widget/content_widget.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
      body: const Padding(
        padding: EdgeInsets.all(10),
        child: ContentWidget(),
      ),
    );
  }
}
