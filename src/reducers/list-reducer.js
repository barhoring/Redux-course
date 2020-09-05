import { lists as defaultLists } from "../normalized-state";
import { addCardIdToList, addEntity } from "./_utilities";

const listReducer = (lists = defaultLists, action) => {
  if (action.type === "CARD_CREATE") {
    const { cardId, listId } = action.payload;
    return addCardIdToList(listId, cardId, lists);
  }
  if (action.type === "LIST_CREATE") {
    const { listId, list } = action.payload;
    return addEntity(lists, list, listId);
  }
  return lists;
};

export default listReducer;
