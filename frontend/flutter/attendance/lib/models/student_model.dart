import 'package:attendance/models/program_model.dart';

class StudentModel {
  String? id;
  String? studentFirstName;
  String? studentMiddleName;
  String? studentLastName;
  String? studentRegistrationNumber;
  String? academicYear;
  String? password;
  ProgramModel? program;

  StudentModel(
      {this.id,
      this.studentFirstName,
      this.studentMiddleName,
      this.studentLastName,
      this.studentRegistrationNumber,
      this.academicYear,
      this.password,
      this.program});

  StudentModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    studentFirstName = json['student_first_name'];
    studentMiddleName = json['student_middle_name'];
    studentLastName = json['student_last_name'];
    studentRegistrationNumber = json['student_registration_number'];
    academicYear = json['academic_year'];
    password = json['password'];
    program =
        json['program'] != null ? ProgramModel.fromJson(json['program']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['student_first_name'] = studentFirstName;
    data['student_middle_name'] = studentMiddleName;
    data['student_last_name'] = studentLastName;
    data['student_registration_number'] = studentRegistrationNumber;
    data['academic_year'] = academicYear;
    data['password'] = password;
    if (program != null) {
      data['program'] = program!.toJson();
    }
    return data;
  }
}