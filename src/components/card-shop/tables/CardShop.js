import React from "react";
import RefreshIcon from "@material-ui/icons/Refresh";

import { imgProductAvatarTable } from "../../common/urls";
import { HeaderTable, Table } from "../../common/templeate-table";

function CardShopTable({ data }) {
  const tableRef = React.createRef();
  return (
    <Table
      title={
        <HeaderTable url={imgProductAvatarTable} title="Carrito de Compras" />
      }
      tableRef={tableRef}
      columns={[
        { title: "Producto", field: "product.name" },
        { title: "Codigo", field: "product.barcode" },
        { title: "Cantidad", field: "count" },
        { title: "Stock", field: "product.count" },
        { title: "Precio", field: "product.price" },
      ]}
      data={data}
      actions={[
        {
          icon: RefreshIcon,
          tooltip: "Refresh Data",
          isFreeAction: true,
          onClick: () => tableRef.current && tableRef.current.onQueryChange(),
        },
      ]}
      options={{
        pageSize: 10,
        actionsColumnIndex: -1,
        exportButton: false,
        draggable: false,
        filtering: false,
        search: false,
        headerStyle: {
          backgroundImage: "linear-gradient(#434f69, #6a94bf)",
          color: "#FFF",
        },
      }}
      localization={{
        body: {
          emptyDataSourceMessage: "No se encuentran datos",
          filterRow: {
            filterTooltip: "Filter",
          },
        },
      }}
    />
  );
}

export default CardShopTable;
