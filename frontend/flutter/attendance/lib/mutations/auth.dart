import "package:flutter/material.dart";

class Auth extends StatefulWidget {
  const Auth({super.key});

  @override
  State<Auth> createState() => _AuthState();
}

class _AuthState extends State<Auth> {
  final TextEditingController usernameController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final bool hidePassword = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: const Text(
          "Login Here",
        ),
      ),
      body: Center(
        child: Column(
          children: [
            const Expanded(
              child: Text(
                "Please Login",
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            Expanded(
              child: TextField(
                controller: usernameController,
                decoration: const InputDecoration(
                  alignLabelWithHint: true,
                  focusedBorder: UnderlineInputBorder(
                      borderSide: BorderSide(
                    color: Color.fromRGBO(
                      53,
                      190,
                      156,
                      1,
                    ),
                  )),
                  fillColor: Colors.white54,
                  // hintText: hintText,
                  hintStyle: TextStyle(
                    color: Color.fromRGBO(
                      53,
                      190,
                      156,
                      1,
                    ),
                  ),
                  contentPadding: EdgeInsets.only(bottom: 15),
                  focusColor: Color.fromRGBO(
                    53,
                    190,
                    156,
                    1,
                  ),
                ),
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            Expanded(
              child: TextField(
                obscureText: hidePassword,
                controller: passwordController,
                decoration: const InputDecoration(
                  alignLabelWithHint: true,
                  focusedBorder: UnderlineInputBorder(
                      borderSide: BorderSide(
                    color: Color.fromRGBO(
                      53,
                      190,
                      156,
                      1,
                    ),
                  )),
                  fillColor: Colors.white54,
                  // hintText: hintText,
                  hintStyle: TextStyle(
                    color: Color.fromRGBO(
                      53,
                      190,
                      156,
                      1,
                    ),
                  ),
                  contentPadding: EdgeInsets.only(bottom: 15),
                  focusColor: Color.fromRGBO(
                    53,
                    190,
                    156,
                    1,
                  ),
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            Expanded(
              child: TextButton(
                onPressed: () {},
                child: const Text(
                  "Login",
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
