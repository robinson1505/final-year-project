import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config("../../../.env");


const getToken = payload => {
  const token = jwt.sign({payload}, process.env.SECRET, {
    expiresIn: 604800 // 1 Week
  });
  return payload,token;
};

const getPayload = token => {
  console.log("Hey i have not be used")
  try {
    console.log("Logged in")
    const payload = jwt.verify(token, process.env.SECRET);
    return { loggedIn: true, payload };
  } catch (err) {
    console.log(err);
    // Add Err Message
    return { loggedIn: false };
    
  }
};

export { getPayload, getToken };
