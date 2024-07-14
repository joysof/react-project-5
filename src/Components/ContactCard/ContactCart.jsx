import React,{useState} from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc,doc } from 'firebase/firestore';
import {db} from '../../firebase/config.js'

import Modal from '../../Components/Modal/Modal.jsx'
import { toast } from 'react-toastify';

const  ContactCard = ({contact}) => {
    const [isOpen , setOpen] = useState(false)
    const onOpen = () =>{
        setOpen(true)
    }
    const onClose = () =>{
        setOpen(false)
    }
    const deleteContact = async (id) =>{
        try {
            await deleteDoc(doc(db,"contacts",id))
            console.log("you delete this contact")
            toast.success("Contact Delete Successfully");
        } catch (error) {
            console.log(error)
        }
    }
return (
    <div  className='flex justify-around bg-yellow-200 rounded-lg my-5 py-2 items-center'>
    <HiOutlineUserCircle className='text-4xl text-orange-300'/>
    <div className='flex flex-col items-start ml-[-20px]'>
        <h2 className='capitalize'>{contact.name}</h2>
        <p className='text-sm'>{contact.email}</p>
    </div>
    <div className='flex gap-3'>
        <RiEditCircleLine onClick={onOpen} className='text-3xl cursor-pointer' />
        < IoMdTrash onClick={() =>deleteContact(contact.id)} className='text-3xl cursor-pointer'/>
    </div>
    <Modal isOpen={isOpen} contact={contact} isUpdate onClose={onClose}></Modal>
</div>
)
}

export default ContactCard
