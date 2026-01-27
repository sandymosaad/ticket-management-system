import BackLink from "../../../components/BackLink/backLink";
import TicketForm from "../../../components/TicketForm/TicketForm";

export default async function EdiTicket({params}) {
  const resolvedParams = await params; 
 // console.log(resolvedParams)
  const id = resolvedParams.id;
  //const action = "edit"
  return <>
    <BackLink/>
    <TicketForm action="Edit" idEdit={id}/>
  
  </>
}
