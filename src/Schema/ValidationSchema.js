import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Enter the first name"),
    lastName: Yup.string().required("Enter the last name"),
    email: Yup.string().required("Enter the email"),
    name: Yup.string().required("Enter the name"),
    password: Yup.string().required("Enter the password"),
    destination: Yup.string().required("Enter the destination"),
})