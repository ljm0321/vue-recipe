import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        loading: false,
        recipeRecent: [],
        recipeSearch: [],
        recipeDetail: {},
        searchText: '궁금한 레시피를 검색하세요:D',
        userInfo: {
            userId: 'ljm',
            userEmail: 'ljm@gmail.com',
            tel1: '111',
            tel2: '1111',
            tel3: '1111',
        }
    }),
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        editUserInfo(state, payload) {
            state.userInfo = payload;
        }
    },
    actions: {
        async search_recipe_recent ({ state, commit }, payload) {
            if(state.loading) {
                commit('updateState', {
                    loading: true,
                })
            }
            try {
                const res = await fetch_recipe({
                    ...payload
                });
                const Search = res.data.COOKRCP01.row; 
                commit('updateState', {
                    recipeRecent: Search,
                })
            } catch {
                commit('updateState', {
                    recipeRecent: []
                })
            } finally {
                commit('updateState', {
                    loading: false
                })
            }
        },

        async search_recipe ({ state, commit }, payload) {
            if (state.loading) {
                commit('updateState', {
                    loading: true,
                    searchText: ''
                })
            }

            try {
                const res = await fetch_recipe({
                    ...payload
                });
                const Search = res.data.COOKRCP01.row; 
                commit('updateState', {
                    recipeSearch: Search
                })
            } catch {
                commit('updateState', {
                    recipeSearch: [],
                    searchText: '궁금한 레시피를 검색하세요:D'
                })
            } finally {
                commit('updateState', {
                    loading: false,
                    searchText: ''
                })
            }
        }, 

        async recipe_detail ({ state, commit }, payload) {
            if (state.loading) {
                commit('updataState', {
                    loading: true
                })
            }

            try {
                const res = await fetch_recipe({
                    ...payload
                });
                const Search = res.data.COOKRCP01.row[0];
                commit('updateState', {
                    recipeDetail: Search
                })
            } catch {
                commit('updateState', {
                    recipeDetail: {}
                })
            } finally {
                commit('updateState', {
                    loading: false
                })
            }
        }
    },
    getters: {}
})

function fetch_recipe(payload) {
    const { RCP_NM, RCP_PARTS_DTLS, CHNG_DT } = payload;
    // const apiKey = '633cf2b1076d464f90c4';
    const apiKey = 'sample';
    let apiUrl = '';
    if (CHNG_DT) {
        apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/COOKRCP01/json/1/5/CHNG_DT=${CHNG_DT}`
    } else if (RCP_NM && RCP_PARTS_DTLS) {
        apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/COOKRCP01/json/1/50/RCP_PARTS_DTLS=${RCP_PARTS_DTLS}&RCP_NM=${RCP_NM}`
    } else {
        apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/COOKRCP01/json/1/5/RCP_NM=${RCP_NM}`
    }

    return new Promise((resolve, reject) => {
        axios.get(apiUrl)
        .then(
            res => {
                if(res.data.Error) {
                    reject(res.data.Error);
                }
                resolve(res);
            }
        )
        .catch(err => {
            reject(err.message);
        })
    })
}