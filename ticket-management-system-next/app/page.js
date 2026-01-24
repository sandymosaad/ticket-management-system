import Card from "./components/Card/Card";
import {
  faTicket,
  faFolderOpen,
  faSpinner,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Suspense } from 'react';

import AllTickets from "./components/AllTickets/AllTickets";
export default function Home() {


 const cardsData = [
  {
    title: "Total Tickets",
    numberOfTickets: "4",
    icon: faTicket,
  },
  {
    title: "Open",
    numberOfTickets: "2",
    icon: faFolderOpen,
  },
  {
    title: "In Progress",
    numberOfTickets: "1",
    icon: faSpinner,
  },
  {
    title: "Resolved",
    numberOfTickets: "0",
    icon: faCheckCircle,
  },
  {
    title: "Closed",
    numberOfTickets: "1",
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
         <Suspense fallback={<p>Loading...</p>}>
          <AllTickets/>
          </Suspense>
</>
}
