import 'package:attendance/widget/sessions.dart';
import 'package:flutter/material.dart';

class SessionList extends StatelessWidget {
  const SessionList({super.key});

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return SizedBox(
        width: double.infinity,
        height: size.height,
        child: ListView.builder(
            itemCount: 3,
            itemBuilder: (context, index) {
              return Sessions(
                icon: const Icon(
                  Icons.alarm,
                  color: Colors.white,
                  size: 30,
                ),
                day: const Text("Monday" ,style:TextStyle(color:Colors.white, fontSize:18,fontWeight:FontWeight.bold,),),
                module:const  Text("Computerized Account" ,style:TextStyle(color:Colors.white, fontSize:15,fontWeight:FontWeight.bold,),),
                venue: const Text("Block LWF 02 - B 15",style:TextStyle(color:Colors.white, fontSize:18,fontWeight:FontWeight.bold,),),
                time: const Text("8:00 - 10:00",style:TextStyle(color:Colors.white, fontSize:15,fontWeight:FontWeight.bold,),),
              );
            }));
  }
}
