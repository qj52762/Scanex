import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import './Login.css';
 
 const SignupSchema = Yup.object().shape({
   
   password: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 const Login = () => {
    return (
        <div className="main-div">
        <div className='login-main-div'>
   
     <h1 className='login-title'>Login</h1>
     <Formik 
       initialValues={{
         email: '',
         password: ''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (

         <Form className='login-container'>
           <Field className='login-input-element' name="email" type="email" placeholder='Email' />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <Field className='login-input-element' name="password" type="password" placeholder='Password' />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
           <button className='login-button'  type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
   </div>

 );

           }
 
 export default Login