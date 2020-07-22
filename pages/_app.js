import React from 'react';
import App from 'next/app';

import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';

import "./index.css";

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
      <div>
        <Header />
        <div className="ui text container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyApp;

