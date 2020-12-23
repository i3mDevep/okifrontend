import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import Alert from "@material-ui/lab/Alert";

import NotExistProvider from "./NotExistProviders";
import NotExistMark from "./NotExisteMark";

import {
  TextFieldController,
  NumberFieldController,
  SelectFieldController,
} from "../../../common/inputs";

import unit from '../../../../const/unit'

const UNITS = unit

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ffff",
    padding: 15,
    borderRadius: 10,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 10,
    backgroundColor: "#0a043c",
  },
  logo: {
    width: 250,
  },
}));

export default function CreateProduct({ onSubmit, mark, provider }) {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    errors,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm();
  const defaultValues = {
    provider: "",
    marca: "",
    unit: "",
  };
  function resetForm() {
    reset(defaultValues);
  }
  return (
    <Container component="main" maxWidth="lg" style={{ position: "relative" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <Alert style={{ position: "absolute", left: "10px" }} severity="info">
          Crea tus productos desde este lugar
        </Alert>
        <img
          alt=""
          src={
            "data:image/png;base64,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"
          }
          className={classes.logo}
        />
        <form
          className={classes.form}
          onSubmit={handleSubmit((data) => {
            onSubmit(data, resetForm);
          })}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextFieldController
                control={control}
                name="name"
                label="Nombre del producto"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextFieldController
                control={control}
                name="barcode"
                label="Codigo"
                required
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <NumberFieldController
                control={control}
                name="price"
                label="Precio de producto"
                required
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <NumberFieldController
                control={control}
                name="cost"
                label="Costo de producto"
                required
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextFieldController
                control={control}
                name="count"
                label="Cantidad"
                type="number"
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <NotExistProvider />
              <SelectFieldController
                control={control}
                helperText="Por favor selecciona un proveedor"
                name="provider"
                label="Proveedor"
                options={provider}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <NotExistMark />
              <SelectFieldController
                control={control}
                helperText="Por favor selecciona una marca"
                name="marca"
                label="Marca"
                options={mark}
              />
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginTop: "30px" }}>
              <SelectFieldController
                control={control}
                helperText="Por favor selecciona una unidad"
                name="unit"
                label="Unidad"
                options={UNITS}
              />
            </Grid>
          </Grid>
          <FormControl fullWidth style={{ marginTop: "30px" }}>
            <TextFieldController
              control={control}
              name="description"
              label="Descripción"
              multiline
              rows={2}
              variant="outlined"
            />
          </FormControl>
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
      </div>
    </Container>
  );
}
