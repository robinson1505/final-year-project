import { gql } from 'apollo-angular';

const GET_LECTURER = gql`
  query {
    me{
     lecturer_full_name
    }
  }
`;
const GET_LECTURER_TIMETABLE = gql`
query{
  getLecturerTimetable {
    id
    timetable_code
    time_in
    time_out
    module_day
   module {
     module_name
     module_code
   }
   venue {
     venue_name
     venue_capacity
   }

  }
}
`
export {GET_LECTURER,GET_LECTURER_TIMETABLE};