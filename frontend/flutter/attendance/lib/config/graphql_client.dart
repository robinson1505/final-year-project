// import "package:flutter/material.dart";
import "package:flutter/material.dart";
import "package:graphql_flutter/graphql_flutter.dart";
import "package:shared_preferences/shared_preferences.dart";

const String uri = "http://192.168.1.3:4000/attendance";

final HttpLink httpLink = HttpLink(uri);
final AuthLink authLink = AuthLink(getToken: () async => getTokenFromStorage());
final Link link = authLink.concat(httpLink);

ValueNotifier<GraphQLClient> client =
    ValueNotifier(GraphQLClient(link: link, cache: GraphQLCache()));

Future<String> getTokenFromStorage() async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();
  final token = prefs.getString('token') ?? '';
  return token;
}
// final AuthLink authLink = AuthLink(
//   getToken: () async => 'Bearer <YOUR_PERSONAL_ACCESS_TOKEN>',
// );

// final Link link = authLink.concat(httpLink);

// ValueNotifier<GraphQLClient> client = ValueNotifier(GraphQLClient(
//   cache: GraphQLCache(),
//   link: httpLink,
// ));

// GraphQLClient initGraphQLClient() {
//   final client = GraphQLClient(
//     link: httpLink,
//     cache: GraphQLCache(),
//   );
//   return client;
// }
