String timetable() { 
  
  return '''
query{
  getStudentTimetable{
     module_day
     time_in
     time_out
     venue{
      venue_name
     }
     module{
      module_name
      module_code
     lecturer {
       lecturer_full_name
     }
     }
   }
 }


''';
}