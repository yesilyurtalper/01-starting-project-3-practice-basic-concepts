import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UserList";

function App() {

  const [userItems, setUserItems] = useState([]);

  const deleteUserHandler = (userId) => {
    setUserItems(prevItems => prevItems.filter(item => item.id != userId));
  }

  const addUserHandler = (enteredValue) => {
    setUserItems(prevItems => [{id:crypto.randomUUID(), value: enteredValue},...prevItems])
  }

  let listContent = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );
  if (userItems.length > 0) {
    listContent = (
      <UsersList users={userItems} 
        onDeleteUser={deleteUserHandler}/>
    );
  }

  return (
    <div>
      <section>
        <AddUser onSubmit={addUserHandler}/>
      </section>
      <section id='userslist'>
        {listContent}
      </section>
    </div>
  );
}

export default App;
