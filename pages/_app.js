import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import App from 'next/app';

import './index.css';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
  uri: "http://localhost:4000/gql",
  fetch
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Header />
        <div>
          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <Component {...pageProps} />
            </ApolloHooksProvider>
          </ApolloProvider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyApp;

