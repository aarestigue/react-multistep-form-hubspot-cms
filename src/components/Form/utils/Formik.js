import {useFormik} from 'formik';

function formikSchema() {
    
  return useFormik({
    initialValues: {
        firstName : "",
        lastName: "",
        email: "",
    },
    onSubmit: values => {
        console.log(values)
    }
  })
}

export default formikSchema