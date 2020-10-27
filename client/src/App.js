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
  },[])
  return (
    <>
      <List users={users} setUser={setUser}/>
      <ViewUser user={user} />
      </>
  );
}

export default App;
