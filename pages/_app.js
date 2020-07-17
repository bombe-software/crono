import React from 'react';
import App, { Container } from 'next/app';

import Footer from './../components/layout/Footer';
import Header from './../components/layout/Header';

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
            <Component {...pageProps} />
            <Footer/>
      </Container>
    );
  }
}

export default MyApp;