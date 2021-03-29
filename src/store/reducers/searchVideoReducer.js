const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
}

export default function search(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'STARTING_SEARCH':
            return {
                data: [],
                loading: true,
                error: false
            }
        case 'SEARCH_VIDEO_SUCESS':
            return {
                data: action.data,
                loading: false,
                error: false
            }
        case 'SEARCH_VIDEO_FAIL':
            return {
                data: [],
                loading: false,
                error: true
            }
        default: return state
    }
}