"use client"
import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import style from "../auth.module.css"
import  Link  from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { addUserProfile } from '../lib/data-service';
import { supabase } from "../lib/supabaseClient";
import { useRouter } from 'next/navigation';
import {useState} from "react"
import Input from '../compoments/Input/Input';

export default  function SignUp() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("")

    async function submitRegister(values) {
    const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
    });

    if (error) {
        console.error(error.message);
       // console.log('sandy:error' , error)
        setErrorMessage(error.message);
        return ;
    }
   // console.log('sandy data', data)
    const user = data.user;

    // create profile
    await addUserProfile({
        id: user.id,
        name: values.name,
        email: values.email,
        password: values.password,
    });
    
    console.log("User registered successfully");
    router.push('/login')
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

    const inputData = [
    { label: "Full Name", type: "text", inputName: "name", placeholder: "Sandy Mosaad" },
    { label: "Email Address", type: "email", inputName: "email", placeholder: "you@example.com" },
    { label: "Password", type: "password", inputName: "password", placeholder: "*********" },
    { label: "RePassword", type: "password", inputName: "rePassword", placeholder: "*********" }
]   
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

        {inputData.map((input)=><Input key={input.inputName} input={input} formik={formik} />)}

        {errorMessage && <p className={style.error}>{errorMessage}</p>}
        <div className={style.formFotter}>
            <button type='submit' className={style.button}>
                Create Account
            </button>
            <p>Already have an account? <Link href="/login" className={style.navactionLink}>sign in</Link></p>
        </div>

    </form>
  </div>
  </>
}
