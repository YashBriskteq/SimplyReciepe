import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import setUpTags from "../utils/setUpTags";

const tags = ({ data }) => {
  const newTag = setUpTags(data.allContentfulReciepe.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTag.map((tag, index) => {
            const [text, value] = tag;
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} reciepe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulReciepe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default tags;
