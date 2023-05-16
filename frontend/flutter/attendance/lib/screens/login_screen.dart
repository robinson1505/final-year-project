import 'package:attendance/controllers/login_controller.dart';
import 'package:attendance/screens/home_screen.dart';
import 'package:attendance/widget/input_field.dart';
import 'package:attendance/widget/submit_button.dart';
import 'package:flutter/material.dart';
// import 'package:get/get.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  // LoginController loginController = Get.put(LoginController());

  // var isLogin = false.obs;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
          padding: const EdgeInsets.all(36),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                "assets/images/logo.png",
                width: 100,
                height: 100,
              ),
              const SizedBox(
                height: 20,
              ),
              const Text(
                "Welcome Student",
                style: TextStyle(
                    fontSize: 28,
                    color: Colors.black,
                    fontWeight: FontWeight.w400),
              ),
              loginWidget()
            ],
          )),
    );
  }

  Widget loginWidget() {
    return Column(
      children: [
        const SizedBox(
          height: 20,
        ),
        const InputTextFieldWidget(),
        const SizedBox(
          height: 20,
        ),
        const InputTextFieldWidget(),
        const SizedBox(
          height: 20,
        ),
        SubmitButton(
          onPressed: () => {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => const HomeScreen()),
            )
          },
          title: 'Login',
        )
      ],
    );
  }
}













// import 'package:attendance/widget/login_widget.dart';
// import 'package:flutter/material.dart';

// class LoginScreen extends StatelessWidget {
//   const LoginScreen({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return loginWidget();
//   }
// }
