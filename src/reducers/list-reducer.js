import { lists as defaultLists } from "../normalized-state";

const listReducer = (lists = defaultLists, action) => {
  console.log("hello from listReducer");
  console.log(lists, action);
  if (action.type === "CARD_CREATE") {
    const { cardId, listId } = action.payload;
    // Add the cardId to the cards array of the appropriate list

    // create a shalow copy of lists.entities
    const entities = { ...lists.entities };

    // replace the list in shalow copy
    // and add another card to the cards ids list
    entities[listId] = {
      ...entities[listId],
      cards: entities[listId].cards.concat(cardId),
      // cards: [...entities[listId].cards, cardId]
    };

    return {
      ...lists,
      entities,
      // equivalet to
      // ...entites
      // ids: [...lists.ids],
    };
  }
  return lists;
};

export default listReducer;
