import { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
import List from "./List";
import ViewUser from "./ViewUser";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then(r => setUsers(r.data));
  }, [users])
  const addUser = (user) => {
    axios.post("http://localhost:5000/api/users", user).then(r => { setUsers(r.data); setUser(null)}).catch(e=>console.log(e));
  }
  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then(r => { setUsers(r.data); setUser(null)});
  }
  const editUser = user => {
    const { id, name, bio } = user;
    axios.put(`http://localhost:5000/api/users/${id}`, { name, bio }).then(r =>  setUsers(r.data));
  }
  return (
    <>
      <List users={users} setUser={setUser}/>
      <ViewUser user={user} addUser={addUser} setUsers={setUsers} deleteUser={deleteUser} editUser={editUser}/>
      </>
  );
}

export default App;
