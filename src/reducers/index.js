import { combineReducers } from 'redux'
import breedList from './getBreedList'
import breedImages from './getBreedImages'
import randomImage from './randomImage'

export default combineReducers({
    breedList,
    breedImages,
    randomImage
})