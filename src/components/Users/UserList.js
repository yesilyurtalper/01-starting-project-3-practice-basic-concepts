import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const itemClickHandler = (event) => {
    props.onDeleteUser(event.target.id);
  };

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((item) => (
          <li id={item.id} key={item.id} onClick={itemClickHandler}>
            {item.value}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
