import { gql } from 'apollo-angular';

const GET_LECTURER = gql`
  query {
    me{
     lecturer_full_name
    }
  }
`;

export default GET_LECTURER;