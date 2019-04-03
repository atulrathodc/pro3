
const todos = (state = {i:0}, action) => {
  switch (action.type) {

    case 'increment':
      return [
     {i:action.payload}
      ]
  case 'submit1':
      return {i:99}
    
    default:
      return state
  }
}

export default todos