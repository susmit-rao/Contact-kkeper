import React,{useReducer} from 'react';
import { v4 as uuid} from 'uuid';
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import axios from 'axios'
import {
    SET_Alert,
    REMOVE_Alert

} from '../types'

const AlertState = (props) => {
    const initialState=[];

    const [state,dispatch]=useReducer(AlertReducer,initialState);


    //
    const setAlert= (msg,type)=>{
        const id =uuid();
        dispatch({type:SET_Alert,payload:{msg,type,id}});

        setTimeout(()=>dispatch({type:REMOVE_Alert,payload:id}),5000)

    }
    return (
    <AlertContext.Provider
    value={{
        alerts:state,
        setAlert
    }}>
    {props.children}
    </AlertContext.Provider>
         );
};

export default AlertState
