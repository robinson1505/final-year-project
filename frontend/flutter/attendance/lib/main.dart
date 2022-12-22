import 'package:attendance/screens/splash_screen.dart';
import 'package:flutter/material.dart';

void main() => runApp(const AttendanceApp());

class AttendanceApp extends StatelessWidget {
  const AttendanceApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: " Attendance App",
      home: SplashScreen(),
    );
  }
}
