import 'dart:convert';
import 'dart:io';

import 'package:attendance/screens/home_screen.dart';
import 'package:attendance/utils/api_endpoints.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

class LoginController extends GetxController {
  TextEditingController regNumberController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  final Future<SharedPreferences> _prefs = SharedPreferences.getInstance();

  Future<void> loginWithRegNumber() async {
    try {
      var headers = {'Content-Type': 'application/json'};
      var url =
          Uri.parse(ApiEndPoints.baseUrl + ApiEndPoints.authEndpoints.login);

      Map body = {
        'email': regNumberController.text.trim(),
        'password': passwordController.text
      };
      http.Response response =
          await http.post(url, body: jsonEncode(body), headers: headers);
      if (response.statusCode == 200) {
        final json = jsonDecode(response.body);
        if (json['code'] == 0) {
          var token = json['data']['Token'];
          print(token);
          final SharedPreferences? prefs = await _prefs;
          await prefs?.setString('token', token);
          regNumberController.clear();
          passwordController.clear();
          Get.off(const HomeScreen());
        } else if (json['code'] == 1) {
          throw jsonDecode(response.body)["Message"] ??
              "Unknown Error Occurred";
        }
      } else {
        throw jsonDecode(response.body)["Message"] ?? "Unknown Error Occurred";
      }
    } catch (error) {
      Get.back();
      showDialog(
          context: Get.context!,
          builder: (context) {
            return SimpleDialog(
              title: const Text('Error'),
              contentPadding: const EdgeInsets.all(20),
              children: [Text(error.toString())],
            );
          });
    }
  }
}
