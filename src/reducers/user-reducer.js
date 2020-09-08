import { users as defaultUsers } from "../normalized-state";
import { removeEntity } from "./_utilities";
const userReducer = (users = defaultUsers, action) => {
  if (action.type === "USER_DELETE") {
    const { userId } = action.payload;
    return removeEntity(users, userId);
  }
  return users;
};

export default userReducer;
