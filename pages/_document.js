import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head >
                    <link
                        href="/semantic/dist/semantic.min.css"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/images/logoCronos.ico"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;