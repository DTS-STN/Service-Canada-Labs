import Document, { Html, Head, Main, NextScript } from "next/document";

// Used to augment application's html and body tags
// Read more here: https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
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
