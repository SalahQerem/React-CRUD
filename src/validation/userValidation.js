export const userDataValidation = (user) =>{

    let errors = {};

    if(user.name.trim() == ""){
        errors.name = "Username is required";
    }else if (user.name.trim() < 4){
        errors.name = "Username must be at least 4 characters"; 
    }

    if(user.email.trim() == ""){
        errors.email = "Email is required";
    }else if (user.email.trim() < 9){
        errors.email = "Email must be at least 9 characters"; 
    }

    if(user.password.trim() == ""){
        errors.password = "Password is required";
    }else if (user.password.trim() < 4){
        errors.password = "Password must be at least 4 characters"; 
    }

    return errors;
}