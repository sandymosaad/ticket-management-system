"use client"
import React from 'react'
import {useFormik} from "formik";
import * as Yup from "yup";
import style from "../auth.module.css"
import  Link  from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { addUserProfile } from '../lib/data-service';


export default  function SignUp() {
//     async function  submitRegister(values) {
//         // const aa = await addUser(values)
//          console.log('aa')
//          console.log(values)
//         const { data, error } = await supabase.auth.signUp({
//         email: values.email,
//         password: values.password,
//         })
//         console.log('aas')
//         console.log(data)
//         if(error){
//             console.log(error.message)
//             return;
//         }

// const user = data.user;
// console.log(user)
// console.log("user")

//   // create profile
//   await addUser({
//     id: user.id,
//     name: values.name,
//     email: values.email,
//   });

//   console.log("User registered successfully");
//     }
async function submitRegister(values) {
  const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  });

  if (error) {
    console.error(error.message);
    return;
  }

  const user = data.user;

  // create profile
  await addUserProfile({
    id: user.id,
    name: values.name,
    email: values.email,
  });

  console.log("User registered successfully");
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
        <div className={style.inputContainer}> 
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
            {formik.errors["name"]&& formik.touched.name&&(
            <p className={style.error}>
                {formik.errors.name}
            </p>
            )
            }
        </div>
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
            {formik.errors.email && formik.touched.email&& (
            <p className={style.error}>
                {formik.errors.email}
            </p>
            )
            }
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
            {formik.errors["password"]&& formik.touched.password&&(
            <p className={style.error}>
                {formik.errors.password}
            </p>
            )}
        </div>
        <div className={style.inputContainer}>
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
             {formik.errors["rePassword"]&& formik.touched.rePassword&&(
            <p className={style.error}>
                {formik.errors.rePassword}
            </p>
            )
            }
        </div>
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
