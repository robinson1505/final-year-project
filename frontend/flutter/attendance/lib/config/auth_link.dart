// import "package:graphql_flutter/graphql_flutter.dart";

// class AuthLink extends Link {
//   final Future<String> Function() getToken;
//   AuthLink(this.getToken);

//   @override
//   Stream<Response> request(Request request, [NextLink? forward]) async* {
//     final token = getToken();
//     final updatedHeaders = <String, String>{
//       'Authorization': 'Bearer $token',
//     };

//     final updatedRequest = Request(
//       operation: request.operation,
//       variables: request.variables,
//       context: request.context,
//       headers: updatedHeaders,
//     );
//     yield* forward!(updatedRequest);
//   }
// }
