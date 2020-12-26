import React, { useEffect, useState } from "react";
import { SaleGlobalTable } from "../../components/sales/tables";
import { serviceSales, serviceSaleDetail } from "../../services/sales";
import Pagination from "@material-ui/lab/Pagination";
import { useLocation, useHistory } from "react-router-dom";

export default function SaleGlobalList() {
  const [salesGlobal, setsalesGlobal] = useState([]);
  const [numPagination, setnumPagination] = useState(2);
  const [count, setcount] = useState();
  const [detail, setdetail] = useState([])
  const { search } = useLocation();
  let history = useHistory();

  useEffect(() => {
    let numPage = search.split("=");
    if (numPage.length > 1) {
      setnumPagination(parseInt(numPage[1]));
    }
  }, []);

  useEffect(async () => {
    let response = await serviceSales(search);
    setcount(Math.ceil(parseInt(response.data.count) / 10));
    setsalesGlobal(response.data.results);
  }, [search]);

  const handleChange = (event, value) => {
    history.push({
      pathname: "/app/sales/",
      search: "?page=" + value,
    });
    setnumPagination(value);
  };

  const handleDetailSale = async(id) => {
    let response = await serviceSaleDetail(id)
    console.log(response)
    setdetail(response.data.products)
  };
  return (
    <SaleGlobalTable
      onClickFetch={handleDetailSale}
      globalSale={salesGlobal}
      sale_detail={detail}
      pagination={
        <Pagination
          page={numPagination}
          onChange={handleChange}
          count={count}
          color="secondary"
        />
      }
    />
  );
}
