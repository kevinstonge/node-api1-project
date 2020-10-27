function List(props) {
    return <div className="user-list">
        <h2>Users</h2>
        {props.users.map(user=><button onClick={()=>props.setUser(user)}>{user.name}</button>)}
        </div>
}
export default List;