import * as system from '../constants/system'

export const setStatusBar = value => {
    return {
        type: system.SET_STATUS_BAR,
        value
    }
}

export const setCustomBar = value => {
    return {
        type: system.SET_CUSTOM_BAR,
        value
    }
}
