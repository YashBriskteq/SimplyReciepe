import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";

const ReciepeTemplate = ({ data }) => {
  const {
    title,
    prepTime,
    cookTime,
    content,
    servings,
    image,
    description: { description },
  } = data.contentfulReciepe;

  const path = getImage(image);
  const { tags, ingredients, instructions, tools } = content;

  return (
    <Layout>
      <div className="page">
        <div className="reciepe-page">
          <section className="reciepe-hero">
            <GatsbyImage image={path} alt={title} className="about-img" />
            <article className="reciepe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="reciepe-icons"></div>
              <div className="reciepe-tags">
                Tags:
                {tags.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}{" "}
              </div>
            </article>
          </section>
          <section className="reciepe-content"></section>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getSingleReciepe($title: String) {
    contentfulReciepe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;
export default ReciepeTemplate;
