import React,{useReducer} from 'react';
import { v4 as uuid} from 'uuid';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import {ADD_Contact,
DELETE_Contact,
SET_Current,
CLEAR_Current,
UPDATE_Contact,
FILTER_Contacts,
CLEAR_Filter} from '../types'

const ContactState = (props) => {
    const initialState={
        contacts:[
            {
                id:1,
                type:"Personal",
                name:"tan",
                email:"carlin@gmail.com",
                phone:"028884400"
            },
            {
                id:2,
                type:"Personal",
                name:"Man",
                email:"Mani@gmail.com",
                phone:"15468787777"
            },
            {
                id:3,
                type:"Professional",
                name:"fan",
                email:"naf@gmail.com",
                phone:"1458987800"
            }
        ],
        current:null,
        filter:null
    };

    const [state,dispatch]=useReducer(ContactReducer,initialState);
    //
    const addContact =(contact) =>{
        contact.id=uuid();
        dispatch({type:ADD_Contact,payload:contact})
    }

    const deleteContact =(id) =>{
        
        
        dispatch({type:DELETE_Contact,payload:id})
    }

    const setCurrent = (contact) =>{
        dispatch({type:SET_Current,payload:contact})

    }

    const clearCurrent = () =>{
        dispatch({type:CLEAR_Current})

    }

    const updateContact = (contact) =>{
        dispatch({type:UPDATE_Contact,payload:contact})

    }

    const filterContact = (text) =>{
        dispatch({type:FILTER_Contacts,payload:text})

    }

    const clearFilter = () =>{
        dispatch({type:CLEAR_Filter})

    }









    //



    return (
    <ContactContext.Provider
    value={{
        contacts:state.contacts,
        current:state.current,
        filter:state.filter,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
        
        
    }}>

    
        {props.children}

        </ContactContext.Provider>

    );


};

export default ContactState;
