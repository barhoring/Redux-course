import { users as defaultUsers } from "../normalized-state";
import { removeEntity, addEntity } from "./_utilities";
const userReducer = (users = defaultUsers, action) => {
  if (action.type === "USER_DELETE") {
    const { userId } = action.payload;
    return removeEntity(users, userId);
  }
  if (action.type === "USER_CREATE") {
    const { user, userId } = action.payload;
    return addEntity(users, user, userId);
  }
  return users;
};

export default userReducer;
