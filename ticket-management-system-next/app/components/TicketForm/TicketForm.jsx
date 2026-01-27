"use client"
import { useFormik } from "formik";
import InputForm from "../InputForm/InputForm"
import style from "./ticketForm.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSave} from "@fortawesome/free-solid-svg-icons";

import  * as Yup from "yup";
import { addTicket , getLogedInUser , getTicket, updateTicket} from "../../lib/data-service";
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";

export default function TicketForm({action , idEdit}) {
        const [ticket, setTicket] = useState({})


         useEffect(() => {
          if (action === "Edit" && idEdit) {
            getTicket(idEdit).then((data) => {
              if (data) {
                formik.setValues({
                  title: data.title,
                  description: data.description,
                  status: data.status,
                  summary: data.summary,
                });
                setTicket(data);
              }
            });
          }
        }, [action, idEdit]);


      const router = useRouter();

     async function submitTicket(values){

        if (action === "Edit") {
        await updateTicket(idEdit, values);
        router.push(`/tickets/${idEdit}`);
        return;
      }
       if (action === "Add"){
        const user = await getLogedInUser();

        const newTicket ={
          description:values.description,
          status:values.status,
          title:values.title,
          summary: values.summary,
          userId:user.id,

        }
        const addNewTicket = await addTicket(newTicket);
        console.log(addNewTicket)
        if (addNewTicket?.id) {
           setTicket(addNewTicket)
          router.push(`/tickets/${addNewTicket.id}`);
         }
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
               summary: "",
          },
          enableReinitialize: true,
          validationSchema,
          onSubmit:submitTicket,
      })

    const inputData = [
        { label: "Title", type: "input", inputType:"text", inputName: "title", placeholder: "Enter ticket title" },
        { label: "Description ", type: "textarea", inputName: "description", placeholder: "Enter detailed description of the ticket" },
        { label: "Status", type: "select", inputName: "status" , options:["Open", "In Progress","Resolved", "Closed"]}, 
      ]
      const summaryInput = { label: "Summary ", type: "textarea", inputName: "summary", placeholder: "Enter summary of the ticket" }
    return <>
      <div className='form'>
        <form onSubmit={formik.handleSubmit} >
          {action==="Add" && <>
            <h1 className={style.formHeader}>
              <span className='iconSpan'>
                  <FontAwesomeIcon icon={faPlus} className='icon'/>
              </span>  
              Add New Ticket
            </h1>
            </> }
            {inputData.map((input)=>

            <InputForm 
            key={input.inputName} 
            input={input} 
            formik={formik}
            action={action}
            idEdit={idEdit}
            ticket={ticket}
            />)}

            {formik.values?.status ==='Closed' && <InputForm 
            input={summaryInput} 
            formik={formik}
            action={action}
            idEdit={idEdit}
            ticket={ticket}
            />
            }
            
            <div className={style.formFotter}>
              {action === "Add" && 
                <button type='submit' className={`${style.button} ${'button'}`}>
                     Add Ticket
                </button>
              }
              {action === "Edit" && 
                <button type='submit' className={`${style.button} ${'button'}`}>
                   <FontAwesomeIcon icon={faSave} className='icon'/>
                    Save Changes
                </button>
              }
                <button onClick={handleCancellation} className={`${style.button} ${style.cancelButton} ${'button'}`}>
                  Cancel
                </button>
            </div>

        </form>
      </div>
    </>
}