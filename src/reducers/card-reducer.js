import { cards as DefaultCards } from "../normalized-state";

const cardReducer = (cards = DefaultCards, action) => {
  console.log(cards, action);
  return cards;
};

export default cardReducer;
