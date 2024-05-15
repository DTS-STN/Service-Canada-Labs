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
          {process.env.ADOBE_ANALYTICS_URL ? (
            <script src={process.env.ADOBE_ANALYTICS_URL} />
          ) : (
            ""
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.ADOBE_ANALYTICS_URL ? (
            <script type="text/javascript">_satellite.pageBottom()</script>
          ) : (
            ""
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
