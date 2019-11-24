import { GET_RANDOM_IMAGE } from '../actions/index'
export default function (state = {}, action = {}) {
    switch (action.type) {
        case GET_RANDOM_IMAGE:
            //console.log("value of GET_RANDOM_IMAGE from reducers: ", action.payload)
            return { ...state, image: action.payload, answer: action.payload.split('/')[4] }
        default:
            return state
    }
}
