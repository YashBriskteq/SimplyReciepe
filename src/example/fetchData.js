// import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         buildTime
//         siteMetadata {
//           author
//           description
//           simpleData
//           title
//           person {
//             age
//             name
//           }
//           complexData {
//             age
//             name
//           }
//         }
//       }
//     }
//   `);
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <div>
//         {data.site.siteMetadata.complexData.map((item, index) => {
//           return (
//             <p key={index}>
//               {item.name}:{item.age}
//             </p>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ComponentName;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query FirstQuery {
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

const FetchData = () => {
  const data = useStaticQuery(getData);

  return (
    <div>
      <h1>{data.site.info.person.name}</h1>
    </div>
  );
};

export default FetchData;
