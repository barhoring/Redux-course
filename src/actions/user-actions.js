const USER_DELETE = "USER_DELETE";
const USER_CREATE = "USER_CREATE";

export const removeUser = (userId) => {
  return {
    type: USER_DELETE,
    payload: { userId },
  };
};

export const createUser = ({ email, name }) => {
  debugger;
  const userId = Date.now().toString();
  const user = { userId, email, name };
  return {
    type: USER_CREATE,
    payload: { user, userId },
  };
};
