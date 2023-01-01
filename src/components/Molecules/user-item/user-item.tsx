import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { FunctionComponent } from "react";

interface UserItemProps {
  label: string;
  value: string;
}

const UserItem: FunctionComponent<UserItemProps> = (props) => {
  const { label, value } = props;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar></Avatar>
      </ListItemAvatar>
      <ListItemText primary={label} secondaryTypographyProps={{ color: "black", fontWeight: 600 }} primaryTypographyProps={{ color: "GrayText" }} secondary={value} />
    </ListItem>
  );
};

export default UserItem;
