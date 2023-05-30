// import 'package:attendance/widget/bottom_navigation.dart';
// import 'package:attendance/widget/percent_card.dart';
// import 'package:attendance/utils/context_extension.dart';
import 'package:attendance/widget/session_list.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    const String student = """
query{
   student{
     student_registration_number
       student_full_name
   }
 }
 """;

    return GestureDetector(
        onTap: () {
          FocusScope.of(context).unfocus();
        },
        child: Scaffold(
          appBar: AppBar(
            centerTitle: true,
            backgroundColor: const Color.fromRGBO(
              1,
              179,
              239,
              1,
            ),
            title: const Text(
              'Attendance App',
              style: TextStyle(
                fontSize: 25,
              ),
            ),
            actions: [
              IconButton(
                onPressed: () {},
                icon: const Icon(
                  Icons.settings,
                ),
              )
            ],
          ),
          body: Query(
              options: QueryOptions(document: gql(student)),
              builder: ((result, {fetchMore, refetch}) {
                if (result.hasException) {
                  return Center(
                    child: Text(result.exception.toString()),
                  );
                }

                if (result.isLoading) {
                  return const Center(
                    child: CircularProgressIndicator(),
                  );
                }
                return const SessionList();
              })),
          // bottomNavigationBar: bottomNavigationBar(),
        ));
  }
}
