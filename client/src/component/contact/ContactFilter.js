import React,{useContext,useRef,useEffect} from 'react'
import ContactContext from '../../Context/Contact/ContactContext'


export const ContactFilter = () => {
    const contactContext =useContext(ContactContext)
    const {filter,filterContact,clearFilter}=contactContext;
    const text=useRef('');

    useEffect(() => {
        if(filter===null){
            text.current.value='';
        }
        
    });

    const onChange = e =>{
        if(text.current.value!==""){
            filterContact(e.target.value);
        }
        else{
            clearFilter();
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Contact.." onChange={onChange}/>

            </form>
    )
}


export default ContactFilter
