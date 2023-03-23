import React from "react";
import { graphql } from "gatsby";

const Testing = ({ data }) => {
  const author = data.site.info.author;

  return <div>author: {author}</div>;
};

export const data = graphql`
  {
    site {
      buildTime
      info: siteMetadata {
        author
        description
        simpleData
        title
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`;
export default Testing;
