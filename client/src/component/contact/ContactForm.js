import React,{useState,useContext,useEffect} from 'react'
import ContactContext from '../../Context/Contact/ContactContext';


export const ContactForm = () => {


    const [contact,setContact] = useState({
        name:'',
        email:"",
        phone:"",
        type:"Personal"
    });

    const contactContext = useContext(ContactContext);

    const {addContact,updateContact,clearCurrent,current}= contactContext;

    useEffect(() =>{
        if(current){
            setContact(current);
        }else{
            setContact({
                name:'',
                email:"",
                phone:"",
                type:"Personal"
            });
        }
        
    },[contactContext,current]);
 



    const {name,email,phone,type} = contact;

    const onChange = (e) => setContact({...contact,[e.target.name]:e.target.value});

    const onSubmit= (e) =>{
        e.preventDefault();

        if(current){
            updateContact(contact);
            
            

        }else{
            addContact(contact);
           
            
        }
        clearAll();
        
        

    }

    const clearAll = () =>{
        clearCurrent();
    }


    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ?'Edit Contact':'Add Contact'}</h2>
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChange}/>
            <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange}/>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="Personal" checked={type==='Personal'} onChange={onChange}/>Personal{" "}
            <input type="radio" name="type" value="Professional" checked={type==='Professional'} onChange={onChange}/>Professional
            <div>
                <input type="submit" value={current ?'Update Contact':'Add Contact'} className="btn btn-primary btn-block" />
            </div>
            {current && (
                <div>
                    <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>
            )}
        </form>
    )
}

export default ContactForm