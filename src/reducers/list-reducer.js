import { lists as defaultLists } from "../normalized-state";
import { addCardIdToList } from "./_utilities";

const listReducer = (lists = defaultLists, action) => {
  if (action.type === "CARD_CREATE") {
    const { cardId, listId } = action.payload;
    return addCardIdToList(listId, cardId, lists);
  }
  return lists;
};

export default listReducer;
