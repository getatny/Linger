import { SET_CUSTOM_BAR, SET_STATUS_BAR } from '../constants/system'

const INITIAL_STATE = {
    statusBar: 0,
    customBar: 0
}

export default function system (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_STATUS_BAR:
            return {
                ...state,
                statusBar: action.value
            }
        case SET_CUSTOM_BAR:
            return {
                ...state,
                customBar: action.value
            }
        default:
            return state
    }
}
