import React from "react";
// import MoveCardToList from "./MoveCardToList";

const Card = ({ card = {}, listId, removeCard }) => {
  return (
    <article className="Card">
      <h3>{card.title}</h3>
      <div className="Card-description">{card.description}</div>
      {/* <MoveCardToList cardId={card.id} listId={listId} /> */}
      <button
        className="card-remove danger"
        onClick={() => removeCard(card.id, listId)}
      >
        REMOVE CARD
      </button>
    </article>
  );
};

export default Card;
