import { useState } from "react";
import "../App.css";
import ModalItem from "./ModalItem";

function UserItem(props) {
  // console.log(props);
  const [showModal, setShowModal] = useState(false);

  const handleModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="userItem">
      <h1>Name: {props.userDetails.fullName}</h1>
      <h1>Email: {props.userDetails.email}</h1>
      <div>
        <button onClick={handleModalState}>Edit</button>
        <button onClick={() => props.deleteUser(props.userDetails.id)}>
          Delete
        </button>
      </div>

      <ModalItem
        show={showModal}
        onClose={handleModalState}
        userDetails={props.userDetails}
        editUser={props.editUser}
      />
    </div>
  );
}

export default UserItem;
