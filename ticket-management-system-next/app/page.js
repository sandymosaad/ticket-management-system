import Card from "./compoments/Card/Card";
import {
  faTicket,
  faFolderOpen,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Home() {
  // const user = getLogedInUser();
  // console.log(user)

 const cardsData = [
  {
    title: "Total Tickets",
    numbersOfTickets: "4",
    icon: faTicket,
  },
  {
    title: "Open",
    numbersOfTickets: "2",
    icon: faFolderOpen,
  },
  {
    title: "In Progress",
    numbersOfTickets: "1",
    icon: faSpinner,
  },
  {
    title: "Resolved",
    numbersOfTickets: "0",
    icon: faCheckCircle,
  },
  {
    title: "Closed",
    numbersOfTickets: "1",
    icon: faTimesCircle,
  },
];
  return <>
  <div className="cards">
      {
        cardsData.map((card) => (
          <Card key={card.title} card={card} />
        ))
      }
  </div>
<Link href="/tickets/add" className="button">Add Ticket</Link>


  
  </>
}
