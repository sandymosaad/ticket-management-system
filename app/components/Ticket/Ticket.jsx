"use client";

import style from "./ticket.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"
import { getTicket} from "../../lib/data-service"
import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";

export default function Ticket({id}){
  const [ticket, setTicket] = useState({})
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  useEffect(() => {
     getTicket(id).then((data) => {
      setTicket(data)
     })
   }, [id])

   return <> 
         {!ticket? <h1 className={style.noTicketPara}>No ticket with this id</h1>: 

     <div className="form">
      
      <div className={style.topCardTicketDetails}>
    
        <div>
          <h1>{ticket.title}</h1>
            <p className={style.paraDetails}>
              Created on{" "}
              { new Date(ticket.created_at).toLocaleString() }
            </p>

        </div>
        <div className={`${style.displayFlex} ${style.actionButtonsContainer}`}>
            <Link className={`${style.buttonContainer} ${style.editButton}`} href={`/tickets/edit/${ticket.id}`} >
              <FontAwesomeIcon icon={faEdit} className={style.iconDetails}  />
            </Link>
              <button className={`${style.buttonContainer} ${style.deleteButton}`} onClick={() => setShowDeleteModal(true)}>
              <FontAwesomeIcon icon={faTrash} className={style.iconDetails} />
            </button>

        </div>
      </div>

      <div>
        <div className={style.dataContainer}>
          <h4>status</h4>
          <p className={`
                  ${"status"} 
                  ${ticket.status === "In Prog" ? "inProgressStatus" :"" }
                  ${ticket.status === "Closed" ?  "closedStatus":""} 
                  ${ticket.status === "Open" ?  "openStatus" :""} 
                  ${ticket.status === "Resolved" ?  "resolvedStatus":""} 
                `}>
            {ticket.status}
          </p>
        </div>
        <div className={style.dataContainer}>
          <h4>Description</h4>
          <p className={style.paraDetails}>{ticket.description}</p>
        </div>
      {ticket.summary &&
        <div className={style.dataContainer}>
            <h4>Summary</h4>
            <p className={style.paraDetails}>{ticket.summary}</p>
        </div>
      }
      </div>


    </div>}
    {showDeleteModal &&<DeleteConfirm id={ticket.id} setShowDeleteModal={setShowDeleteModal}/>}
   </>
}