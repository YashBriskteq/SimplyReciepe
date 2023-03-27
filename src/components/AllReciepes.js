import React from "react";
import ReciepesList from "./ReciepesList";
import TagsList from "./TagsList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulReciepe {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const AllReciepes = () => {
  const data = useStaticQuery(query);
  const reciepes = data.allContentfulReciepe.nodes;

  return (
    <section className="reciepes-container">
      {/* <h4>All Reciepes</h4> */}
      <TagsList reciepes={reciepes} />
      <ReciepesList reciepes={reciepes} />
    </section>
  );
};

export default AllReciepes;
