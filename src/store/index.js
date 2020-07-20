import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultState = () => {
  return  {
    player: {
      debt: 5500,
      pockets: 100,
      guns: 0,
      items: [],
      bank: 0,
      cash: 2000,
      health: 99
    },
    game: {
      location: { name: 'City Centre', bank: true },
      day: 0,
      dayLimit: 30
    }
  }
}

export default new Vuex.Store({
  state: defaultState(),
  //TODO: split these out into modules
  mutations: {
    RESET_GAME(state){
      Object.assign(state, defaultState())
    },
    MOVE_LOCATION(state, newLocation) {
      state.game.location = newLocation;
    },
    INCREMENT_DAY(state) {
      if (state.game.day < state.game.dayLimit) state.game.day++;
      else alert('End Game');
    },
    ADD_INTEREST(state, percentage) {
      if (state.player.debt > 0) {
        state.player.debt =
          state.player.debt + Math.ceil((state.player.debt / 100) * percentage);
      }
    }
  },
  actions: {
    moveLocation({ commit }, newLocation) {
      commit('MOVE_LOCATION', newLocation);
      commit('INCREMENT_DAY');
      commit('ADD_INTEREST', 10);
    },
    resetGame({ commit }){
      commit('RESET_GAME');
    }
  },
  modules: {}
});
