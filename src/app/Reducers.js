import {combineReducers} from 'redux';

const INPUT ="INPUT"

export function getInput (input){
    return {
        type:INPUT,
        input
    }
}
export function inputReducer(state="", action){
    switch(action.type){
        case INPUT:
            return action.input
            break;
        default:
            return state
    }
}

const DATA = 'DATA';

export function getMessage(message){
    return {
        type:DATA,
        message
    }
}
export function messageReducer(state=[], action){
    switch(action.type){
        case DATA:
            return [...state, action.message]
            break;
        default:
            return state
    }
    
}

export const rootReducer = combineReducers({
    input:inputReducer,
    message:messageReducer
})
