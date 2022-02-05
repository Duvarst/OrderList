import { createStore } from "vuex";

import OrderStore from "./OrderStore";
import searchResult from "./searchResult";

const store = createStore({
  modules: {
    OrderStore,
    searchResult,
  },
});

export default store;
