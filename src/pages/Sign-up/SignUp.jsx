import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import style from "../../auth.module.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";



export default function SignUp() {
    function submitRegister(values) {
        console.log(values)
    }

    const validationSchema = Yup.object({
        name:Yup.string('Name should be string')
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

        email:Yup.string()
        .required("Email is required")
        .email("Invalid email format"),

        password:Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),

        rePassword:Yup.string() 
        .required("Confirm password is required")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    })
    const formik =useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            rePassword:"",
        },
        validationSchema,
        onSubmit:submitRegister,
    })
  return <>
  <div className={style.form}>
    <div className={style.formHeader}>
        <span className={style.iconSpan }>
            <FontAwesomeIcon icon={faUserPlus} className={style.icon }/>
        </span>       
        <h1 className={style.header}> Create Account</h1>
        <p className={style.par}>Sign up to get started with ticket management</p>  
    </div>
    <form onSubmit={formik.handleSubmit} >
        <div>
            <label className={style.formLabel}>Full Name</label>
            <input
             type='text'
             name='name'
             placeholder='Sandy Mosaad'
             className={style.formInput}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values["name"]}
            />
        </div>
        <div>
            <label className={style.formLabel}>Email Address</label>
            <input
             type='email'
             name='email'
             placeholder='you@example.com'
             className={style.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values['email']}
            />
        </div>
        <div>
            <label className={style.formLabel}>Password</label>
            <input
             type='password'
             name='password'
            placeholder='*********'
            className={style.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values['password']}
            />
        </div>
        <div>
            <label className={style.formLabel}>RePassword</label>
            <input
             type='password'
             name='rePassword'
            placeholder='*********'
            className={style.formInput}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values['rePassword']}
            />
        </div>
        <div className={style.formFotter}>
            <button type='submit' className={style.button}>
                Create Account
            </button>
            <p>Already have an account? <Link to="/sign-in">sign in</Link></p>
        </div>

    </form>
  </div>
  </>
}
