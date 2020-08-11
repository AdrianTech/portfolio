import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./styles.scss";
import "./styles/main.scss";
const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckd8wvanybzqg01z5fmav82s2/master",
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("wrapper");
ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Main />
    </Router>
  </ApolloProvider>,
  rootElement
);
