const USER_DELETE = "USER_DELETE";

export const removeUser = (userId) => {
  return {
    type: USER_DELETE,
    payload: { userId },
  };
};
