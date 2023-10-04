const state = () => ({
    user: {},
    isLogged: false,
});
const getters = {
    getUserInfos(state) {

        return state.user;
    },
    getLogginState(state) {
        return state.isLogged;
    },


}

const mutations = {
    SET_USER_IN_STORE(state, userInfos) {
        console.log(userInfos);
        state.user = userInfos;
        state.isLogged = true;
    },
    CLEAR_AUTH_USER(state) {
        state.user = {};
        state.isLogged = false;
        localStorage.removeItem('token');
    },

}
const actions = {
    setUserInStore({ commit }, userInfos) {
        commit("SET_USER_IN_STORE", userInfos)
    },
    clearAuthUser({ commit }) {
        commit("CLEAR_AUTH_USER")
    },
}
export default {
    namespace: true,
    state,
    actions,
    mutations,
    getters,
}
