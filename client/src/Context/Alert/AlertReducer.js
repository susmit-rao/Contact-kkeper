import {SET_Alert,
    REMOVE_Alert,
    } from '../types'



export default(state,action) =>{
    switch(action.type){
        case SET_Alert:{
            return [...state, action.payload]
            
        }
        
        case REMOVE_Alert:{
            return state.filter(alert =>alert.id!==action.payload);
                
        }
        

        default:
            return state
    }

}