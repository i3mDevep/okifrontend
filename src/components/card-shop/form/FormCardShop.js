import React from "react";
import { SimpleForm } from "../../common/templeate-forms";

export default function AddProductCardShop(props) {
  return (
    <div style={{ minWidth: "400px", margin: "20px" }}>
      <SimpleForm {...props} />
    </div>
  );
}
