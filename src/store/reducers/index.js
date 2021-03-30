import {combineReducers} from 'redux'
import searchVideosReducer from './searchVideoReducer'
import playVideo from './playVideoReducer'

const rootReducer=combineReducers({
    searchVideosReducer,
    playVideo
})

export default rootReducer