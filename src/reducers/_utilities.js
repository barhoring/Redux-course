import { set, get, pipe } from "lodash/fp";

// State is cards
export const addEntity = (state, entity, cardId) => {
  return pipe(
    // Append the new card entity to the cards list, and add to ids
    set(["entities", cardId], entity),
    // This create a new entry since the id is new
    set(["ids"], state.ids.concat(cardId)) // this is more verbous than [...] IMO
  )(state);
};

// Appened the cardId to the cards prop of the list
// State is lists
export const addCardIdToList = (listId, cardId, lists) => {
  // Get a copy
  return addIdToChildren(lists, listId, "cards", cardId);
};

const addIdToChildren = (state, entityId, property, childId) => {
  const path = ["entities", entityId, property];
  const children = get(path)(state);
  return set(path, children.concat(childId), state);
};
