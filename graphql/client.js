import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({ uri: process.env.AEM_GRAPHQL_ENDPOINT,
headers:{
  'User-Agent': 'sc-labs/1.1.3',
} });

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  export default async function(AEMQuery){
    return client
    .query({
      query: 
        AEMQuery
    }).catch((error) => { console.log( error ) })
  }
