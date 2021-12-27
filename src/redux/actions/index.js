export const setLoggedInStatus = (loggedInStatus) => {
  return {
    type: 'SET_LOGGED_IN_STATUS',
    payload: loggedInStatus
  }
}

export const setCurrentUser = (currentUser) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: { ...currentUser}
  }
}