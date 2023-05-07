import { gql } from "apollo-angular";

const Login = gql`
  mutation Login($lecturerStaffNumber: String!, $password: String!) {
    login(lecturer_staff_number: $lecturerStaffNumber, password: $password)
  }
`;
export default Login;