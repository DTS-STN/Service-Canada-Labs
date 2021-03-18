import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alpha Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <figure>
          <img src="#" alt="logo.jpg"></img>
          <figcaption>
            Governement of Canada
            Gouvernement du Canada
          </figcaption>
        </figure>

        <section>
          <a href="#">Français</a>
          <input type="search" placeholder="Search Canada.ca"></input>
        </section>
      </header>

      <main>
        <nav>Menu</nav>

        <section>
          <figure>
            <img src="#" alt="serviceCanada.jpg"></img>
            <h1>
              Servica Canada Labs
              Make government work for you
            </h1>
            <figcaption>
              <button>Become a tester</button>
              <button>Start testing</button>
            </figcaption>
          </figure>
        </section>

        <section>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna nec tempor tristique.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Nulla at condimentum odio, quis porttitor eros. Quisque laoreet pretium purus, sed maximus turpis.
            Quisque ut magna vel dui placerat aliquet in non orci.
          </p>

          <figure>
            Block
          </figure>

          <figure>
            Block
            <figcaption>
              Diagram that shows what we do and how user feedback
              gets transformed in to a service to Canadians
              - and/or -
              Benefits of joining the user pool for testers
            </figcaption>
          </figure>
        </section>

        <section>
          <h3>Contact us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur urna nec tempor tristique.</p>
          <a href="#">john.doe@example.com</a>
          <figure>
            Block
          </figure>
        </section>

        <section>
          <h4>Featured prototypes</h4>
          <figure>
            Block
          </figure>
          <figure>
            Block
          </figure>
          <figure>
            Block
          </figure>
        </section>
      </main>

      <footer>
        <figure>
          Experiencing an issue with this product or have you spotted an error?
            <figcaption>
            <button>Report a problem</button>
          </figcaption>
        </figure>

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
  )
}
