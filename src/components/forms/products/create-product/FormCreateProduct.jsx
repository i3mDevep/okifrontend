import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { form as field } from "./render";
import { RenderFieldsFields, showErrors } from "../../../common/templeate-forms";

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

export default function Forms({ defaultValuesReset }) {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    reset,
    errors,
    formState: { isDirty, isSubmitting },
  } = useForm();

  function resetForm() {
    reset(defaultValuesReset);
  }
  console.log(errors);
  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <Grid container spacing={3}>
        <RenderFieldsFields render={field} control={control} />
        {showErrors(errors)}
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
