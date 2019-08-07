import React from 'react';
import App, { Container } from 'next/app';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const link = createHttpLink({
  uri: "http://localhost:4000/",
  credentials: 'include'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={client} >
          Este es un header
          <Component {...pageProps} />
          Este es un footer
        </ApolloProvider>
      </Container>
    );
  }
}

export default MyApp;