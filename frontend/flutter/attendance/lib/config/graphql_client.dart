import "package:attendance/config/auth_link.dart";
import "package:flutter/material.dart";
import "package:graphql_flutter/graphql_flutter.dart";

ValueNotifier<GraphQLClient> client =
    ValueNotifier(GraphQLClient(link: link, cache: GraphQLCache()));
