import React from "react";
import Grid from "@material-ui/core/Grid";
import { Controller } from "react-hook-form";

export const FieldController = ({
  component,
  field,
  controller,
  grid,
}) => {
  let ComponentField = component;
  return (
    <Grid item {...grid}>
      <Controller
        {...controller}
        as={<ComponentField {...field} />}
      />
    </Grid>
  );
};
