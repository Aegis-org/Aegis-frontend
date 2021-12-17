const Loginvalidate = (value) => {
    let errors = {};

    if(!value.email) {
        errors.email = "Email is required.";
    } else if(!/\S+@\S+\.\S+/.test(value.email)) {
        errors.email = "Email is invalid."
    }
    
    if(!value.password) {
        errors.password = "Password is required";
    } else if(value.password.length < 8) {
        errors.password = "Password must be more than eight(8) Characters."
    }

    return errors;
}
 
export default Loginvalidate;