import React, { useEffect, useState } from "react";
import { SaleGlobalTable } from "../../components/sales/tables";
import { serviceSales } from "../../services/sales";

export default function SaleGlobalList() {
  const [salesGlobal, setsalesGlobal] = useState([]);
  useEffect(async () => {
    let response = await serviceSales();
    setsalesGlobal(response.data.results);
  }, []);
  return <SaleGlobalTable globalSale={salesGlobal} />;
}
