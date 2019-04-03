
const users = (state = [], action) => {
  switch (action.type) {

    case 'add':
      return [
    ... action.users
      ]

    default:
      return state
  }
}

export default users;