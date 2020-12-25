import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "37ch",
    height: "90vh",
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AlignItemsList({ list = [], component: Component, onClick }) {
  const classes = useStyles();
  const Item = React.forwardRef((props, ref) => (
    <Component innerRef={ref} {...props} />
  ));
  return (
    <List className={classes.root}>
      {list.map((data) => (
        <Item key={data.id} {...data} onClick={onClick} />
      ))}
    </List>
  );
}
