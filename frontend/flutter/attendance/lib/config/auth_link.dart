import 'package:attendance/utils/api_endpoints.dart';
import 'package:attendance/utils/get_token.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

final HttpLink httpLink = HttpLink(uri);
final AuthLink authLink = AuthLink(getToken: () async => getTokenFromStorage());
final Link link = authLink.concat(httpLink);
