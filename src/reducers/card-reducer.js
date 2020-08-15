import { cards as DefaultCards } from "../normalized-state";

const cardReducer = (cards = DefaultCards, action) => {
  if (action.type === "CARD_CREATE") {
    const { card, cardId } = action.payload;
    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: [...cards.ids, cardId],
    };
  }
  return cards;
};

export default cardReducer;
