import { lists as defaultLists } from "../normalized-state";
import { addCardIdToList, removeCardIdFromList, addEntity } from "./_utilities";

const listReducer = (lists = defaultLists, action) => {
  if (action.type === "CARD_CREATE") {
    const { cardId, listId } = action.payload;
    return addCardIdToList(lists, listId, cardId);
  }
  if (action.type === "CARD_DELETE") {
    const { listId, cardId } = action.payload;
    return removeCardIdFromList(lists, listId, cardId);
  }
  if (action.type === "LIST_CREATE") {
    const { listId, list } = action.payload;
    return addEntity(lists, list, listId);
  }
  return lists;
};

export default listReducer;
