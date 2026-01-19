"use client"
import { useFormik } from "formik";
import InputForm from "../InputForm/InputForm"
import style from "./ticketForm.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TicketForm() {

      function submitTicket(values){
        console.log(values)
      }
      const formik =useFormik({
          initialValues:{
              title:"",
              description:"",
              status:"",
          },
          onSubmit:submitTicket,
      })

    const inputData = [
        { label: "Title", type: "input", inputType:"text", inputName: "title", placeholder: "Enter ticket title" },
        { label: "Description ", type: "textarea", inputName: "description", placeholder: "Enter detailed description of the ticket" },
        { label: "Status", type: "select", inputName: "status" , options:["Open", "In Progress","Resolved", "Closed"]}, 
    ]
  return <>
    <div className='form'>
      <form onSubmit={formik.handleSubmit} >
          <h1 className={style.formHeader}>
            <span className='iconSpan'>
                <FontAwesomeIcon icon={faPlus} className='icon'/>
            </span>  
             Add New Ticket
          </h1>
          {inputData.map((input)=>
          
          <InputForm 
          key={input.inputName} 
          input={input} 
          formik={formik}
           />)}

          {/* {errorMessage && <p className={style.error}>{errorMessage}</p>} */}
          <div className={style.formFotter}>
              <button type='submit' className={`${style.button} ${'button'}`}>
                 Add Ticket
              </button>
              <button  className={`${style.button} ${style.cancelButton} ${'button'}`}>
                Cancel
              </button>
          </div>

      </form>
    </div>
  </>
}
