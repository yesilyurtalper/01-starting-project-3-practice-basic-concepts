import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const enteredUserName = useRef();
  const enteredAge = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    let err = "";

    if (enteredUserName.current.value.length === 0) {
      setNameValid(false);
      err = "Please enter a nonempty name";
    } else setNameValid(true);

    if (enteredAge.current.value.length === 0 || enteredAge.current.value < 1) {
      setAgeValid(false);
      err = err.length > 0 ? err + ", an age > 1" : "Please enter an age > 1";
    } else setAgeValid(true);

    setErrorMessage(err);
    if (err) return;

    props.onSubmit(
      enteredUserName.current.value + " (" + enteredAge.current.value + ")"
    );
    enteredUserName.current.value = "";
    enteredAge.current.value = "";
  };

  const errorHandler = () => {
    //setGlobalError(null);
  };

  return (
    <div>
      {/* {globalError && (
        <ErrorModal
          title={globalError.title}
          message={globalError.message}
          errorHandler={errorHandler}
        />
      )} */}

      <Card className={classes.form_control}>
        <form onSubmit={submitHandler}>
          <label
            htmlFor="username"
            className={!nameValid ? classes.invalid_label : undefined}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            ref={enteredUserName}
            className={!nameValid ? classes.invalid_input : undefined}
          />

          <label
            htmlFor="age"
            className={!ageValid ? classes.invalid_label : undefined}
          >
            Age (Years)
          </label>
          <input
            type="number"
            id="age"
            ref={enteredAge}
            className={!ageValid ? classes.invalid_input : undefined}
          ></input>

          <Button type="submit">Add User</Button>

          {errorMessage && (
            <label id="errorLabel" className={classes.invalid_label}>
              {errorMessage}
            </label>
          )}
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
