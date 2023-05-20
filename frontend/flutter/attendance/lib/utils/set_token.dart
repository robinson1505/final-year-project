import 'package:shared_preferences/shared_preferences.dart';

Future<void> saveTokenToStorage(String token) async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();
  await prefs.setString('token', token);
  print('Token: $token');
}