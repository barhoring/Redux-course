import { lists as defaultLists } from "../normalized-state";

const listReducer = (lists = defaultLists, action) => {
  return lists;
};

export default listReducer;
