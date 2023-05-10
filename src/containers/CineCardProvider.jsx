/**

Composant CineCardProvider pour l'affichage des cartes de films
@param {Object} props - Les propriétés du composant
@param {Node} props.render - Le rendu du composant
@returns {Node} Le composant CineCardProvider avec son rendu enfant
*/
import React, { useMemo } from "react";
import { View } from "@adobe/react-spectrum";
import PropTypes from "prop-types";
const CineCardProvider = ({ render }) => {
  const memoizedRender = useMemo(() => render, [render]);
  return (
    <View
      top="size-0"
      aria-label="affiches "
      marginY="size-0"
      colorVersion="6"
      backgroundColor="gray-100"
      maxWidth={{
        XS: "size-1600",
        S: "size-1600",
        M: "size-1600",
        L: "size-2000",
        XL: "size-2000",
        XXL: "size-2000",
      }}
      borderColor="gray-900"
      borderRadius="large"
      overflowX="auto"
      bottom="size-0"
    >
      {memoizedRender}
    </View>
  );
};

CineCardProvider.propTypes = {
  /**

Le rendu du composant
*/
  render: PropTypes.node.isRequired,
};
export default React.memo(CineCardProvider);
