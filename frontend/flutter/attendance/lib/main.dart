import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:attendance/config/graphql_client.dart';
import 'package:attendance/screens/splash_screen.dart';

void main() => runApp(const AttendanceApp());

// class AttendanceApp extends StatelessWidget {
//   AttendanceApp({super.key});

//   final TextEditingController regnumberController = TextEditingController();
//   final TextEditingController passwordController = TextEditingController();

//   @override
//   Widget build(BuildContext context) {
//     return GraphQLProvider(
//       client: client,
//       child: MaterialApp(
//         debugShowCheckedModeBanner: false,
//         title: "Attendance App",
//         home: Scaffold(
//           appBar: AppBar(
//             title: const Text(
//               "Mutation",
//             ),
//             centerTitle: true,
//           ),
//           body: Mutation(
//             options: MutationOptions(
//                 document: gql(loginStudent),
//                 variables: {
//                   'studentRegistrationNumber':regnumberController.text
//                 },
//                 onCompleted: (resultData) async {
//                   if (resultData != null) {
//                     final token = resultData['loginStudent']['token'];
//                     await saveTokenToStorage(token);
//                     print(token);

//                     //  final AuthLink authLink = AuthLink(getToken: () => getTokenFromStorage());
//                     //  final Link link = authLink.concat(httpLink);
//                   }
//                 }),
//             builder: (RunMutation runMutation, QueryResult? result) {
//               return Column(
//                 children: [
//                   TextField(
//                     controller: regnumberController,
//                   ),
//                   const SizedBox(
//                     height: 10,
//                   ),
//                   TextField(
//                     controller: passwordController,
//                   ),
//                   const SizedBox(
//                     height: 15,
//                   ),
//                   TextButton(
//                     onPressed: () {
//                       // final regNumber = regnumberController.text;
//                       // final password = passwordController.text;
//                       runMutation({
//                         // 'studentRegistrationNumber': regNumber,
//                         // 'password': password,
//                       });
//                     },
//                     child: const Text(
//                       "Submit",
//                     ),
//                   ),
//                 ],
//               );
//             },
//           ),
//         ),
//       ),
//     );
//   }
// }

class AttendanceApp extends StatelessWidget {
  const AttendanceApp({super.key});

  @override
  Widget build(BuildContext context) {
//     const String fetchTimetable = """
// query{
//   getAllTimetable{
//     id
//     timetable_code
//     module_day
//   }
// }
// """;

    return GraphQLProvider(
      client: client,
      child: const MaterialApp(
          debugShowCheckedModeBanner: false,
          title: " Attendance App",
          home: SplashScreen()),
    );
  }
}
//  home: SplashScreen(),

// Scaffold(
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