function List(props) {
    return <div className="user-list">
        <h2>Users</h2>
        <button onClick={() => props.setUser({name: "", bio: "", type: "new"})}>+ new +</button>
        {props.users.map(user=><button key={`${user.id}`} onClick={()=>props.setUser(user)}>{user.name}</button>)}
        </div>
}
export default List;