import React, { useMemo, useState } from "react";
import { View } from "@adobe/react-spectrum";
import PropTypes from "prop-types";

const CineCardProvider = ({ render, idItem }) => {
  const [idCard, setIdCard] = useState(idItem);
  // Handler commun pour le like : avec redux + supabase en port adapter pattern
  // Handler Id
  const memoizedRender = useMemo(() => render, [render]);
  return (
    <View
      marginY="size-0"
      colorVersion="6"
      backgroundColor="gray-100"
      width="100%"
      height="100%"
      // borderWidth="thick"
      borderColor="gray-900"
      borderRadius="medium"
      overflow="hidden"
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
