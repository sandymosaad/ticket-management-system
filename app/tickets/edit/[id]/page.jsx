import BackLink from "../../../components/BackLink/backLink";
import TicketForm from "../../../components/TicketForm/TicketForm";
import { Suspense } from 'react';
import style from "./edit.module.css"
export default async function EdiTicket({params}) {
  const resolvedParams = await params; 
 // console.log(resolvedParams)
  const id = resolvedParams.id;
  //const action = "edit"
  return <>
  <div className={style.container}>
       <BackLink/>
       <Suspense fallback={<p>Loading...</p>}>
         <TicketForm action="Edit" idEdit={id}/>   
       </Suspense>

  </div>
         </>
}
