import React, { useEffect, useState } from "react";
import { serviceListProviders } from "../../../services/providers";
import { serviceListMarks } from "../../../services/marks";
import { serviceCreateProduct } from "../../../services/products";
import { assingFormatOptions } from "../../../utils/assignOptionsValues";
import { parseFormatMoney } from "../../../utils/formatMoney";
import { convertErrorInString } from "../../../utils/error/convertErrorInString"
import ProductFormCreate from "../../../components/forms/products/create-product";
import ReactNotification, {
  quicklyNotification
} from "../../../components/common/notifications";

export default function ProductFormCreateContainer() {
  const [marks, setmarks] = useState([]);
  const [providers, setproviders] = useState([]);
  useEffect(async () => {
    setmarks(await assingFormatOptions(serviceListMarks));
    setproviders(await assingFormatOptions(serviceListProviders));
  }, []);
  const handlerOnSubmit = async (data, resetForm) => {
    data["num_sale"] = 0;
    data["price"] = parseFormatMoney(data, "price");
    data["cost"] = parseFormatMoney(data, "cost");
    try {
      await serviceCreateProduct(data);
      quicklyNotification("producto creado exitosamente", "success", "Wonderful!")
      resetForm();
    } catch (error) {
      if (error.response) {
        quicklyNotification(convertErrorInString(error), "danger", "Opps!")
      } else {
        quicklyNotification("error desconocido", "danger", "Opps!")
      }
    }
  };
  return (
    <div>
      <ReactNotification />
      <ProductFormCreate
        mark={marks}
        provider={providers}
        onSubmit={handlerOnSubmit}
      />
    </div>
  );
}
