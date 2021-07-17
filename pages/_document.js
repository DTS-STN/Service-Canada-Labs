import Document, { Html, Head, Main, NextScript } from "next/document";

/* istanbul ignore file */

function getCsp() {
  let csp = ``;
  csp += `base-uri 'self';`;
  csp += `form-action 'self';`;
  csp += `default-src 'self' dts-stn.com *.dts-stn.com;`;
  csp += `script-src 'self' 'unsafe-inline' ${
    process.env.CI === "true"
      ? "'unsafe-eval'"
      : process.env.NODE_ENV === "development"
      ? "'unsafe-eval'"
      : ""
  } https://ajax.googleapis.com https://assets.adobedtm.com;`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
  csp += `connect-src *.demdex.net *.omtrdc.net;`;
  csp += `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com data:;`; // NextJS requires 'unsafe-inline'
  csp += `img-src 'self';`;
  csp += `font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;`;
  // csp += `frame-src *;` // TODO
  // csp += `media-src *;` // TODO
  return csp;
}

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
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={getCsp()} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          {process.env.NEXT_PUBLIC_ADOBE_ANALYTICS_URL ? (
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
