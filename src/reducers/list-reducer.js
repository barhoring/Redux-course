import { lists as defaultLists } from "../normalized-state";

const listReducer = (lists = defaultLists, action) => {
  console.log("hello from listReducer");
  console.log(lists, action);
  return lists;
};

export default listReducer;
