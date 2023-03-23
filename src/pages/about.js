import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const about = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              voluptas reprehenderit doloremque neque quos illo voluptates qui
              eligendi ipsam consequatur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, soluta.
            </p>
            <Link to="/contact" className="btn">
              Connect
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="about-img"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default about;
