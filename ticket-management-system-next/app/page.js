// import Card from "./components/Card/Card";
// import cardsData from "./cardsData";
// import AllTickets from "./components/AllTickets/AllTickets";
// import { Suspense } from 'react';


// export default function Home() {
//   return <>
//   <div className="cards">
//       {
//         cardsData.map((card) => (
//           <Card key={card.title} card={card} />
//         ))
//       }
//   </div>
//     <Suspense fallback={<p>Loading...</p>}>
//         <AllTickets/>
//     </Suspense>
// </>
// }
import Link from "next/link"
import style from "./page.module.css"
import {staticCardsDataForLandingPage} from "./cardsData";
import Card from "./components/Card/Card";
export default function Home(){
  return <>
    <div className={style.headerContainer}>
        <h1 className={style.header}>Streamline Your Ticket Management</h1>
        <p className={style.para}>Efficiently track, manage, and resolve tickets with our powerful task</p>
        <p className={style.para}> management system. Built for software teams who value clarity and</p>
        <p className={style.para}> productivity.</p>
        
        <Link href={'/login'} className={` ${style.landingPageButton} ${"button"}`} >Get Started Free</Link>
    </div>

<div className={style.cards}>
 {staticCardsDataForLandingPage.map((card)=>{
  return <Card key={card.title} card={card} landingPage={true} />
 })}
</div>
    </>
}