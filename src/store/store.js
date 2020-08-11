import Vue from 'vue'
import Vuex from 'vuex'
import mydatajson from '../api/data.json'
import mycommentjson from '../api/comments.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        datajs: mydatajson,
        commentjs: mycommentjson
    }
})