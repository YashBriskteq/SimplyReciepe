import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";
import slugify from "slugify";

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
              <div className="reciepe-icons">
                <article>
                  <BsClock />
                  <h5>Prep Time</h5>
                  <p>{prepTime} Mins.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook Time</h5>
                  <p>{cookTime} Mins.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* <p className="reciepe-tags">
                Tags :
                {tags?.map((tag, index) => {
                  return (
                    <Link to={`/${tag}`} key={index}>
                      {tag}
                    </Link>
                  );
                })}
              </p> */}
            </article>
          </section>
          <section className="reciepe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
              {/* <div>
                <h4>Tools</h4>
                {tools &&
                  tools.map((item, index) => {
                    return (
                      <p key={index} className="single-tool">
                        {item}
                      </p>
                    );
                  })}
              </div> */}
            </article>
          </section>
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
