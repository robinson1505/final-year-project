
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:attendance/config/graphql_client.dart';
import 'package:attendance/screens/splash_screen.dart';


void main() => runApp(const AttendanceApp());

class AttendanceApp extends StatelessWidget {
  const AttendanceApp({super.key});

  @override
  Widget build(BuildContext context) {
   
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