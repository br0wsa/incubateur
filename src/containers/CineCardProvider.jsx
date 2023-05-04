import React, { useMemo, useState } from "react";
import { View } from "@adobe/react-spectrum";
import PropTypes from "prop-types";

const CineCardProvider = ({ render }) => {
  const memoizedRender = useMemo(() => render, [render]);
  return (
    <View
      aria-label="affiches "
      marginY="size-0"
      colorVersion="6"
      backgroundColor="gray-100"
      width="100%"
      height="100%"
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
};

export default React.memo(CineCardProvider);
