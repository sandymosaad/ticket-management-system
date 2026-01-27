"use client"
import { useFormik } from "formik";
import InputForm from "../InputForm/InputForm"
import style from "./ticketForm.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  * as Yup from "yup";
import { addTicket , getLogedInUser , getTicket, updateTicket} from "../../lib/data-service";
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";
import { toast } from 'sonner';

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
        toast.success('Ticket updated successfully!');
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
        toast.success('Ticket added successfully!');
        //console.log(addNewTicket)
        if (addNewTicket?.id) {
           setTicket(addNewTicket)
          router.push(`/tickets/${addNewTicket.id}`);
         }
      }
      }

      
      function handleCancellation(e){
        e.preventDefault();
        if(action === 'Add'){
          router.push(`/tickets`)
        }else if (action === 'Edit'){
            router.push(`/tickets/${idEdit}`)

        }
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