import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ApolloProvider } from "@apollo/client/react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";


const client:ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://countries.trevorblades.com",
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
