import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const addUserValidation = Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter Your Name."),
    username: Yup.string().min(2).max(25).required("Please Enter Your Username."),
    email: Yup.string().email().required("Please Enter Valid Email"),
    phone: Yup.string().required("Phone Number Required").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
    
});
