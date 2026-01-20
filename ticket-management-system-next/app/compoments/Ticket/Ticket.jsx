"use client";

import style from "./ticket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"
import {getTicket} from "../../lib/data-service"
import { useEffect, useState } from "react";

export default function Ticket({id}){
  
  const [ticket, setTicket] = useState({})

  useEffect(() => {
     getTicket(id).then((data) => {
      setTicket(data)
     })
   }, [])

   return <> 
     <div className="form">

    <div className={style.topCardTicketDetails}>
      <div>
        <h1>{ticket.title}</h1>
          <p className={style.paraDetails}>
            Created on{" "}
            { new Date(ticket.created_at).toLocaleString() }
          </p>

      </div>
      <div className={style.displayFlex}>
          <button className={`${style.buttonContainer} ${style.editButton}`}>
            <FontAwesomeIcon icon={faEdit} className={style.iconDetails} />
            Edit
          </button>
          <button  className={`${style.buttonContainer} ${style.deleteButton}`}>
            <FontAwesomeIcon icon={faTrash} className={style.iconDetails} />
            Delete
          </button>
      </div>
    </div>



    <div>
      <div className={style.statusContainer}>
        <h4>status</h4>
        <p  className={`${style.status} ${style.inProgressStatus}`}>{ticket.status}</p>
      </div>
      <div className={style.descriptionContainer}>
        <h4>Description</h4>
        <p className={style.paraDetails}>{ticket.description}</p>
    </div>
 </div>

  </div>
   
   </>
}