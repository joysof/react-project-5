import React ,{useState} from 'react'


const DisColos = () => {
    const [isOpen , setOpen] = useState()
    const onOpen = () =>{
        setOpen(true)
    }
    const onClose = () =>{
        setOpen(false)
    }
return { onClose , onOpen , isOpen}
}

export default DisColos
