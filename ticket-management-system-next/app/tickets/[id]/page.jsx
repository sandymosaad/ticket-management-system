import BackLink from "../../compoments/BackLink/backLink";
import Ticket from "../../compoments/Ticket/Ticket";

export default async function TicketDetails({ params }) {
  const resolvedParams = await params; 
  const id = resolvedParams.id;

  return <>
  <BackLink/>
  <Ticket id={id}/>

  </>
}
