export const userDataValidation = (values) => {
    let errors = {};

    if(values.name.trim() == ""){
        errors.name = "username is required";
    }else if(values.name.trim().length < 4){
        errors.name = "username must be at least 4 characters";
    }

    if(values.email.trim() == ""){
        errors.email = "email is required";
    }else if(values.email.trim().length < 9){
        errors.email = "email must be at least 9 characters";
    }

    if(values.password.trim() == ""){
        errors.password = "password is required";
    }else if(values.password.trim().length < 4){
        errors.password = "password must be at least 4 characters";
    }

    return errors;
}