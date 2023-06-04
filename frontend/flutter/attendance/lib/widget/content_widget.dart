import 'package:attendance/widget/session_list.dart';
import 'package:card_swiper/card_swiper.dart';
import 'package:attendance/widget/percent_card.dart';
import 'package:flutter/material.dart';

class ContentWidget extends StatefulWidget {
  const ContentWidget({super.key});

  @override
  State<ContentWidget> createState() => _ContentWidgetState();
}

class _ContentWidgetState extends State<ContentWidget> {

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return SingleChildScrollView(
      child: Column(
        children: [
          const SizedBox(
            height: 18,
          ),
          SizedBox(
            height: size.height * 0.25,
            child: Swiper(
              itemCount: 3,
              autoplay: true,
              itemBuilder: (context, index) {
                return const PercentCard();
              },
              pagination: const SwiperPagination(
                alignment: Alignment.bottomCenter,
                builder: DotSwiperPaginationBuilder(
                  color: Colors.white,
                  activeColor: Colors.red,
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(
              8.0,
            ),
            child:Container(
              width: double.infinity,
              alignment: Alignment.topLeft, 
            child: const Text(
              "Next Sessions",
              textAlign: TextAlign.start,
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color:Color.fromRGBO(
                  53,
                  190,
                  156,
                  1,
                ),
              ),)
            ),
          ),
      
          
          const SessionList()

        
        ],
      ),
    );
  }
}
