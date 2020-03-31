const actionTypes = {
  TOGGLE_LOADING: 'TOGGLE_LOADING',
}

const isLoading = value => ({
  type: actionTypes.TOGGLE_LOADING,
  value,
})

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LOADING:
      return {
        ...state,
        loading: action.value
      }
    default:
      return state
  }
}

export { isLoading, reducer }
