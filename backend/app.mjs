import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
// import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import http from 'http';
import { GraphQLError } from "graphql";
// import {getPayload} from './app/utils/utils.js';
import typeDefs from "./app/schemas/index.js";
import resolvers from "./app/resolvers/index.js";
// import authMiddleware from "./app/middleware/auth.middleware.js"
import context from './app/context/context.js';

const app =express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
typeDefs,
resolvers,
includeStacktraceInErrorResponses: false,
introspection: true,
// context:({req}) =>{
//   console.log('Request:', req);
//   const token = req.headers.authorization || '';
//   console.log("token: ", token)

//   try {
//     const decodedToken = jwt.verify(token, 'Roeman emmannuel');
//     console.log(decodedToken); 
//     const user = decodedToken.user;
//     console.log(`Authenticated user: ${user.username}`);
//     return { user:{id:user.id,username: user.username }};
//   } catch (error) {
//     console.error(`Failed to authenticate user: ${error.message}`);
//     throw new Error("Failed to authenticate user");
//   }

// },
// plugins:[authMiddleware]
    // // get the user token from the headers
    // const token = req.headers.authorization || '';
    // console.log("app.mjs token: ",token)
    // // try to retrieve a user with the token
    // const  lecturer = getPayload(token);
    // console.log(lecturer);
    // if(!lecturer){
    //   throw new GraphQLError('User is not authenticated', {
    //     extensions: {
    //       code: 'UNAUTHENTICATED',
    //       http: { status: 401 },
    //     },
    //   });
    // }
    
    // // add the user to the context
    // return lecturer;




  });
  
  await server.start();
  app.use('/attendance', 
  cors({credentials: true,}),
  bodyParser.json(), 
  expressMiddleware(server,{
    context:context
  })
  
  );
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:4000/attendance  🙋🙋`);


























// const express = require("express");
// const app = express();
// const routes = require("./app/router/router");
// const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser')
// const cors = require("cors");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({credential:true}));
// app.use(cookieParser())
// app.use(routes);
// // require("./app/router/auth.routes")(app);
// // require("./app/router/routes/student.routers")(app);
// const { API_PORT } = process.env;
// const port = process.env.PORT || API_PORT;
// app.listen(port, () => {
//   console.log("Server is running.......................");
// });
