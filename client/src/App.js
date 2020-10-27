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
  }, [])
  const addUser = (user) => {
    axios.post("http://localhost:5000/api/users",user).then(r=>setUsers(r.data.users)).catch(e=>console.log(e));
  }
  return (
    <>
      <List users={users} setUser={setUser}/>
      <ViewUser user={user} addUser={addUser} setUsers={setUsers} />
      </>
  );
}

export default App;
