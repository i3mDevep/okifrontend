import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { currencyFormat } from "../../../utils/formatCOP";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

export default function SimpleCard({ children, price, products = [] }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://previews.123rf.com/images/stockgiu/stockgiu1909/stockgiu190903711/132615774-online-market-to-buy-technology-and-credit-card-vector-illustration.jpg"
        title="Paella dish"
      />
      {children}
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Bienvenido a tu carrito de compras
        </Typography>
        <Typography variant="h5" component="h2">
          {currencyFormat(price || 0)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Resumen de compra:
        </Typography>
        {products.map((p) => (
          <Typography variant="body2" component="p">
            {`lleva ${p.count} de ${p.product.name} con un valor de  ${
              p.product &&
              currencyFormat(parseInt(p.count) * parseInt(p.product.price))
            }`}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}
