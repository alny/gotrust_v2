import constants from '../constants'

var initialState = {
  allprofiles: null,
  alltopmiddlemen: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.GET_MIDDLEMEN:
    console.log('GET_MIDDLEMEN:' + JSON.stringify(action.payload))
    updated['allprofiles'] = action.payload
    return updated

    case constants.GET_TOP_MIDDLEMEN:
    console.log('GET_TOP_MIDDLEMEN:' + JSON.stringify(action.payload))
    updated['alltopmiddlemen'] = action.payload
    return updated


    default:
      return state
  }
}
