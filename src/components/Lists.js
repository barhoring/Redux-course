import React from "react";
// import List from './List';
import ListContainer from "../containers/ListContainer";

const Lists = ({ lists = [] }) => {
  return (
    <section className="Lists">
      {lists && lists.map((listId) => <ListContainer listId={listId} />)}
    </section>
  );
};

export default Lists;
