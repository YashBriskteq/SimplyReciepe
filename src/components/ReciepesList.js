import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ReciepesList = ({ reciepes = [] }) => {
  return (
    <div className="reciepes-list">
      {reciepes.map((reciepe) => {
        const { id, title, image, prepTime, cookTime } = reciepe;
        const path = getImage(image);
        return (
          <Link key={id} to={`/${title}`} className="reciepe">
            {/* {reciepe.title} */}
            <GatsbyImage image={path} className="reciepe-img" alt={title} />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} Mins | Cook: {cookTime}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ReciepesList;
