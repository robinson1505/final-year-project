import { gql } from 'apollo-angular';

const GET_VENUES = gql`
  query {
    getAllVenues {
      id
      venue_name
      venue_code
      venue_capacity
    }
  }
`;

export default GET_VENUES;
