import React, { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from'../Modal/Modal.jsx'

import {collection , getDocs, onSnapshot} from "firebase/firestore"
import {db} from '../../firebase/config.js'
const Search = () => {
    const [contacts , setContacts] = useState([])
    const [isOpen , setOpen] = useState(false)
    const onOpen = () =>{
        setOpen(true)
    }
    const onClose = () =>{
        setOpen(false)
    }
return (
    <>
        <div className='search gap-2 flex relative items-center'>
            <CiSearch className='text-white text-3xl absolute ml-2'/>
            <input type="text" className='border bg-transparent border-white rounded-lg h-10 flex-grow pl-10 text-white'/>
            <AiFillPlusCircle onClick={onOpen} className='text-3xl text-white cursor-pointer'/>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
        </Modal>
    </>
)
}

export default Search
