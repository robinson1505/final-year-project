class ProgramModel {
  String? id;
  String? programName;
  String? programCode;
  String? ntaLevel;

  ProgramModel({this.id, this.programName, this.programCode, this.ntaLevel});

  ProgramModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    programName = json['program_name'];
    programCode = json['program_code'];
    ntaLevel = json['nta_level'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['program_name'] = programName;
    data['program_code'] = programCode;
    data['nta_level'] = ntaLevel;
    return data;
  }
}