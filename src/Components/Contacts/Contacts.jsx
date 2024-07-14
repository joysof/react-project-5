import React,{useState , useEffect} from 'react'
import {collection , getDocs, onSnapshot} from "firebase/firestore"
import {db} from '../../firebase/config.js'
import ContactCard from '../ContactCard/ContactCart.jsx'
function Contacts() {
    const [contacts , setContacts] = useState([])
    useEffect (() =>{
        const getContacts =async () =>{
            try {
                const contactsRef = collection(db ,"contacts");
                onSnapshot(contactsRef,(snapshot) =>{

                    const contactsList =snapshot.docs.map((doc) => {
                        return{
                            id :doc.id,
                            ...doc.data()
                        }
                    });
                    setContacts(contactsList)
                    return contactsList;
                
                })
            }catch (error) {
                console.log(error)
            }
        }
        getContacts()
    },[])

    const filterContacts = (e)=>{
        console.log(e.target.value)
        const value = e.target.value;
        const contactsRef = collection(db ,"contacts");
        onSnapshot(contactsRef,(snapshot) =>{

            const contactsList =snapshot.docs.map((doc) => {
                return{
                    id :doc.id,
                    ...doc.data()
                }
            });
            const filterContacts = contactsList.filter((contact) =>
                contact.name.toLowerCase().includes(value.toLowerCase())
            )
            setContacts(filterContacts)
            return filterContacts;
        })
    }
return (
    <div className='contacts'>
    {
        contacts.map((contact) =>(
            <ContactCard key={contact.id} contact={contact}/>
        )
        )
    }
</div>
)
}
export default Contacts
