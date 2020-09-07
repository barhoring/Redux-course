// Every obj returned by an exported function in this file will get dispatch(obj)
const LIST_CREATE = "LIST_CREATE";
const LIST_DELETE = "LIST_DELETE";

export const createList = ({ title }) => {
  const listId = Date.now().toString();
  const list = { cards: [], title, id: listId };
  return { type: LIST_CREATE, payload: { list, listId } };
};

export const removeList = (listId) => {
  // remove from list entity
  // remove from ids
  // remove all cards and their ids
  return { type: LIST_DELETE, payload: { listId } };
};
