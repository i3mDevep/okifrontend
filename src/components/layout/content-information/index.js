import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";

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

export default function ContentInformation({ description, img, children }) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg" style={{ position: "relative" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <Alert style={{ position: "absolute", left: "10px" }} severity="info">
          {description}
        </Alert>
        <img alt="" src={img} className={classes.logo} />
        {children}
      </div>
    </Container>
  );
}
