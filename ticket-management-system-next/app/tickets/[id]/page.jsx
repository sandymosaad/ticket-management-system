import BackLink from "../../components/BackLink/backLink";
import Ticket from "../../components/Ticket/Ticket";

export default async function TicketDetails({ params }) {
  const resolvedParams = await params; 
  console.log(resolvedParams)
  const id = resolvedParams.id;

  return <>
  <BackLink/>
  <Ticket id={id}/>


  </>
}
