import React from "react";
import { useProgressBar } from "react-aria";
import PropTypes from "prop-types";

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

  return (
    <svg
      {...progressBarProps}
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      strokeWidth={strokeWidth}
    >
      <circle role="presentation" cx={center} cy={center} r={r} stroke="gray" />
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
  );
}

ProgressCircle.propTypes = {
  isIndeterminate: PropTypes.bool.isRequired,
  value: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

export default ProgressCircle;
