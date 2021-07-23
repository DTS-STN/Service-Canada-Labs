import Document, { Html, Head, Main, NextScript } from "next/document";

/* istanbul ignore file */

function getCsp() {
  let csp = ``;
  csp += `base-uri 'self';`;
  csp += `form-action 'self';`;
  csp += `default-src 'self' dts-stn.com *.dts-stn.com *.adobe.com *.omniture.com *.2o7.net;`;
  csp += `script-src 'self' 'unsafe-inline' ${
    process.env.CI === "true"
      ? "'unsafe-eval'"
      : process.env.NODE_ENV === "development"
      ? "'unsafe-eval'"
      : ""
  } https://ajax.googleapis.com https://assets.adobedtm.com;`; // NextJS requires 'unsafe-eval' in dev (faster source maps)
  csp += `connect-src 'self' *.demdex.net *.omtrdc.net cm.everesttech.net;`;
  csp += `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com data:;`; // NextJS requires 'unsafe-inline'
  csp += `img-src 'self' *.omtrdc.net *.demdex.net cm.everesttech.net assets.adobedtm.com;`;
  csp += `font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;`;
  csp += `frame-src 'self' *.demdex.net`;
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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
