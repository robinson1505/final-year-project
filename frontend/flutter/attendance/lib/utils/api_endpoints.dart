class ApiEndPoints {
  static const String baseUrl = 'http://192.168.1.9:4000';

  static _AuthEndPoints authEndpoints = _AuthEndPoints();
}

class _AuthEndPoints {
  final String login = 'student/login';
}
