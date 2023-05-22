// import 'package:attendance/controllers/login_controller.dart';
import 'package:attendance/mutations/student_login.dart';
import 'package:attendance/screens/home_screen.dart';
import 'package:attendance/utils/context_extension.dart';
// import 'package:attendance/utils/set_token.dart';
// import 'package:attendance/widget/input_field.dart';
// import 'package:attendance/widget/submit_button.dart';
import 'package:flutter/material.dart';
// import 'package:get/get.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:shared_preferences/shared_preferences.dart';
// import 'package:get/get.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController usernameController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final GlobalKey<NavigatorState> navigatorKey = GlobalKey<NavigatorState>();

  @override
  Widget build(BuildContext context) {
    return Mutation(
        options: MutationOptions(
          operationName: "Login",
          document: gql(studentLogin()),
          onCompleted: (data) async {
            if (data != null) {
              context.showSnackBar("Successfull Login! Welcome");
              final token = data['loginStudent'];

              await _saveTokenToStorage(token);

              if (mounted) {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => const HomeScreen()),
                );
              }
            }
          },
          onError: (error) {
            context.showSnackBar(error.toString());
          },
        ),
        builder: (RunMutation runMutation, QueryResult? result) {
          return Scaffold(
            body: Center(
              child: Container(
               
                padding: const EdgeInsets.all(
                  22,
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
             const SizedBox(
                      height: 30,
                    ),
                    circleCard(),
                    const SizedBox(
                      height: 30,
                    ),
                    const Text.rich(
                      TextSpan(
                        text: "STUDENT ",
                        style: TextStyle(
                          fontSize: 30,
                          fontWeight: FontWeight.bold,
                          color: Color.fromRGBO(
                            1,
                            179,
                            239,
                            1,
                          ),
                        
                        ),
                        children: <TextSpan>[
                          TextSpan(
                            text: "LOGIN",
                            style: TextStyle(color: Colors.black54)
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    TextField(
                      controller: usernameController,
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    TextField(
                      controller: passwordController,
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    Container(
                      width: 500,
                      height: 50,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: [
                            BoxShadow(
                                color: Colors.white.withOpacity(0.25),
                                offset: const Offset(0, 0),
                                blurRadius: 2,
                                spreadRadius: 1)
                          ]),
                      child: TextButton(
                        style: ButtonStyle(
                            shape:
                                MaterialStateProperty.all<RoundedRectangleBorder>(
                                    RoundedRectangleBorder(
                                        borderRadius: BorderRadius.circular(5),
                                        side: BorderSide.none)),
                            backgroundColor: MaterialStateProperty.all<Color>(
                              const Color.fromRGBO(
                                1,
                                179,
                                239,
                                1,
                              ),
                            )),
                        onPressed: () {
                          login(runMutation);
                        },
                        child: const Text(
                          "Login",
                          style: TextStyle(
                            fontSize: 24,
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        });
  }

  void login(RunMutation runMutation) {
    final username = usernameController.text;
    final password = passwordController.text;

    runMutation({'studentRegistrationNumber': username, 'password': password});
  }

  Future<void> _onMutationCompleted(resultData) async {
    // Perform actions with the returned data
    if (resultData != null) {
      // context.showSnackBar("Login Successfull");
      final token = resultData['studentLogin'];
      print(token.toString());
      context.showSnackBar(token.toString());

      // Save the token to persistent storage
      await _saveTokenToStorage(token);
      if (mounted) {
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => const HomeScreen()),
        );
      }
    }
  }

  Future<void> _saveTokenToStorage(String token) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString('token', token);
  }
}

Widget circleCard() {
  return Container(
    padding: const EdgeInsets.all(30),
    width: 175,
    height: 175,
    decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(
          100,
        ),
        boxShadow: const [
          BoxShadow(
            color: Color.fromRGBO(
              1,
              179,
              239,
              0.2,
            ),
            spreadRadius: 1,
            blurRadius: 4,
            offset: Offset(0, 1), // changes position of shadow
          ),
        ]),
    child: Image.asset(
      'assets/images/logo.png',
      width: 100,
      height: 100,
    ),
  );
}

// class CircleCard extends StatelessWidget {
  
//   CircleCard({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       width: 150,
//       height: 150,
//       decoration: BoxDecoration(borderRadius: BorderRadius.circular(75)),
//       child: Image.asset(
//               'assets/images/logo.png',
//               width: 100,
//               height: 100,
//             ),
//     );

    // return Container(
    //   width: 150,
    //   height: 150,
    //   child: Card(
    //     shape: RoundedRectangleBorder(
    //       borderRadius: BorderRadius.circular(
    //           75), // Half of the width/height to create a circle
    //     ),
    //     elevation: 4,
    //     child: Padding(
    //       padding: const EdgeInsets.all(8.0),
    //       child: CircleAvatar(
    //         // radius: 60,
    //         backgroundImage: image,
    //       ),
    //     ),
    //   ),
    // );
//   }
// }



























// class LoginScreen extends StatefulWidget {
//   const LoginScreen({super.key});

//   @override
//   State<LoginScreen> createState() => _LoginScreenState();
// }

// class _LoginScreenState extends State<LoginScreen> {
//   // LoginController loginController = Get.put(LoginController());

//   // var isLogin = false.obs;
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Container(
//           padding: const EdgeInsets.all(36),
//           child: Column(
//             crossAxisAlignment: CrossAxisAlignment.center,
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: [
//               Image.asset(
//                 "assets/images/logo.png",
//                 width: 100,
//                 height: 100,
//               ),
//               const SizedBox(
//                 height: 20,
//               ),
//               const Text(
//                 "Welcome Student",
//                 style: TextStyle(
//                     fontSize: 28,
//                     color: Colors.black,
//                     fontWeight: FontWeight.w400),
//               ),
//               loginWidget()
//             ],
//           )),
//     );
//   }

//   Widget loginWidget() {
//     return Column(
//       children: [
//         const SizedBox(
//           height: 20,
//         ),
//         const InputTextFieldWidget(),
//         const SizedBox(
//           height: 20,
//         ),
//         const InputTextFieldWidget(),
//         const SizedBox(
//           height: 20,
//         ),
//         SubmitButton(
//           onPressed: () => {
//             Navigator.pushReplacement(
//               context,
//               MaterialPageRoute(builder: (context) => const HomeScreen()),
//             )
//           },
//           title: 'Login',
//         )
//       ],
//     );
//   }
// }













// import 'package:attendance/widget/login_widget.dart';
// import 'package:flutter/material.dart';

// class LoginScreen extends StatelessWidget {
//   const LoginScreen({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return loginWidget();
//   }
// }
