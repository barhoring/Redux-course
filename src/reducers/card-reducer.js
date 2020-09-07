import { cards as DefaultCards } from "../normalized-state";
import { addEntity, removeEntity } from "./_utilities";

const cardReducer = (cards = DefaultCards, action) => {
  if (action.type === "CARD_CREATE") {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
  }
  if (action.type === "CARD_DELETE") {
    const { cardId } = action.payload;
    return removeEntity(cards, cardId);
  }

  return cards;
};

export default cardReducer;
