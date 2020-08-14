import { schema, normalize } from "normalizr";

import defaultState from "./default-state";
// const { schema, normalize } = require("normalizr");
// const defaultState = require("./default-state");

const user = new schema.Entity("users");
const card = new schema.Entity("cards", { assignedTo: user });
const list = new schema.Entity("lists", { cards: [card] });

const normalizedLists = normalize(defaultState.lists, [list]);
const normalizedUsers = normalize(defaultState.users, [user]);
const normalizedCards = normalize(normalizedLists.entities.cards, [card]);

export const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result,
};

export const users = {
  entities: normalizedUsers.entities.users,
  ids: normalizedUsers.result,
};

export const cards = {
  entities: normalizedCards.entities.cards,
  ids: normalizedCards.result,
};

const cards2 = {
  entities: normalizedLists.entities.cards,
  ids: Object.keys(normalizedLists.entities.cards),
};

console.log(cards2);

// exports.default = { users, lists, cards };

export default { users, lists, cards };
