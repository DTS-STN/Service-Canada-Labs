import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alpha Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="font-body">
        <div>
          <a href="#">
            <img src="#" alt="Governement of Canada "></img>
            <span lang="en">Government of Canada </span>
            <span lang="fr">Gouvernment du Canada</span>
          </a>
        </div>

        <div>
          <a href="#">Français</a>
          <input type="search" placeholder="Search Canada.ca"></input>
        </div>

        <nav>Menu</nav>
      </header>

      <main>
        <section>
          <div>
            <img src="#" alt="serviceCanada.jpg"></img>
            <h1 className="font-display">
              Service Canada Labs Make government work for you
            </h1>
            <span className="font-body">
              <button>Become a tester</button>
              <button>Start testing</button>
            </span>
          </div>
        </section>

        <section>
          <h2 className="font-display">About us</h2>
          <p className="font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consectetur urna nec tempor tristique. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Nulla at
            condimentum odio, quis porttitor eros. Quisque laoreet pretium
            purus, sed maximus turpis. Quisque ut magna vel dui placerat aliquet
            in non orci.
          </p>

          <figure>Block</figure>

          <figure>
            Block
            <figcaption className="font-body">
              Diagram that shows what we do and how user feedback gets
              transformed in to a service to Canadians - and/or - Benefits of
              joining the user pool for testers
            </figcaption>
          </figure>
        </section>

        <section className="font-body">
          <h3 className="font-display">Contact us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consectetur urna nec tempor tristique.
          </p>
          <a href="#">john.doe@example.com</a>
          <figure>Block</figure>
        </section>

        <section className="font-body">
          <h4 className="font-display">Featured prototypes</h4>
          <figure>Block</figure>
          <figure>Block</figure>
          <figure>Block</figure>
        </section>
      </main>

      <footer className="font-body">
        <div>
          <p>
            Experiencing an issue with this product or have you spotted an
            error?
          </p>
          <button>Report a problem</button>
        </div>

        <ul>
          <li>
            <a href="#">Social media</a>
          </li>
          <li>
            <a href="#">Mobile applications</a>
          </li>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>

        <img src="#" alt="canada.jpg"></img>
      </footer>
    </div>
  );
}
