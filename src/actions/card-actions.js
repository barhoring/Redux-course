// Every obj in this file will get dispatch(obj)

const CARD_CREATE = "CARD_CREATE";

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
