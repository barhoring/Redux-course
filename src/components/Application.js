import React from "react";

import UsersContainer from "../containers/UsersContainer";
import CreateListContainer from "../containers/CreateListContainer";
import ListsContainer from "../containers/ListsContainer";

const Application = () => {
  return (
    <main className="Application">
      <UsersContainer />
      <section>
        <CreateListContainer />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
