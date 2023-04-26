import React, { useMemo, useState } from "react";
import { View } from "@adobe/react-spectrum";
import PropTypes from "prop-types";

const CineCardProvider = ({ render, idItem }) => {
  const [idCard, setIdCard] = useState(idItem);
  console.log(idCard);
  // Handler commun pour le like : avec redux + supabase en port adapter pattern
  // Handler Id
  const memoizedRender = useMemo(() => render, [render]);
  return (
    <View
      colorVersion="6"
      backgroundColor="purple-300"
      width="100%"
      height="100%"
      borderWidth="thick"
      borderColor="black"
      borderRadius="medium"
      padding="size-10"
    >
      {memoizedRender}
    </View>
  );
};

CineCardProvider.propTypes = {
  render: PropTypes.node.isRequired,
  idItem: PropTypes.number.isRequired,
};

export default React.memo(CineCardProvider);
