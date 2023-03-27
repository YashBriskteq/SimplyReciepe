const setUpTags = (reciepes) => {
  const allTags = {};

  reciepes.forEach((reciepe) => {
    reciepe.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  // console.log(allTags);
  const newTag = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });
  return newTag;
};

export default setUpTags;
