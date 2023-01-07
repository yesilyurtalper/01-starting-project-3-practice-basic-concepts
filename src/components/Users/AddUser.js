import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const enteredUserName = useRef();
  const enteredAge = useRef();
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.current.value.length === 0 ||
      enteredAge.current.value.length === 0 ||
      +enteredAge < 1
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    console.log(enteredUserName.current.value, enteredAge.current.value);
    props.onSubmit(enteredUserName.current.value + " (" + enteredAge.current.value + ")");
    enteredUserName.current.value = ""
    enteredAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={enteredUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
