import React from "react";
import md5 from "md5";
import { users } from "../normalized-state";

const createProfileImageUrl = ({ email }) => {
  const hash = md5(email.trim());
  return `https://www.gravatar.com/avatar/${hash}`;
};

const User = ({ user, removeUser }) => {
  const profileImage = createProfileImageUrl(user);

  return (
    <article className="User">
      <img className="User-picture" src={profileImage} alt={user.name} />
      <div className="User-info">
        <h2>{user.name}</h2>
      </div>
      <button
        onClick={() => removeUser(user.id)}
        className="user-remove danger"
      >
        Remove User
      </button>
    </article>
  );
};

export default User;
