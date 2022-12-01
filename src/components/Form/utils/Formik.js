import { useField, Form, FormikProps, Formik, useFormik } from 'formik';

function formikSchema() {
    
  return useFormik({
    initialValues: {
        firstName : "",
        lastName: "",
        email: "",
        phoneNumber:"",
        typeOfIssue: "",
        subType: "",
        issue: "",
        waterHearAge: "",
        issueDescription: "",
        datePicker:"",
        date:"",
        time:"",
        address: "",
        propertyType:"",
        isOwner: "",

    },
    onSubmit: values => {
        console.log(values)
    }
  })
}

export default formikSchema