import { SET_USER_INFO, SET_USER_OPEN_ID } from '../constants/user'

const USER_INFO = {
    id: '',
    nickName: '',
    avatarUrl: '',
    openid: ''
}

export default function system (state = USER_INFO, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                nickName: action.value.nickName,
                avatarUrl: action.value.avatarUrl
            }
        case SET_USER_OPEN_ID:
            return {
                ...state,
                openid: action.value
            }
        default:
            return state
    }
}
