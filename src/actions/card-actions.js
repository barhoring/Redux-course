// Every obj returned by an exported function in this file will get dispatch(obj)

const CARD_CREATE = "CARD_CREATE";
const CARD_DELETE = "CARD_DELETE";

const defaultCardData = { title: "", description: "", assignedTo: "" };

export const createCard = (listId, cardData) => {
  const cardId = Date.now().toString();
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData,
  };

  // result will be dispatch(result)
  return {
    type: CARD_CREATE,
    payload: { card, listId, cardId },
  };
};

export const removeCard = (cardId, listId) => {
  return {
    type: CARD_DELETE,
    payload: { cardId, listId },
  };
};
