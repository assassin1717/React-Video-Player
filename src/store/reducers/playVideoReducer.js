const INITIAL_STATE = {
    data: {}
}

export default function playVideo(state=INITIAL_STATE, action){
    if(action.type==='PLAY_VIDEO'){
        return{
            data: action.data
        }
    }
    else{
        return state
    }
}