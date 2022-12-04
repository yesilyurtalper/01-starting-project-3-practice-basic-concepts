import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";

const AddUser = (props) => {

  const [enteredUserName, setEnteredUserName] = useState('');
  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const [enteredAge, setEnteredAge] = useState('');
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    if(enteredUserName.trim().length === 0 
        || enteredAge.trim().length === 0
        || +enteredAge < 1)
    return;
    
    console.log(enteredUserName, enteredAge);
    props.onSubmit(enteredUserName+' (' + enteredAge + ')');
    setEnteredAge('');
    setEnteredUserName('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={enteredUserName} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
