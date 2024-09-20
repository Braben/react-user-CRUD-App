import UserItem from "./UserItem";

const UserList = (props) => {
  // console.log(props);
  return (
    <div>
      <div className="userList">
        <h1
          style={{
            background: "blue",
            color: "white",
            padding: "15px",
            margin: "5px",
          }}
        >
          User Information
        </h1>
        {props.users.map((user) => {
          return (
            <UserItem
              key={user.id}
              userDetails={user}
              editUser={props.editUser}
              deleteUser={props.deleteUser}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
