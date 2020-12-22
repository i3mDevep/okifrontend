import React from "react";
import NumberFormat from "react-number-format";

export function NumberFormatCustome(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat {...other} thousandSeparator isNumericString prefix="$" />
  );
}
