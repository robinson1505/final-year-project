class LecturerModel {
  LecturerModel({required this.name});

  final String name;
  factory LecturerModel.fromJson(Map<String, dynamic> json) {
    return LecturerModel(name: json['lecturer_full_name']);
  }
}
