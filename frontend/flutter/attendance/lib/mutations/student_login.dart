String studentLogin() {
  return '''
             mutation Login(\$studentRegistrationNumber: String!, \$password: String!){
loginStudent(student_registration_number: \$studentRegistrationNumber, password: \$password)
             }

''';
}
