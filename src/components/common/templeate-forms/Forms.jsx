import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import { FieldController } from "./FieldController";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 10,
    backgroundColor: "#0a043c",
  },
}));

const renderForm = {
  grid: { xs: 12, sm: 6 },
  component: TextField,
  controller: {
    name: "michael",
    defaultValue: "",
    rules: {
      required: "Required",
    },
  },
  field: {
    required: true,
    id: "micahel",
    name: "michael",
    label: "esto es un puto test",
    fullWidth: true,
    autoComplete: "michael",
    outline: "fill",
  },
};

const renderForm2 = {
  grid: { xs: 12, sm: 6 },
  component: NumberFormat,
  controller: {
    fullWidth: true,
    name: "numero perro",
    label: "ingresa platica",
    defaultValue: "",
    required: true,
    rules: {
      required: "Required",
    },
  },
  field: {
    customInput: TextField,
    thousandSeparator: true,
    prefix: "$ ",
  },
};
export default function Forms({ defaultValuesReset }) {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    errors,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm();

  function resetForm() {
    reset(defaultValuesReset);
  }

  renderForm.controller["control"] = control;
  renderForm2.controller["control"] = control

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <Grid container spacing={3}>
        <FieldController {...renderForm} />
        <FieldController {...renderForm2} />
        <FieldController
          grid={{ xs: 12, sm: 6 }}
          component={TextField}
          controller={{
            control: control,
            name: "test",
            defaultValue: "",
            rules: {
              required: "Required",
            },
          }}
          field={{
            required: true,
            id: "test",
            name: "test",
            label: "esto es un puto test",
            fullWidth: true,
            autoComplete: "test",
            outline: "fill",
          }}
        />
        <FieldController
          grid={{ xs: 12, sm: 6 }}
          component={NumberFormat}
          controller={{
            fullWidth: true,
            name: "numero perro",
            label: "ingresa platica",
            defaultValue: "",
            required: true,
            control: control,
            rules: {
              required: "Required",
            },
          }}
          field={{
            customInput: TextField,
            thousandSeparator: true,
            prefix: "$ ",
          }}
        />
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={!isDirty || isSubmitting}
      >
        Crear Producto
      </Button>
    </form>
  );
}
