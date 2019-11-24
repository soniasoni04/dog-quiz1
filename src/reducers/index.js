import { combineReducers } from 'redux'
import breedList from './getBreedList'
import breedImages from './getBreedImages'

export default combineReducers({
    breedList,
    breedImages
})