import { getData } from "../api/ApiData";

export default {
  namespaced: true,
  state: {
    dataListOrder: [],
  },
  getters: {
    allListOrder: (state) => state.dataListOrder,
  },
  mutations: {
    setRoles(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.items = arr;
    },
    setOrders(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.dataListOrder = arr;
    },
  },
  actions: {
    async getOrders({ commit }) {
      let data = await getData();
      commit("setOrders", data);
    },
  },
};
