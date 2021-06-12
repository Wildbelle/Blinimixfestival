import React, { useState } from 'react'

const ModalCgi = () => {
    const[revele, changeRevele] = useState(false); 

    function toggle(){
        changeRevele(!revele)
    }

    return{
        revele, 
        toggle
    }
};

export default ModalCgi;