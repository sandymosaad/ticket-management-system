
import BackLink from "../../components/BackLink/backLink";
import TicketForm from "../../components/TicketForm/TicketForm";
import { Suspense } from 'react';



export default function AddTicket() {

  return <>
    <BackLink/>
       <Suspense fallback={<p>Loading...</p>}>
       
            <TicketForm action="Add"/>
    
       </Suspense>
    </>
}
