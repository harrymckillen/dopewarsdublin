import Vue from 'vue';
import Vuex from 'vuex';

import { DRUGS } from '@/constants/drugs.constants';
import { randomPrice } from '@/assets/utils/random.util';

Vue.use(Vuex);

const defaultState = () => {
  return {
    player: {
      debt: 5500,
      pockets: 100,
      guns: 0,
      items: [
        {
          id: 1,
          name: 'Ecstasy',
          qty: 20,
          avgPrice: 5
        },
        {
          id: 3,
          name: 'Cocaine',
          qty: 30,
          avgPrice: 400
        }
      ],
      itemsTotal: 50,
      bank: 0,
      cash: 2000,
      location: {
        id: 3,
        name: 'City Centre',
        bank: true
      },
      health: 99
    },
    game: {
      day: 0,
      dayLimit: 30,
      inProgress: false,
      // currency: '&pound;'
      // currency: '&#36;'
      currency: '&euro;',
      displayModal: false
    }
  };
}
//TODO: split these out into modules

export default new Vuex.Store({
  state: defaultState(),
  mutations: {
    START_GAME(state) {
      if (!state.game.inProgress) state.game.inProgress = true;
    },
    RESET_GAME(state) {
      Object.assign(state, defaultState());
    },
    MOVE_LOCATION(state, newLocation) {
      state.player.location = newLocation;
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
    },
    TOGGLE_MODAL(state) {
      state.game.displayModal = !state.game.displayModal;
    }
  },
  actions: {
    moveLocation({ commit }, newLocation) {
      commit('START_GAME');
      commit('MOVE_LOCATION', newLocation);
      commit('INCREMENT_DAY');
      commit('ADD_INTEREST', 10);
    },
    resetGame({ commit }) {
      commit('RESET_GAME');
    },
    toggleModal({ commit }) {
      commit('TOGGLE_MODAL');
    }
  },
  getters: {
    getCurrency(state) {
      return state.game.currency;
    },
    displayModal(state) {
      return state.game.displayModal;
    },
    getHeldItems(state) {
      return state.player.items;
    },
    getHeldItemsTotal(state) {
      return state.player.itemsTotal
    },
    getItemsForSaleByLocation(state) {
      let availableForSaleHere = DRUGS.filter(function (drug) {
        drug.cost = randomPrice(drug.minPrice, drug.maxPrice);
        return drug.availableIn.includes(state.player.location.id);
      });

      return availableForSaleHere;
    }
  }
});
