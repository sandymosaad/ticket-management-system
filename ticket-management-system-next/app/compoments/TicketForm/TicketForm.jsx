"use client"
import { useFormik } from "formik";
import InputForm from "../InputForm/InputForm"
import style from "./ticketForm.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import  * as Yup from "yup";
import { addTicket } from "../../lib/data-service";
import { useRouter } from "next/navigation";

export default function TicketForm() {
      const router = useRouter();

     async function submitTicket(values){
        //console.log(values)

        const newTicket = await addTicket(values);
        console.log(newTicket)
        if(newTicket){
            router.push(`/tickets/${newTicket.id}`);
        }else{
          console.log("Faild to add ticket ")
        }
      }
      function handleCancellation(e){
        e.preventDefault();
        router.push(`/`)
      }
      const validationSchema = Yup.object({
          title:Yup.string()
          .required("Title is required"),

          description:Yup.string()
          .required("Description is required"),

            status:Yup.string()
          .required("status is required"),
      })
      const formik =useFormik({
          initialValues:{
              title:"",
              description:"",
              status:"",
          },
          validationSchema,
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
                <button onClick={handleCancellation} className={`${style.button} ${style.cancelButton} ${'button'}`}>
                  Cancel
                </button>
            </div>

        </form>
      </div>
    </>
}
