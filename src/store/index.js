import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    games: [],
    wishlistIds: []
  },
  plugins: [
    createPersistedState ()
  ],
  //   plugins: [
  //   createPersistedState ({
  //     paths: ['wishlistIds']
  //   })
  // ],
  getters: {
    showAllGames: state => (query, genre) => {
      if (genre === 'все') {
        return state.games.filter(game => {
          return game.title
            .toString()
            .toLowerCase()
            .includes(query.toString().toLowerCase());
        })
      } else {
        return state.games.filter(game => {
          return (
            game.genre === genre &&
            game.title
              .toString()
              .toLowerCase()
              .includes(query.toString().toLowerCase())
          );
        });
      }
    },
    showHTCGames: state => (query, genre) => {
      if (genre === 'все') {
        return state.games.filter(game => {
          return (game.category === 'htc' && game.title
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase()))
      })
      } else {
        return state.games.filter(game => {
          return (game.category === 'htc' &&
            game.genre === genre &&
            game.title
              .toString()
              .toLowerCase()
              .includes(query.toString().toLowerCase())
          );
        });
      }
    },
    // showHTCGames: state => query => {
    //   return state.games.filter(game => {
    //     return (game.category === 'htc' && game.title
    //       .toString()
    //       .toLowerCase()
    //       .includes(query.toString().toLowerCase()))
    //   })
    // },
    showPSVRGames: state => (query, genre) => {
      if (genre === 'все') {
        return state.games.filter(game => {
          return (game.category === 'psvr' && game.title
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase()))
      })
      } else {
        return state.games.filter(game => {
          return (game.category === 'psvr' &&
            game.genre === genre &&
            game.title
              .toString()
              .toLowerCase()
              .includes(query.toString().toLowerCase())
          );
        });
      }
    },
    showPS4Games: state => (query, genre) => {
      if (genre === 'все') {
        return state.games.filter(game => {
          return (game.category === 'ps' && game.title
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase()))
      })
      } else {
        return state.games.filter(game => {
          return (game.category === 'ps' &&
            game.genre === genre &&
            game.title
              .toString()
              .toLowerCase()
              .includes(query.toString().toLowerCase())
          );
        });
      }
    },
    showLikedGames: state => query => {
      return state.wishlist.filter(game => {
        return game.title
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase())
      })
    },
    wishlist: state => query => {
      return state.games.filter(game => {
        return (state.wishlistIds.includes(game.id) && game.title
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase()))
      })
    },
    getGameById: state => id => {
      return state.games.find(game => {
        return game.id === id
      })
    }
  },
  actions: {
    loadGames ({ commit }) {
      axios
        .get('games.json')
        .then(r => r.data.games)
        .then(games => {
          commit('SET_GAMES', games)
        })
    }
  },
  mutations: {
    SET_GAMES (state, games) {
      state.games = games
    },
    addGame (state, gameId) {
      if (!state.wishlistIds.includes(gameId)) {
        state.wishlistIds.push(gameId)
      }
    },
    removeGame (state, gameId) {
      const index = state.wishlistIds.indexOf(gameId)
      if (index !== -1) {
        state.wishlistIds.splice(index, 1)
      }
    }
  }
})
