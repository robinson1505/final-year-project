import 'package:attendance/config/graphql_client.dart';
// import 'package:attendance/screens/splash_screen.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() => runApp(AttendanceApp());

class AttendanceApp extends StatelessWidget {
  AttendanceApp({super.key});

  final TextEditingController regnumberController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return GraphQLProvider(
      client: client,
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: "Attendance App",
        home: Scaffold(
          appBar: AppBar(
            title: const Text(
              "Mutation",
            ),
            centerTitle: true,
          ),
          body: Mutation(
            options: MutationOptions(
                document: gql('''
             mutation Login(\$studentRegistrationNumber: String!, \$password: String!){
loginStudent(student_registration_number: \$studentRegistrationNumber, password: \$password)
             }

'''),
                onCompleted: (resultData) async {
                  if (resultData != null) {
                    final token = resultData['loginStudent']['token'];
                    await saveTokenToStorage(token);
                    print(token);

                    //  final AuthLink authLink = AuthLink(getToken: () => getTokenFromStorage());
                    //  final Link link = authLink.concat(httpLink);
                  }
                }),
            builder: (RunMutation runMutation, QueryResult? result) {
              return Column(
                children: [
                  TextField(
                    controller: regnumberController,
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  TextField(
                    controller: passwordController,
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  TextButton(
                    onPressed: () {
                      final regNumber = regnumberController.text;
                      final password = passwordController.text;
                      runMutation({
                        'studentRegistrationNumber': regNumber,
                        'password': password,
                      });
                    },
                    child: const Text(
                      "Submit",
                    ),
                  ),
                ],
              );
            },
          ),
        ),
      ),
    );
  }
}

Future<void> saveTokenToStorage(String token) async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();
  await prefs.setString('token', token);
}












// class AttendanceApp extends StatelessWidget {
//   const AttendanceApp({super.key});

//   @override
//   Widget build(BuildContext context) {
//     const String fetchTimetable = """
// query{
//   getAllTimetable{
//     id
//     timetable_code
//     module_day
//   }
// }
// """;

//     return GraphQLProvider(
//       client: client,
//       child: MaterialApp(
//         debugShowCheckedModeBanner: false,
//         title: " Attendance App",
//         home: Scaffold(
//           body: Query(
//               options: QueryOptions(document: gql(fetchTimetable)),
//               builder: ((result, {fetchMore, refetch}) {
//                 if (result.hasException) {
//                   return Center(
//                     child: Text(result.exception.toString()),
//                   );
//                 }
//                 if (result.isLoading) {
//                   return const Center(
//                     child: CircularProgressIndicator(),
//                   );
//                 }
//                 List timetables = result.data!['getAllTimetable'];
//                 return ListView.builder(
//                     itemCount: timetables.length,
//                     itemBuilder: (context, index) {
//                       final timetable = timetables[index];

//                       return ExpansionTile(
//                         title: Text(
//                           timetable['id'],
//                           style: const TextStyle(fontWeight: FontWeight.w700),
//                         ),
//                       );
//                     });
//               })),
//         ),
//       ),
//     );
//   }
// }
//  home: SplashScreen(),