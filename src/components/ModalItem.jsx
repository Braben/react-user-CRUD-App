import { useState } from "react";
import "../App.css"; // CSS for styling the modal

function ModalItem({ show, onClose, userDetails, editUser }) {
  // console.log(userDetails);
  // Initialize state directly from props
  const [fullName, setFullName] = useState(userDetails.fullName || "");
  const [email, setEmail] = useState(userDetails.email || "");

  if (!show) return null; // Return null if modal is not supposed to be shown

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // THIS CODE HERE HANDLE THE UPDATED USER DETAILS
  // const handleSaveButton = (e) => {
  //   e.preventDefault();
  //   const updatedUser = {
  //     fullName: fullName,
  //     email: email,
  //   };
  //   editUser(userDetails.id, updatedUser); // Call parent editUser method with updated values
  //   onClose(); // Close the modal after saving
  //   // console.log(updatedUser);
  // };

  //THIS IS ACTUAL EDIT OR UPDATE USER DETAILS FUNCTION
  const handleSaveButton = (e) => {
    e.preventDefault();

    const update = {
      fullName: fullName,
      email: email,
    };
    const newUserDetails = {
      // thid merged the userdetails and the updated user details
      ...userDetails,
      ...update,
    };
    console.log(userDetails);
    console.log(update);

    editUser(userDetails.id, newUserDetails); // Call parent editUser method with updated values
    onClose(); // Close the modal after saving
    // console.log(updatedUser);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Update User Details</h2>

        <form onSubmit={handleSaveButton}>
          <div>
            <input
              value={fullName}
              onChange={handleFullName}
              className="fname"
              type="text"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={handleEmail}
              className="mail"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="modal-btns">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalItem;
