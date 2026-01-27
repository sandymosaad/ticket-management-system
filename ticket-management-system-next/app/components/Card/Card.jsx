"use client"

import style from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {numByStatus, getTotalTicketsCount} from "../../lib/data-service"
import {useState , useEffect} from "react";

export default function Card({card}){
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
    <div className={style.card}>
        <div className={style.cardBody}>
            <h3>{card.title}</h3>
            <p>{numStatus}</p>
        </div>
        <span className={style.iconSpan}>
            <FontAwesomeIcon icon={card.icon} size="lg" className={style.icon} />      
        </span>
    </div>
    
    </>
}

