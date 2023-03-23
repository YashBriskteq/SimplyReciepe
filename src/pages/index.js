import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const index = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="main-img"
            className="hero-img"
            layout="fullWidth"
            placeholder="tracedSVG"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Reciepes</h1>
              <h4>No Fluff, Only Reciepe</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
};

export default index;
