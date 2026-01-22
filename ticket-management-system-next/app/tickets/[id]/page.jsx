import BackLink from "../../components/BackLink/backLink";
import Ticket from "../../components/Ticket/Ticket";
import { Suspense } from 'react';

export default async function TicketDetails({ params }) {
  const resolvedParams = await params; 
  console.log(resolvedParams)
  const id = resolvedParams.id;

  return <>
  <BackLink/>
   <Suspense fallback={<p>Loading...</p>}>
   
     <Ticket id={id}/>

   </Suspense>


  </>
}
