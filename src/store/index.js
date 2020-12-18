import Vue from "vue";
import Vuex from "vuex";
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    provinsi: [],
    kabupaten: [],
    desa: [],
    rayon: [],
    kecamatan: [],
    kategori: [],
    asosiasi: []
  },
  mutations: {
    GET_KATEGORI(state, data){
      state.kategori = data.response.kategori
    },
    GET_RAYON(state,data) {
      state.rayon = data.response.rayon
    },
    GET_PROVINSI(state, data) {
      state.provinsi = data.response.propinsi
    },
    GET_KAB(state, data) {
      state.kabupaten = data.response.kabupaten
    },
    GET_KECAMATAN(state, data) {
      state.kecamatan = data.response.kecamatan
    },
    GET_DESA(state, data) {
      state.desa = data.response.desa
    },
    GET_ASOSIASI(state, data) {
      state.asosiasi = data.response.grup
    }
  },
  actions: {
    getApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API + proto.url}`)
          .then((res) => {
            commit(proto.mutation, res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    postApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.post(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then((res) => {
            commit(proto.mutation, res.data)
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    postRayon({ commit }) {
      return new Promise((resolve, reject) => {
        const rayon = new FormData();
        rayon.append('id', localStorage.id)
        rayon.append('token', localStorage.token)
        Axios.post(`${process.env.VUE_APP_API + 'getrayon.php'}`, rayon)
          .then((res) => {
            commit('GET_RAYON', res.data)
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    patchApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.patch(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then((res) => {
            commit(proto.mutation, res.data)
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    deleteApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.delete(`${process.env.VUE_APP_API + proto.url}`, proto.data)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
  },
  modules: {}
});
