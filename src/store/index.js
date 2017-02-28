import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        TopHoverState : false,
        scroll        : true,
        scrollY       : 0,
        productShow   : true,
    },
    mutations : {
        scrollTop () {
            window.scrollTo(0,0);
        }
    }
});
