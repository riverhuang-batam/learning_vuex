import axios from 'axios'

const state = {
    todos: [
        {
          id: 1,
          title: 'title1'
        },
        {
          id: 2,
          title: 'title2'
        }
      ]
}

const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    async fetchTodos({commit}) {
        console.log(commit)
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(response)
        commit('setTodos', response.data)
    }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};
export default {
    state,
    getters,
    actions,
    mutations
}