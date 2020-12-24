import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import FormCreateProduct from '../../forms/products/create-product/FormCreateProduct'
import { imgDogAndPerson } from  '../../common/urls'

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
  logo: {
    width: 250,
  },
}));

export default function ProductCreate() {
  const classes = useStyles();
  const defaultValues = {
    provider: "",
    marca: "",
    unit: "",
  };
  return (
    <Container component="main" maxWidth="lg" style={{ position: "relative" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <Alert style={{ position: "absolute", left: "10px" }} severity="info">
          Crea tus productos desde este lugar
        </Alert>
        <img
          alt=""
          src={imgDogAndPerson}
          className={classes.logo}
        />
      <FormCreateProduct />
      </div>
    </Container>
  );
}
