import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function NotExistMark() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <Button variant="outlined" color="secondary" onClick={handleClick}>
      Crear Marca
    </Button>
  );
}
