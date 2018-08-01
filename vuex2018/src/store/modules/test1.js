const state = {
  count: 1
}
const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count--;
  }
}

const getters = {
  doneTodosCount: state => {
    return state.count += 100;
  }
}

export default {
  state,
  mutations,
  getters
};
