import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        principalModules: [],
        selectedModule: null,
        selectedSubModule:null
    },
    mutations: {
        updateSelectedModule(state,payload) {
            state.selectedModule = payload
        },
        updateSelectedSubModule(state, payload) {
            state.selectedSubModule = payload
        }
    },

    actions: {
        updateSelectedModuleAction({ commit }, payload) {
            commit('updateSelectedModule', payload)
        },
        updateSelectedSubModuleAction({commit}, payload) {
            commit('updateSelectedSubModule', payload)
        }
    },

    getters: {
        getSelectedModule(state) {
            console.log(state.selectedModule)
            return state.selectedModule
        },
        getSelectedSubModule(state) {
            return state.selectedSubModule
        }
    }
})

