import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeUsers } from "../Store/Slices/UserSlices";
import ClipLoader from "react-spinners/ClipLoader";
export default function UserDerails() {
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, [2000]);
  }, []);
  const dispatch = useDispatch();
  console.log(users);
  const removeUserHandler = (id) => {
    dispatch(
      removeUsers({
        id: id,
      })
    );
  };
  return (
    <>
      {loading ? (
        <ClipLoader
          color={"#000000"}
          loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <h1>Dashboard</h1>
          <div className="header">
            <h3 className="user-header">List of Users</h3>
            <Link to="/form" className="btn btn-primary">
              Add users
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeUserHandler(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
