"use client"
import React from 'react'
import {useFormik} from "formik";
import style from "../auth.module.css"
import  Link  from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { getUsers} from '../lib/data-service';
import { supabase } from "../lib/supabaseClient";
import { useRouter } from 'next/navigation';
import {useState} from "react"  
import Input from '../compoments/Input/page';
import InputForm from '../compoments/InputForm/InputForm';

export default function SignIn() {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("")

    //console.log(getUsers)
    async function submitSignIm(values) {
        //console.log(values)
    
        let { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
        });

        if(error){
            console.error("Error signing in:", error);
            setErrorMessage(error.message);
            return;
        }
        console.log("User signed in successfully:", data);
        
        // const { data: { user } } = await supabase.auth.getUser()
        // console.log(user)
        router.push('/')

    }

    const formik =useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:submitSignIm,
    })

    const inputData = [
        { label: "Email Address", type:"input", inputype: "email", inputName: "email", placeholder: "you@example.com" },
        { label: "Password", type:"input", inputype: "password", inputName: "password", placeholder: "*********" },
    ] 
return <>
<div className={style.form}>
    <div className={style.formHeader}>
        <span className={style.iconSpan }>
            <FontAwesomeIcon icon={faRightToBracket} className={style.icon }/>
        </span>       
        <h1 className={style.header}> Welcome Back</h1>
        <p className={style.par}>Sign in to your account to continue</p>  
    </div>
    <form onSubmit={formik.handleSubmit} >

        {inputData.map((input)=><InputForm key={input.inputName} input={input} formik={formik} />)}

        {errorMessage && <p className={style.error}>{errorMessage}</p>}
        <div className={style.formFotter}>
            <button type='submit' className="button">
                sign in
            </button>
            <p>Don't have an account?  <Link href="/signup" className={style.navactionLink}>Sign up</Link></p>
        </div>

    </form>
</div>
</>
    
}
