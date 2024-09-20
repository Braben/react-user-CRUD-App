import { useState } from "react";

import { v4 as uuid } from "uuid"; //add uuid packages - yarn add uuid

function UserForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  //this is for the handle email input funtion
  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.length > 0 && email.length > 0) {
      let newUser = {
        fullName: fullName,
        email: email,
        id: uuid(),
      };

      props.addUser(newUser);
      //THIS CLEARS THE INPUT ON SUBMIT
      setFullName("");
      setEmail("");
    }
  };
  return (
    <div>
      <div className="form">
        <h1
          style={{
            background: "blue",
            color: "white",
            padding: "15px",
            margin: "5px",
          }}
        >
          Enter Information
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={fullName}
              onChange={handleFullName}
              className="fname"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              value={email}
              onChange={handleEmail}
              className="mail"
              type="email"
              placeholder="Email"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
