import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

import { HttpHeaders } from '@angular/common/http';

const uri = 'http://localhost:4000/attendance'; // <-- add the URL of the GraphQL server here
 export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem('token');
    if (token) {
      operation.setContext({
        headers: new HttpHeaders().set('Authorization', token),
      });
    }
    return forward(operation);
  });



//   const basic = setContext((operation, context) => ({
//     headers: {
//       Accept: 'charset=utf-8',
//     },
//   }));
//   const auth = setContext((operation, context) => {
//     const token = localStorage.getItem('token');
//     if (token === null) {
//       return {};
//     } else {
//       return {
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//       };
//     }
//   });
 const link = ApolloLink.from([

     authMiddleware,
     httpLink.create({ uri, withCredentials: true }),
   ]);
  return {

     link,
    cache: new InMemoryCache(),
   };
 }

// // export function createApollo(httpLink:HttpLink):ApolloClientOptions<any>{
// //   return {
// //     link:httpLink.create({uri}),
// //     cache:new InMemoryCache()
// //   }
// // }

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}


