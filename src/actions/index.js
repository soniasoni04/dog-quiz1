export const GET_BREEDS_LIST = 'GET_BREEDS_LIST'

function breedList(payload) {
  return {
    type: GET_BREEDS_LIST,
    payload: payload
  }
}


export const updateBreeds = () => (dispatch, getState) => {
  
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message)
        console.log("breeds list: ", breeds)
        const action = breedList(breeds)
  
        dispatch(action)
      })
      .catch((error) => {
        console.error(error);
      });
  }