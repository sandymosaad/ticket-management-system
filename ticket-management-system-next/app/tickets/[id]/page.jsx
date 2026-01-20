import BackLink from "../../compoments/BackLink/backLink";
import Ticket from "../../compoments/Ticket/Ticket";
import Spinner from "../../compoments/Spinner/Spinner";
import style from "./ticketDetails.module.css"
export default async function TicketDetails({ params }) {
  const resolvedParams = await params; 
  console.log(resolvedParams)
  const id = resolvedParams.id;

  return <>
  <BackLink/>
  <Ticket id={id}/>


  </>
}
