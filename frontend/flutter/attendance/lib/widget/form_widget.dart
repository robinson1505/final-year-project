import 'package:attendance/screens/home_screen.dart';
import 'package:flutter/material.dart';

class FormWidget extends StatefulWidget {
  const FormWidget({super.key});

  @override
  State<FormWidget> createState() => _FormWidgetState();
}

class _FormWidgetState extends State<FormWidget> {
  final _formKey = GlobalKey<FormState>();
  final regNoController = TextEditingController();
  final passwordController = TextEditingController();
  final hidePassword = true;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        padding: const EdgeInsets.all(18),
        width: double.infinity,
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(
              20,
            ),
            boxShadow: const [
              BoxShadow(
                color: Color.fromRGBO(53, 190, 156, 0.5),
                spreadRadius: 2,
                blurRadius: 4,
                offset: Offset(0, 0), //change position of shadow
              )
            ]),
        child: Form(
          key: _formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const SizedBox(
                height: 20,
              ),
              const Text(
                "Login",
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              TextFormField(
                controller: regNoController,
                decoration: const InputDecoration(
                  focusedBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Color.fromRGBO(53, 190, 156, 1),
                      width: 2.0,
                    ),
                  ),
                  enabledBorder: OutlineInputBorder(
                    borderSide: BorderSide(
                      color: Color.fromRGBO(53, 190, 156, 1),
                      width: 2.0,
                    ),
                  ),
                  icon: Icon(
                    Icons.person,
                    color: Color.fromRGBO(53, 190, 156, 1),
                  ),
                  labelText: "Reg No",
                ),
              ),
              const SizedBox(
                height: 20,
              ),
              TextFormField(
                controller: passwordController,
                obscuringCharacter: '*',
                obscureText: hidePassword,
                decoration: InputDecoration(
                    focusedBorder: const OutlineInputBorder(
                      borderSide: BorderSide(
                        color: Color.fromRGBO(53, 190, 156, 1),
                        width: 2.0,
                      ),
                    ),
                    enabledBorder: const OutlineInputBorder(
                      borderSide: BorderSide(
                        color: Color.fromRGBO(53, 190, 156, 1),
                        width: 2.0,
                      ),
                    ),
                    icon: const Icon(
                      Icons.lock,
                      color: Color.fromRGBO(53, 190, 156, 1),
                    ),
                    labelText: "Password",
                    suffixIcon: IconButton(
                        onPressed: () {},
                        icon: const Icon(Icons.visibility_off))),
              ),
              const SizedBox(
                height: 20,
              ),
              ElevatedButton(
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all<Color>(
                      const Color.fromRGBO(
                        53,
                        190,
                        156,
                        1,
                      ),
                    ),
                  ),
                  onPressed: () {
                    Navigator.pushReplacement(context,
                        MaterialPageRoute(builder: (context) => HomeScreen()));
                  },
                  child: const Text("Login",
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold)))
            ],
          ),
        ),
      ),
    );
  }
}
