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
   module {
     module_name
     module_code
   }
   venue {
     venue_name
   }

  }
}
`
export {GET_LECTURER,GET_LECTURER_TIMETABLE};