import React,{useReducer} from 'react';
import { v4 as uuid} from 'uuid';
import axios from 'axios';
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'
import {ADD_Contact,
    GET_Contacts,
    CLEAR_Contacts,
DELETE_Contact,
SET_Current,
CLEAR_Current,
UPDATE_Contact,
FILTER_Contacts,
CLEAR_Filter,
CONTACT_ERROR} from '../types'

const ContactState = (props) => {
    const initialState={
        contacts:[],
        current:null,
        filter:null,
        error:null
    };

    const [state,dispatch]=useReducer(ContactReducer,initialState);

    const getContact = async () =>{
        
       
       try {
           const res= await axios.get('/api/contacts');
           dispatch({type:GET_Contacts,payload:res.data})
           
        //    console.log(res.data);
           
       } catch (err) {
           dispatch({type:CLEAR_Contacts}) 
           
       }
       
   }

    

    const addContact = async (contact) =>{
         const config={
            headers:{
                "Content-Type":'application/json'

            }
        }
        
        try {
            const res= await axios.post('/api/contacts',contact,config);
            dispatch({type:ADD_Contact,payload:res.data})
            
            console.log(res.data);
            
        } catch (err) {
            dispatch({type:CONTACT_ERROR,payload:err.response.data.msg}) 
            
        }
        
    }

    const clearContacts = () =>{
        dispatch({type:CLEAR_Contacts})

    }

    const deleteContact = async(id) =>{

        
        try {
        await axios.delete(`/api/contacts/${id}`);
        dispatch({type:DELETE_Contact,payload:id});
        


            
        } catch (err) {
            dispatch({type:CONTACT_ERROR,payload:err.response.data.msg}) 

            
        }
}

    const setCurrent = (contact) =>{
        dispatch({type:SET_Current,payload:contact})

    }

    const clearCurrent = () =>{
        dispatch({type:CLEAR_Current})

    }

    const updateContact =  async (contact) =>{
        const config={
            headers:{
                "Content-Type":'application/json'

            }
        }

        try {
            
            const res= await axios.put(`/api/contacts/${contact._id}`,contact,config);
            dispatch({type:UPDATE_Contact,payload:res.data});
            
        } catch (err) {
            dispatch({type:CONTACT_ERROR,payload:err.response.data.msg}); 
        }
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
        error:state.error,
        getContact,
        addContact,
        clearContacts,
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
