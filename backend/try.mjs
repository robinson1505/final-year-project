import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import http from 'http';
import context from './app/context/context';

const typeDefs = `
  type Query {
    hello: String
  }
`;
// Resolver
const resolvers = {
    Query: {
      hello: (parent, args, context) => {
        console.log(context.req.headers)
        const headers = context.req.headers;
        // Use the headers in your resolver logic
       
        return headers.id;
      },
    },
  };
const app =express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
typeDefs,
resolvers,
includeStacktraceInErrorResponses: false,
introspection: true,
context: ({ req }) => {console.log(req.header); return{req:{id:"robinson"}};},
  });
  
  await server.start();
  app.use('/try', 
  cors({credentials: true,}),
  bodyParser.json(), 
  expressMiddleware(server,{
    context:context
  })
  
  );
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  
  console.log(`🚀 Server ready at http://localhost:4000/try  🙋🙋`);

