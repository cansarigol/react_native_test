import { UPDATE_USER, LOGIN_USER } from '../actions/userActions'
const initialState = {
    userInfos: {
        Id: 0,
        username: "",
        password: ""
    }
}

export default function userReducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_USER:
            return {...state, 
                userInfos: action.userInfos
            }
        case LOGIN_USER:
            return {...state,
                userInfos: action.userInfos
            }
        default:
            return state;
    }
}