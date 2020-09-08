import { set, get, pipe, omit } from "lodash/fp";

// State is cards
export const addEntity = (state, entity, id) => {
  return pipe(
    // Append the new card entity to the cards list, and add to ids
    set(["entities", id], entity),
    // This create a new entry since the id is new
    set(["ids"], state.ids.concat(id)) // this is more verbous than [...] IMO
  )(state);
};

export const removeEntity = (state, id) => {
  // remoev the entity and its id
  return pipe(
    omit(`entities.${id}`),
    set(
      ["ids"],
      state.ids.filter((_id) => _id !== id)
    )
  )(state);
};

// Appened the cardId to the cards prop of the list
// State is lists
export const addCardIdToList = (lists, listId, cardId) => {
  // Get a copy
  return addIdToChildren(lists, listId, "cards", cardId);
};

const addIdToChildren = (state, entityId, property, childId) => {
  const path = ["entities", entityId, property];
  const children = get(path)(state);
  return set(path, children.concat(childId), state);
};

export const removeCardIdFromList = (lists, listId, cardId) => {
  return removeIdFromChildren(lists, listId, "cards", cardId);
};

const removeIdFromChildren = (state, entityId, property, childId) => {
  const path = ["entities", entityId, property];
  const children = get(path)(state);
  const newChildren = children.filter((id) => id !== childId);
  return set(path, newChildren, state);
};
