import { GET_BREEDS_IMAGES } from '../actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {
        case GET_BREEDS_IMAGES:
            //console.log("value of breeds from reducers: ", [...action.payload])
            return [...action.payload]
        default:
            return state
    }
}
