import React,{useEffect,useContext} from 'react'
import Contacts from '../contact/Contacts'
import ContactForm from '../contact/ContactForm'
import ContactFilter from '../contact/ContactFilter'
import AuthContext from '../../Context/auth/AuthContext'

export const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    }, [])

    return (
        <div className='grid-2'>
            <div>
                <ContactForm />
            </div>
            <div>
            <ContactFilter />    
            <Contacts />

            </div>
            
            
        </div>
    )
}

export default Home
