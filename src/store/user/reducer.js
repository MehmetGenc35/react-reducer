import { USER_LOGIN, USER_LOGOUT } from "../types"

export const userReducer = (state = userInitialState, action) => {

    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload,//login olan userın bilgilerini userın içerisine koyuyoruz
                isUserLogin: true
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: {},//logout olduktan sonra userın içini boşaltıyoruz
                isUserLogin: false
            }
        default:
            return state
    }

    
}

/*
dispatchUser({type:USER_LOGIN,payload:{name:"Ahmet",surname:"Yılmaz"}})
dispatchUser({type:USER_LOGOUT})
*/