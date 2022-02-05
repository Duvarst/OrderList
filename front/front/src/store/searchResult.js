export default {
  namespaced: true,
  state: {
    searchResultArr: [],
    rangePages: [0, 8],
  },
  getters: {
    overallSearchResult: (state) => state.searchResultArr,
    displayRangePages: (state) => state.rangePages,
  },
  mutations: {
    setResult(state, data) {
      let arr = [];
      data.forEach((item) => {
        arr.push(item);
      });
      state.searchResultArr = arr;
    },
    setRange(state, data) {
      state.rangePages[0] = data[0];
      state.rangePages[1] = data[1];
    },
  },
  actions: {
    setResult({ commit }, data) {
      commit("setResult", data);
      commit("setRange", [0, 8]);
    },
    setRange({ commit }, data) {
      commit("setRange", data);
    },
  },
};
