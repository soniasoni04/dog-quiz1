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
        //console.log("breeds list: ", breeds)
        const action = breedList(breeds)
  
        dispatch(action)
      })
      .catch((error) => {
        console.error(error);
      });
  }
//getBreedimages 

export const GET_BREEDS_IMAGES = 'GET_BREEDS_IMAGES'

function breedImages(payload) {
  return {
    type: GET_BREEDS_IMAGES,
    payload: payload
  }
}


export const getBreedimages = (data) => (dispatch, getState) => {

      const breed =   data
    fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => response.json())
      .then(responseJSON => {
        //console.log("response JSON: ", responseJSON)
        const images = (responseJSON.message.slice(1,11))
        const action = breedImages(images)
        dispatch(action)
        })
        .catch((error) => {
          console.error(error);
        });
    }