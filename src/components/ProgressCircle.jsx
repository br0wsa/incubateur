import React from "react";
import { useProgressBar, useId } from "react-aria";
import { Grid, View, Text, Flex } from "@adobe/react-spectrum";
import PropTypes from "prop-types";
import funkyDog from "../assets/images/dog.png";

function ProgressCircle(props) {
  let { isIndeterminate, value, minValue = 0, maxValue = 100 } = props;
  let { progressBarProps } = useProgressBar(props);

  let center = 16;
  let strokeWidth = 4;
  let r = 16 - strokeWidth;
  let c = 2 * r * Math.PI;
  let percentage = isIndeterminate
    ? 0.25
    : (value - minValue) / (maxValue - minValue);
  let offset = c - percentage * c;
  let progressCircleId = useId();

  return (
    <Grid
      marginTop="size-300"
      marginBottom="size-300"
      marginX="auto"
      columns="1fr"
      gap="size-300"
      justifyItems="center"
      alignItems="center"
      justifyContent="space-between"
      alignContent="space-between"
    >
      <View
        zIndex="3"
        colorVersion="6"
        backgroundColor="magenta-600"
        width="size-2400"
        height="size-2400"
        borderWidth="thick"
        borderColor="black"
        borderRadius="medium"
        padding="size-100"
        key={progressCircleId}
      >
        <Flex
          direction="column"
          width="100%"
          gap="size-100"
          alignItems="center"
          justifyContent="center"
        >
          <Text>Funky WaAaf</Text>
          <svg
            {...progressBarProps}
            width={128}
            height={128}
            viewBox="0 0 64 64"
            fill="none"
            strokeWidth={strokeWidth}
          >
            <defs>
              <pattern id="image" x="0" y="0" height="32" width="32">
                <image x="0" y="0" height="32" width="32" href={funkyDog} />
              </pattern>
            </defs>
            <circle
              role="presentation"
              cx={center}
              cy={center}
              r={r}
              stroke="gray"
              fill="url(#image)"
            />
            <circle
              role="presentation"
              cx={center}
              cy={center}
              r={r}
              stroke="black"
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={offset}
              transform="rotate(-90 16 16)"
            >
              {props.isIndeterminate && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  begin="0s"
                  dur="1s"
                  from="0 16 16"
                  to="360 16 16"
                  repeatCount="indefinite"
                />
              )}
            </circle>
          </svg>
        </Flex>
      </View>
    </Grid>
  );
}

ProgressCircle.propTypes = {
  isIndeterminate: PropTypes.bool.isRequired,
  value: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

export default ProgressCircle;
