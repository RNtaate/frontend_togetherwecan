const setLoggedInStatus = (loggedInStatus) => {
  return {
    type: 'SET_LOGGED_IN_STATUS',
    payload: loggedInStatus
  }
}