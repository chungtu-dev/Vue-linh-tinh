import axios from "axios";
const getListTinhThanh = {
    state: {
        tinh_thanh: [],
        quan_huyen: [],
        phuong_xa:[],
        getDataAPI:[],
        getDataMusic:[]
    },
    getters: {
        tinh_thanh: state => state.tinh_thanh,
        quan_huyen: state => state.quan_huyen,
        phuong_xa: state => state.phuong_xa,
        getDataAPI: state => state.getDataAPI,
        getDataMusic: state => state.getDataMusic,
    },
    mutations: {
        GET_LIST_TINH_THANH(state, tinh_thanh) {
            state.tinh_thanh = tinh_thanh
        },
        GET_LIST_QUAN_HUYEN(state, quan_huyen) {
            state.quan_huyen = quan_huyen
        },
        GET_LIST_PHUONG_XA(state, phuong_xa){
            state.phuong_xa = phuong_xa
        },
        GET_DATA_API(state, getDataAPI){
            state.getDataAPI = getDataAPI
        },
        GET_DATA_MUSIC(state, getDataMusic){
            state.getDataMusic = getDataMusic
        }
    },
    actions: {
        async getDataListTinhThanh({ commit }) {
            try {
                const res = await axios.get('https://vapi.vnappmob.com/api/province/')
                commit('GET_LIST_TINH_THANH', res.data.results)
                // console.log('tinh thanh', res.data.results);
            } catch (error) {
                console.log(error);
            }
        },

        async getDataListQuanHuyen({ commit }, id) {
            try {
                const res = await axios.get(`https://vapi.vnappmob.com/api/province/district/${id}`)
                commit('GET_LIST_QUAN_HUYEN', res.data.results)
                // console.log('quan huyen', res.data.results);
            } catch (error) {
                console.log(error);
            }
        },

        async getDataListPhuongXa({commit}, id){
            try {
                const res = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${id}`)
                commit('GET_LIST_PHUONG_XA', res.data.results)
                // console.log('phuong xa', res.data.results);
            } catch (error) {
                console.log(error);
            }
        },

        async SetDataAPI({commit}){
            try {
                const res = await axios.get('https://reqres.in/api/users?page=2')
                commit("GET_DATA_API", res.data)
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        },
        
        async GetAPIMusic({commit}){
            try {
                const res = await axios.get('http://localhost:4400/episodes')
                commit('GET_DATA_MUSIC', res.data)
                console.log('data-music', res.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
export default getListTinhThanh