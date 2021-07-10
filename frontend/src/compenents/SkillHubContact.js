import React,{useState} from 'react';
import Contact from './Contact';
import ContactSuccess from './ContactSuccess'

const SkillHubContact = () => {
    const[isSubmitted,setIsSubmitted]=useState(false)

    function submitForm(){
        setIsSubmitted(true);
    }
    return(
        <div>
            {!isSubmitted?(<Contact submitForm={submitForm}/>):<ContactSuccess/>}
        </div>
    )
}

export default SkillHubContact;