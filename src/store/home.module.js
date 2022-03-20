import { GET_PRODUCT_LIST } from "./actions.type";
import { SET_PRODUCT_LIST, SET_CURRENT_PAGE } from "./mutations.type";
import { axiosInstance } from "../utils/axios";

const state = {
    productList: [],
    currentPage: 1,
    notFoundData: null,
};

const mutations = {
    [SET_PRODUCT_LIST](state, item) {
        const productData = JSON.parse(localStorage.getItem('product-list'))
        state.productList = productData.filter((y) => y.title.toLowerCase().includes(item.toLowerCase()))
        state.notFoundData = state.productList.length > 0
        state.currentPage = 1
    },
    [SET_CURRENT_PAGE](state, item) {
        state.currentPage = item === 0 ? 1 : item;
    },
};

const actions = {
    [GET_PRODUCT_LIST](context, credentials) {
        axiosInstance.get('/products')
            .then(resp => {
                if (credentials) {
                    context.commit(SET_PRODUCT_LIST, credentials)
                }
                localStorage.setItem('product-list', JSON.stringify(resp.data.products))
            }).catch(err => {
                console.log(err);
            })
    }
};

const getters = {
    getProductList(state) {
        return state.productList;
    },
    getCurrentPage(state) {
        return state.currentPage;
    },
    getNotFoundData(state) {
        return state.notFoundData;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
};