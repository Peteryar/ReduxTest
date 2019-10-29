import React from 'react';
import { getMessage, getInput } from './Reducers';
import {connect} from 'react-redux'
import DisplayMessage from './DisplayMessage';

function mapStateToProps(state){
    return{
        message:state.message,
        input: state.input
    }
}

function mapDispatchToProps(dispatch){
    return{
        sendMessage(message){
         dispatch(getMessage(message))
        },
        getInputValue(input){
            dispatch(getInput(input))
        }
    }
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(DisplayMessage);

export default MainApp