  import { GET_BREEDS_LIST } from '../actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {
        case GET_BREEDS_LIST:
                console.log("value of breeds from reducers: ",[...action.payload] )
            return [...action.payload]
        default:
            return state
    }
}
