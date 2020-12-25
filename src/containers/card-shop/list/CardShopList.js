import CardShopTable from "../../../components/card-shop/tables";
import {
  serviceListCardShops,
  serviceAddProduct,
} from "../../../services/card-shops";
import CardAddProductForm from "./CardAddProduct";
import Grid from "@material-ui/core/Grid";

import { convertErrorInString } from "../../../utils/error/convertErrorInString";
import ReactNotification, {
  quicklyNotification,
} from "../../../components/common/notifications";

import { useState, useEffect } from "react";
import ResumCardShop from "./ResumeCardShop";

async function re_render(setstate, setresume) {
  const result = await serviceListCardShops();
  setstate(result.data.products);
  setresume({
    price: result.data.total_sale_price,
    count: result.data.total_sale_products,
  });
}

export default function CardShopTableContainer() {
  const [list, setlist] = useState([]);
  const [totals, settotals] = useState({});
  useEffect(async () => {
    re_render(setlist, settotals);
  }, []);
  const handleOnSubmit = async (data, resetForm) => {
    try {
      data["count"] = parseInt(data["count"]);
      data["barcode"] = data["barcode"].trim();
      await serviceAddProduct(data);
      quicklyNotification(
        "producto agregado exitosamente",
        "success",
        "Wonderful!"
      );
      resetForm();
      re_render(setlist, settotals);
    } catch (error) {
      if (error.response) {
        quicklyNotification(convertErrorInString(error), "danger", "Opps!");
      } else {
        quicklyNotification("error desconocido", "danger", "Opps!");
      }
    }
  };
  return (
    <Grid container spacing={3}>
      <ReactNotification />
      <Grid item xs={12} sm={7}>
        <CardShopTable data={list} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <ResumCardShop products={list} {...totals} >
          <CardAddProductForm onSubmit={handleOnSubmit} />
        </ResumCardShop>
      </Grid>
    </Grid>
  );
}
