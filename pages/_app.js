import React from 'react';
import App, { Container } from 'next/app';

<<<<<<< HEAD
import Footer from './../components/layout/Footer';
import Header from './../components/layout/Header';
=======
import Header from './../components/layout/header';
import Footer from './../components/layout/footer';
>>>>>>> 0d601f37bc26d84025bdd9f23e131c148a426278

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
<<<<<<< HEAD
            <Header />
            <Component {...pageProps} />
            <Footer/>
=======
        <Header />
        <div class="ui main text container">
          <Component {...pageProps} />
        </div>
        <Footer />
>>>>>>> 0d601f37bc26d84025bdd9f23e131c148a426278
      </Container>
    );
  }
}

export default MyApp;

