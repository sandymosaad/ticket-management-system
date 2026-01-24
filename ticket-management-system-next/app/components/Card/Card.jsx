"use client"

import style from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({card}){
return <>
    <div className={style.card}>
        <div className={style.cardBody}>
            <h3>{card.title}</h3>
            <p>{card.numberOfTickets}</p>
        </div>
        <span className={style.iconSpan}>
            <FontAwesomeIcon icon={card.icon} size="lg" className={style.icon} />      
        </span>
    </div>
    
    </>
}

