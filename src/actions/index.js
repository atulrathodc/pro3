let nextTodoId = 0
export const increment = text => ({
  type: 'increment',
  payload: nextTodoId++,

})
export const add = users => ({
  type: 'add',
  users
})


