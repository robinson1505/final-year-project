import jwt from "jsonwebtoken";
import throwCustomError, { ErrorTypes } from "../helpers/error.helper.js";

const getUser = async (token) => {
  try {
    if (token) {
      const user = jwt.verify(token, "MyPrivate");
      return user;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const context = async ({ req, res }) => {
  console.log("reaches here....................");
  // console.log("request for headers..........",req.headers.authorization);
  // console.log(req.body.operationName);
  if (req.body.operationName === "IntrospectionQuery") {
    // console.log("blocking introspection query..");
    return {};
  }
  // allowing the 'CreateUser' and 'Login' queries to pass without giving the token
  if (
    req.body.operationName === "CreateUser" ||
    req.body.operationName === "Login"
  ) {
    return {};
  }
  // get the user token from the headers
  const token = req.headers.authorization || "";
  console.log("THIS IS THE CONTEXT TOKEN", token);
  // try to retrieve a user with the token

  const user = await getUser(JSON.parse(token));
  // const user = await getUser(token);
  console.log("USERS ...........", user);
  if (!user) {
    throwCustomError("User is not Authenticated", ErrorTypes.UNAUTHENTICATED);
  }

  // add the user to the context
  return { user };
};
export default context;
