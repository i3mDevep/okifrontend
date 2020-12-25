import React from "react";
import CardAddProduct from "../../../components/card-shop/form";
import { render } from "./render";

export default function CardAddProductForm(props) {
  return (
    <div style={{ margin: "auto" }}>
      <CardAddProduct {...props} fields={render} />
    </div>
  );
}
