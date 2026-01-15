"use client"
import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import style from "../auth.module.css"
import  Link  from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";


export default function SignIn() {

    function submitSignIm(values) {
        console.log(values)
    }

    const formik =useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:submitSignIm,
    })
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
        <div className={style.inputContainer}>
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
        <div className={style.inputContainer}>
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
        <div className={style.formFotter}>
            <button type='submit' className={style.button}>
                sign in
            </button>
            <p>Don't have an account?  <Link href="/signup" className={style.navactionLink}>Sign up</Link></p>
        </div>

    </form>
  </div>
  </>
    
}
