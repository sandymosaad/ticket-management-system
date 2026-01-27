"use client"

import style from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {numByStatus, getTotalTicketsCount} from "../../lib/data-service"
import {useState , useEffect} from "react";

export default function Card({card, landingPage}){
  const [numStatus, setStatus] = useState();

  useEffect(() => {
    if(card.title ==="Total Tickets"){
        getTotalTicketsCount().then((data)=>{
            setStatus(data)
        })
    }else{
    numByStatus(card.title).then((data) => {
        setStatus(data)
     })
    }
   
   }, [])




return <>
    
        <div 
    className={`${style.card} 
        ${card.title === "Total Tickets" ? style.allTickets :"" }
        ${card.title === "In Progress" ? style.inProgressStatus :"" }
        ${card.title === "Closed" ?  style.closedStatus:""} 
        ${card.title === "Open" ?  style.openStatus :""} 
        ${card.title === "Resolved" ?  style.resolvedStatus:""} 
    `}
>

        <div className={style.cardBody}>

        {landingPage? 
        <span className={
        `${style.iconSpanLandingPage}
        ${card.title === "Ticket Tracking" ? style.ticketIcon: ""}
        ${card.title === "Status Management" ? style.statusIcon: ""}
        ${card.title === "Analytics Dashboard" ? style.analyticsIcon: ""}
        ${card.title === "Team Collaboration" ? style.teamIcon: ""}

        `}>
        <FontAwesomeIcon icon={card.icon} size="lg"
            className={`
            ${style.icon}
            ${card.title === "Ticket Tracking" ? style.ticketIconColor: ""}
            ${card.title === "Status Management" ? style.statusIconColor: ""}
            ${card.title === "Analytics Dashboard" ? style.analyticsIconColor: ""}
            ${card.title === "Team Collaboration" ? style.teamIconColor: ""}
            `} />      
        </span>
        : ""}

        <h3>{card.title}</h3>

        {landingPage?
        <p className={style.cardTextBody}>{card.body}</p>:          
        <p>{numStatus}</p>}

        </div>
        {landingPage?"":
        <span className={style.iconSpan}>
            <FontAwesomeIcon icon={card.icon} size="lg"
             className={`
                ${card.title === "Total Tickets" ? style.allTicketsColor :"" }
                ${card.title === "In Progress" ? style.inProgressStatusColor :"" }
                ${card.title === "Closed" ?  style.closedStatusColor:""} 
                ${card.title === "Open" ?  style.openStatusColor :""} 
                ${card.title === "Resolved" ?  style.resolvedStatusColor:""} 
             
             `} />      
        </span>}
    </div>   
    </>
}

