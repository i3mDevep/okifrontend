import React from "react";
import Button from "@material-ui/core/Button";

function ActionsHeader() {
    return (
      <div style={{display:'inline-flex'}}>
        <Button
          style={{ margin: "0 10px", backgroundColor: "#434f69" }}
          variant="contained"
          color="primary"
        >
          Crear Nuevo
        </Button>
        <Button
          style={{ margin: "0 10px", backgroundColor: "#6a94bf" }}
          variant="contained"
          color="primary"
        >
          Ver Detalle
        </Button>
      </div>
    );
  }
export default ActionsHeader