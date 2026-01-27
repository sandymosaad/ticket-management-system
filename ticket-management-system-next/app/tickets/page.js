import Card from "../components/Card/Card"
import {cardsData} from "../cardsData";
import AllTickets from "../components/AllTickets/AllTickets";
import { Suspense } from 'react';


export default function Home() {
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
