import React from 'react';
import App, { Container } from 'next/app';

import Header from './../components/layout/header';
import Footer from './../components/layout/footer';

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
        <Header />
        <div class="ui main text container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </Container>
    );
  }
}

export default MyApp;

