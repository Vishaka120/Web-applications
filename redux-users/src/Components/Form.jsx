import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../Store/Slices/UserSlices";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    Navigate("/");
  };

  return (
    <section className="form-wrapper">
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter the user name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
