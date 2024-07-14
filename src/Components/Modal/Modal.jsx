import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Field, Formik ,Form } from 'formik';
import {db} from '../../firebase/config.js'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import *as yup from "yup";
const contactSchemaValidation = yup.object().shape({
    name :yup.string().required("name in Required"),

    email:yup.string().email("Invalid Email").required("name in Required")
})
const Modal = ({isOpen,onClose , isUpdate ,contact}) => {
    const addContact = async(contact) =>{
        try {
            const contactRef= collection(db, "contacts");
            await addDoc(contactRef , contact)
            onClose()
            toast.success("Contact Add successfully")
        } catch (error) {
            console.log(error)
        }
    }
    const updateContact = async(contact , id) =>{
        try {
            const contactRef= doc(db, "contacts" ,id);
            await updateDoc(contactRef , contact)
            onClose()
            toast.success("Contact Update successfully")
        } catch (error) {
            console.log(error)
        }
    }
return(
    <>
        {
            isOpen &&(
                <>
                    <div className='z-50 relative bg-white min-h-48 max-w[80%] rounded-md'>
                        <div className='flex justify-end p-3'>
                        <AiOutlineClose  onClick={onClose} className='text-2xl self-end cursor-pointer '/>
                        </div>
                    <div>
                        <Formik
                        validationSchema={contactSchemaValidation}
                        initialValues={isUpdate ? {
                            name:contact.name,
                            email:contact.email
                        }:{name:"" , email:""}}
                        onSubmit={(values) =>{
                            console.log(values)
                            isUpdate?
                            updateContact(values,contact.id)
                            :addContact(values)
                            
                        }}
                        >
                            <Form className='flex flex-col'>
                                <div className='flex flex-col text-left px-3'>
                                <label htmlFor="name">name</label>
                                <Field name="name" className="border"/>
                                </div>
                                <div className='flex flex-col text-left px-3'>
                                    <label htmlFor="email">email</label>
                                    <Field type='email' name='email' className='border'></Field>
                                </div>
                                <button type='submit' className='bg-orange-300 py-2 px-3 self-end rounded-xl'>{isUpdate ? "update" : "add"} Contact</button>
                            </Form>
                        </Formik>
                    </div>
                    </div>
                    <div onClick={onClose} className='backdrop-blur h-screen w-screen absolute top-0 z-40'/>
                </>
            )
        }
    </>
)
}

export default Modal