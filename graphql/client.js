import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import getAllProjects from "./queries/projectQuery.graphql";

const link = new HttpLink({ uri: process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT,
headers:{
  'User-Agent': 'sc-labs/1.1.3',
} });

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  export default async function(){
    return client
    .query({
      query: 
        getAllProjects
    }).catch((error) => { console.log( error ) })
  }
