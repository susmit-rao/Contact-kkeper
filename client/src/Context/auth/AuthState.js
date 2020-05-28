import React,{useReducer} from 'react';
import { v4 as uuid} from 'uuid';
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import {
REMOVE_Alert,
REGEISTER_SUCESS,
REGEISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOGOUT,
CLEAR_ERRORS
} from '../types'

const AuthState = (props) => {
    const initialState={
        token:localStorage.getItem('token'),
        isAuthenticated:null,
        user:null,
        loading:true,
        error:null
        
    };

    const [state,dispatch]=useReducer(AuthReducer,initialState);
    //
    









    //



    return (
    <AuthContext.Provider
    value={{
        token:state.token,
        isAuthenticated:state.isAuthenticated,
        user:state.user,
        error:state.error,
        loading:state.loading
        
        
        
    }}>

    
        {props.children}






    </AuthContext.Provider>

    );


};

export default AuthState
