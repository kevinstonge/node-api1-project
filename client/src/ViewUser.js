import { useState, useEffect } from "react";
import axios from "axios";

function ViewUser(props) {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [enableSubmit, setEnableSubmit] = useState(false);
    useEffect(() => {
        if (props.user) {
            if (props.user.name) {
                setName(props.user.name);
            } else { setName("") }
            if (props.user.bio) {
                setBio(props.user.bio);
            } else { setBio("") }
        }
    }, [props.user]);
    useEffect(() => {
        if (name === "" || bio === "" || (name===props.user.name && bio ===props.user.bio)) {
            setEnableSubmit(false);
        }
        else { setEnableSubmit(true)}
    }, [name, bio, props.user])
    const handleSubmit = e => {
        e.preventDefault();
        if (props.user.type === "new") {
            axios.post("http://localhost:5000/api/users", { name, bio }).then(r => { props.setUsers(r.data); setEnableSubmit(false)});
        }
        else {
            axios.put(`http://localhost:5000/api/users/${props.user.id}`, { name, bio }).then(r => { props.setUsers(r.data); setEnableSubmit(false)});
        }
    };
    return <div className="view-user">
                        <h2>User Details</h2>
        {props.user ? (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name: 
                    <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </label>
                <label htmlFor="bio">bio: 
                    <textarea id="name" value={bio} onChange={e=>setBio(e.target.value)} rows="5"></textarea>
                </label>
                <button type="submit" disabled={!enableSubmit}>{props.user.type === "new" ? <>create</> : <>save</>}</button>
            </form>
        ) : (<p>← select a user</p>)}
        
    </div>
}
export default ViewUser;