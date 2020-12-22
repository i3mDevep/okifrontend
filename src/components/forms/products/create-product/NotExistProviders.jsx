import { useHistory } from "react-router-dom";
import React from "react";
import Button from "@material-ui/core/Button";

export default function NotExistProvider() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <Button variant="outlined" color="primary" onClick={handleClick}>
      Crear Proveedor
    </Button>
  );
}
