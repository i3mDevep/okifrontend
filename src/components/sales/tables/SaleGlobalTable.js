import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import payment from "../../../const/payment";

import moment from "moment";

import { SelectOrdered, SelectTypePayment } from "../inputs";
import { SearchForm } from "../forms";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row({
  id,
  date_sale,
  type_payment,
  total_price_sale,
  total_product_sale,
  sale_detail = [],
  onClickFetch,
}) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              if (!open) {
                onClickFetch(id);
              }
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {id}
        </TableCell>
        <TableCell component="th" scope="row">
          {moment(date_sale).format("LLL")}
        </TableCell>
        <TableCell align="center">{payment[type_payment].label}</TableCell>
        <TableCell align="right">{total_price_sale}</TableCell>
        <TableCell align="center">{parseInt(total_product_sale)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Venta Detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell>Codigo</TableCell>
                    <TableCell>Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sale_detail.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell component="th" scope="row">
                        {sale.product.name}
                      </TableCell>
                      <TableCell>{sale.product.barcode}</TableCell>
                      <TableCell>{sale.count}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export function SaleGlobalTable({
  globalSale = [],
  pagination,
  onClickFetch,
  sale_detail,
  filter,
  order,
  search,
}) {
  return (
    <TableContainer component={Paper}>
      <div style={{ display: "flex" }}>
        {pagination}
        <SelectOrdered {...order} />
        <SelectTypePayment {...filter} />
        <SearchForm {...search} />
      </div>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Numero factura</TableCell>
            <TableCell>Fecha de venta</TableCell>
            <TableCell align="right">Metodo de pago</TableCell>
            <TableCell align="right">Total de dinero</TableCell>
            <TableCell align="right">Total de productos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalSale.map((row) => (
            <Row
              key={row.id}
              sale_detail={sale_detail}
              onClickFetch={onClickFetch}
              {...row}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
