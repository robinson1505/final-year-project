class ModuleModel {
  ModuleModel({required this.moduleName, required this.moduleCode});

  final String moduleCode;
  final String moduleName;

  factory ModuleModel.fromJson(Map<String, dynamic> json) {
    return ModuleModel(
        moduleName: json['module_name'], moduleCode: json['module_code']);
  }
}
