import { userInitialState } from "./initialState";

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_STATUS':
      return { ...state, loggedin: action.payload}
      
    default:
      return state
  }
}

export default userReducer