import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const enteredUserName = useRef();
  const enteredAge = useRef();
  const enteredId = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);
  const [idValid, setIdValid] = useState(true);

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

    if (enteredId.current.value.length === 0 || enteredId.current.value < 1) {
      setIdValid(false);
      err = err.length > 0 ? err + ", an id > 1" : "Please enter an id > 1";
    } else setIdValid(true);

    setErrorMessage(err);
    if (err) return;

    props.onSubmit(enteredUserName.current.value + " (age: " + enteredAge.current.value + ")" + " (id: " + enteredId.current.value + ")");
    enteredUserName.current.value = "";
    enteredAge.current.value = "";
    enteredId.current.value = "";
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

          <label
            htmlFor="userId"
            className={!idValid ? classes.invalid_label : undefined}
          >
            UserId
          </label>
          <input
            type="number"
            id="userId"
            ref={enteredId}
            className={!idValid ? classes.invalid_input : undefined}
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
