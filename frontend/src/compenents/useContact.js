import {useState,useEffect} from 'react';
import axios from 'axios';

const useContact=(callback,validate)=>{
    const[values,setValues] = useState({
        firstname:'',
        email:'',
        comment:'',
        description:''
    });

 
const [errors,setErrors]=useState({});
const [isSubmitting,setIsSubmitting]=useState(false)
const handleChange = e =>{
    const{name,value}=e.target
    setValues({
        ...values,
        [name]:value
    });
};


const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true)
};


useEffect(()=>{
    if(Object.keys(errors).length === 0&& isSubmitting){
        axios({
            method:'post',
            url:'http://127.0.0.1:8000/api/users/contact/',
            data:{
                name:values.firstname,
                email:values.email,
                comment:values.comment,
                description:values.description
            }
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        callback();
        }
},[errors])
return{handleChange,values,handleSubmit,errors};
};

export default useContact;
