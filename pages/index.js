import Head from "next/head";
import { Layout } from "../components/organisms/Layout";
import { EntryBanner } from "../components/molecules/EntryBanner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alpha Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout banner={<EntryBanner />}>
        <body>
          <main>
            <section>
              <h2>About us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consectetur urna nec tempor tristique. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Nulla at condimentum odio, quis porttitor eros. Quisque
                laoreet pretium purus, sed maximus turpis. Quisque ut magna vel
                dui placerat aliquet in non orci.
              </p>

              <figure>Block</figure>

              <figure>
                Block
                <figcaption>
                  Diagram that shows what we do and how user feedback gets
                  transformed in to a service to Canadians - and/or - Benefits
                  of joining the user pool for testers
                </figcaption>
              </figure>
            </section>

            <section>
              <h3>Contact us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consectetur urna nec tempor tristique.
              </p>
              <a href="#">john.doe@example.com</a>
              <figure>Block</figure>
            </section>

            <section>
              <h4>Featured prototypes</h4>
              <figure>Block</figure>
              <figure>Block</figure>
              <figure>Block</figure>
            </section>
          </main>
        </body>
      </Layout>
    </div>
  );
}
