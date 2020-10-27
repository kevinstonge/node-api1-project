function ViewUser(props) {
    return <div className="view-user">
                        <h2>User Details</h2>
        {props.user ? (
            <>
                <h3>{props.user.name}</h3>
                <h3>(id: {props.user.id})</h3>
                <p>bio: {props.user.bio}</p>
            </>
        ) : (<p>select a user</p>)}
        
    </div>
}
export default ViewUser;