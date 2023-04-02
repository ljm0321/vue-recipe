import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: () => ({
        loading: false,
        recipeRecent: [],
        recipeaSearch: [],
        recipeDetail: {},
        searchText: '궁금한 레시피를 검색하세요:D',
        homeText: '궁금한 레시피를 검색하세요:D',
        userInfo: {
            userId: 'ljm',
            userEmail: 'ljm@gmail.com',
            tel1: '111',
            tel2: '1111',
            tel3: '1111',
        },
        totalCount: 0,
        recipeName: '',
        recipeIngre: ''
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
                    searchText: '',
                    totalCount: 0
                })
            }

            try {
                const res = await fetch_recipe({
                    ...payload
                });
                const Search = res.data.COOKRCP01.row; 
                const TotalCount = res.data.COOKRCP01.total_count; 
                commit('updateState', {
                    recipeaSearch: Search,
                    totalCount: TotalCount
                })
            } catch {
                commit('updateState', {
                    recipeaSearch: [],
                    searchText: '궁금한 레시피를 검색하세요:D',
                    totalCount: 0
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
        },
        async search_recipe_more ({ state, commit }) {
            try {
                const res = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/633cf2b1076d464f90c4/COOKRCP01/json/1/${state.totalCount}/RCP_PARTS_DTLS=${state.recipeIngre}&RCP_NM=${state.recipeName}`)
                const Search = res.data.COOKRCP01.row; 
                commit('updateState', {
                    recipeaSearch: Search,
                })
            } catch {
                commit('updateState', {
                    recipeaSearch: [],
                    searchText: '궁금한 레시피를 검색하세요:D',
                })
            } finally {
                commit('updateState', {
                    searchText: ''
                })
            }
        }, 
        
    },
    getters: {
        moreCount(state) {
            return state.totalCount - 5;
        }
    }
})

function fetch_recipe(payload) {
    const { RCP_NM, RCP_PARTS_DTLS, CHNG_DT, endIdx } = payload;
    // const apiKey = '633cf2b1076d464f90c4';
    const apiKey = '633cf2b1076d464f90c4';
    let apiUrl = '';
    if (CHNG_DT) {
        apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/COOKRCP01/json/1/5/CHNG_DT=${CHNG_DT}`
    } else if (endIdx && RCP_NM && RCP_PARTS_DTLS) {
        apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/COOKRCP01/json/1/${endIdx}/RCP_PARTS_DTLS=${RCP_PARTS_DTLS}&RCP_NM=${RCP_NM}`
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