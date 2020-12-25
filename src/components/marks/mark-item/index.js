import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ListItemIcon from '@material-ui/core/ListItemIcon'

export default function MarkItem({ name, id, onClick }) {
  return (
    <ListItem>
      <ListItemIcon>
        <ViewModuleIcon />
      </ListItemIcon>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => onClick(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
