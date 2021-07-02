import Vuex from 'vuex';

import { DRUGS } from '@/constants/drugs.constants';
import { randomPrice } from '@/assets/utils/random.util';
import { LOCATIONS } from '@/constants/location.constants';

const defaultState = () => {
  return {
    player: {
      debt: 3000,
      pockets: 100,
      guns: 0,
      items: [],
      itemsTotal: 0,
      bank: 0,
      cash: 20000,
      location: LOCATIONS[2],
      health: 75
    },
    game: {
      day: 0,
      dayLimit: 30,
      inProgress: false,
      ended: false,
      currency: '&euro;',
      gunCost: 500,
      healthCost: 10
    }
  };
};
//TODO: split these out into modules

export default Vuex.createStore({
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
      else {
        state.game.ended = true;
      }
    },

    ADD_INTEREST(state, percentage) {
      if (state.player.debt > 0 && !state.game.ended) {
        state.player.debt += Math.ceil((state.player.debt / 100) * percentage);
      }
    },

    WITHDRAW_FUNDS(state, amount) {
      if (state.player.bank >= amount) {
        state.player.bank -= parseInt(amount);
        state.player.cash += parseInt(amount);
      }
    },

    DEPOSIT_FUNDS(state, amount) {
      if (state.player.cash >= amount) {
        state.player.cash -= parseInt(amount);
        state.player.bank += parseInt(amount);
      }
    },

    BUY_GUN(state) {
      state.player.cash -= state.game.gunCost;
      state.player.guns++;
    },

    TOP_UP_HEALTH(state) {
      state.player.cash -= (100 - state.player.health) * state.game.healthCost;
      state.player.health = 100;
    },

    REDUCE_DEBT(state, amount) {
      state.player.cash -= parseInt(amount);
      state.player.debt -= parseInt(amount);
    },

    BUY_DRUGS(state, item) {
      let pockets = state.player.items;
      let total = item.cost * item.amount;
      item.amount = parseInt(item.amount);
      state.player.itemsTotal += item.amount;
      state.player.cash -= total;
      delete item.cost;

      let foundIndex = pockets.findIndex(x => x.name === item.name);

      if (foundIndex !== -1) {
        pockets[foundIndex].prices.push(total);
        pockets[foundIndex].amount += item.amount;
        let average = Math.ceil(
          pockets[foundIndex].prices.reduce((a, b) => a + b, 0) /
            pockets[foundIndex].amount
        );
        pockets[foundIndex].averageCost = average;
      } else {
        item.prices = [];
        item.prices.push(total);
        let average = Math.ceil(
          item.prices.reduce((a, b) => a + b, 0) / item.amount
        );
        item.averageCost = average;
        pockets.push(item);
      }
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
    withdrawFunds({ commit }, amount) {
      commit('WITHDRAW_FUNDS', amount);
    },
    depositFunds({ commit }, amount) {
      commit('DEPOSIT_FUNDS', amount);
    },
    buyGun({ commit }) {
      commit('BUY_GUN');
    },
    topUpHealth({ commit }) {
      commit('TOP_UP_HEALTH');
    },
    reduceDebt({ commit }, amount) {
      commit('REDUCE_DEBT', amount);
    },
    buyDrugs({ commit }, name, amount, cost) {
      commit('BUY_DRUGS', name, amount, cost);
    }
  },

  getters: {
    getCurrency(state) {
      return state.game.currency;
    },
    getGunCost(state) {
      return state.game.gunCost;
    },
    getHealthCost(state) {
      return (100 - state.player.health) * state.game.healthCost;
    },
    getHeldItems(state) {
      return state.player.items;
    },
    getHeldItemsTotal(state) {
      return state.player.itemsTotal;
    },
    getGameEnded(state) {
      return state.game.ended;
    },
    getItemsForSaleByLocation(state) {
      let availableForSaleHere = DRUGS.filter(function(drug) {
        drug.cost = randomPrice(drug.minPrice, drug.maxPrice);
        return drug.availableIn.includes(state.player.location.id);
      });

      return availableForSaleHere;
    }
  }
});
