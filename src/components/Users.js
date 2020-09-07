import React from "react";

import CreateUser from "./CreateUser";
import UserContainer from "../containers/UserContainer";

const Users = ({ users = [] }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser />
      {users.map((userId) => (
        <UserContainer userId={userId} key={userId} />
      ))}
    </section>
  );
};

export default Users;
