import React, { useState } from "react";

function withLikesHOC(WrappedComponent) {
  return function ComponentWithLikes(props) {
    const [added, setAdded] = useState(false);
    const handleFavoris = () => {
      setAdded(!added);
      console.log("ajouter", added);
    };

    return (
      <WrappedComponent
        {...props}
        added={added}
        handleFavoris={handleFavoris}
      />
    );
  };
}

export default withLikesHOC;
