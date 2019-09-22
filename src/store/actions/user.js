import * as user from '../constants/user'

export const setUserInfo = value => {
    return {
        type: user.SET_USER_INFO,
        value
    }
}

export const setUserOpenId = value => {
    return {
        type: user.SET_USER_OPEN_ID,
        value
    }
}
