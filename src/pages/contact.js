import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ReciepesList from "../components/ReciepesList";

const contact = ({ data }) => {
  const reciepes = data.allContentfulReciepe.nodes;

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nihil ab eveniet omnis dignissimos veniam quos, doloribus tempora
              fuga eius.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              odit, dolor excepturi quo exercitationem ad!
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Connect
              </button>
            </form>
          </article>
        </section>
        <section className="featured-reciepes">
          <h5>Look at this Awesomesource!!!</h5>
          <ReciepesList reciepes={reciepes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulReciepe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default contact;
