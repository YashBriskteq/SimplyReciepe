import { Link } from "gatsby";
import React from "react";
import setUpTags from "../utils/setUpTags";

const TagsList = ({ reciepes }) => {
  const newTag = setUpTags(reciepes);
  return (
    <div className="tag-container">
      <h4>reciepes</h4>
      <div className="tags-list">
        {newTag.map((tag, index) => {
          const [text, value] = tag;
          return (
            <Link to={`/${text}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
