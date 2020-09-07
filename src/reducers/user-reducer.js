import { users as defaultUsers } from "../normalized-state";

const userReducer = (users = defaultUsers, action) => {
  return users;
};

export default userReducer;
