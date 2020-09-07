import React from "react";

import CardContainer from "../containers/CardContainer";
import CreateCardContainer from "../containers/CreateCardContainer";

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCardContainer listId={list.id} />
      <div>
        {list.cards &&
          list.cards.map((cardId) => (
            <CardContainer key={cardId} cardId={cardId} listId={list.id} />
          ))}
      </div>
      <button
        className="list-remove danger"
        onClick={() => removeList(list.id)}
      >
        Remove List
      </button>
    </article>
  );
};

export default List;
