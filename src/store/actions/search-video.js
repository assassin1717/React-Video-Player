import youtubeSearch from 'youtube-api-v3-search'
import YTApi from '../../api'

const API_KEY = YTApi

export const startingSearch = () => {
    return {
        type: 'STARTING_SEARCH',
        loading: true,
        error: false
    }
}

export const searchVideoSucess = (data) => {
    return{
        type: 'SEARCH_VIDEO_SUCESS',
        data,
        loading: false,
        error: false
    }
}

export const searchVideoFail = () => {
    return{
        type: 'SEARCH_VIDEO_FAIL',
        loading: false,
        error: true
    }
}

export const searchVideo = (word) => {
    return dispatch => {
        dispatch(startingSearch())
        youtubeSearch(API_KEY, { q: word })
            .then((data) => dispatch(searchVideoSucess(data.items)))
            .catch(() => dispatch(searchVideoFail()))
    }
}