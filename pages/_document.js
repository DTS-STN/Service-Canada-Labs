import Document, { Html, Head, Main, NextScript } from "next/document";

/* istanbul ignore file */

// Used to augment application's html and body tags
// Read more here: https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = ctx.locale === "default" ? "en" : ctx.locale;
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang === "default" ? "en" : this.props.lang}>
        <Head>
          {/* Import fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
