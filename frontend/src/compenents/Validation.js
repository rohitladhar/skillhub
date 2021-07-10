export default function validate(values){
    let errors = {};

    if(!values.firstname.trim()){
        errors.firstname="Name Required"
    }

    if (!values.email){
        errors.email="Email Required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invaild"
    }

    if(!values.comment.trim()){
        errors.comment="Comment Required"
    }
    if(!values.description.trim()){
        errors.description="Description Required"
    }
return errors;
}