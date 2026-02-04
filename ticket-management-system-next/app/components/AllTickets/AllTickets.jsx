'use client'
import { useEffect, useState } from 'react';
import {getTickets} from '../../lib/data-service';
import Link from "next/link";
import style from "./allTickets.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner/Spinner"
import { useRouter } from 'next/navigation';

export default  function AllTickets() {
const router =useRouter();
const [tickets, setTickets] = useState({});
const [loading, setLoading] = useState(true);

useEffect(()=>{
  getTickets().then((data)=>{
    setLoading(false)
    setTickets(data)
  })
},[])


  return <>
    {loading ? <Spinner/>:
      <div className={style.tableContainer}>  
        <div className={style.header}>
          <h1>All Tickets</h1>
          <Link href="/tickets/add" className={`${"button"} ${style.addTicketBtn}`}>Add Ticket</Link>
        </div>
       <table className={style.table}>
        <thead >
          <tr  className={`${style.tableHeader} ${style.row}`}>
            <th className={style.cell}>Title</th>
            <th className={style.cell}>Description</th>
            <th className={style.cell} >Status</th>
            <th className={style.cell}>Created </th>
            <th className={`${style.cell} ${style.actionCell}`}>Action</th>
          </tr>
        </thead>

        <tbody>
          {tickets?.length > 0 ? tickets.map((ticket) => {
            return (

              <tr key={ticket.id} className={style.row} onClick={()=>{
                  router.push(`/tickets/${ticket.id}`)
                }

                }>
                <td className={style.cell}>{ticket.title}</td>
                <td className={style.cell}>{ticket.description}</td>
                <td 
                className={`${style.cell} ${style.statusCell}`}>
                  <span   className={`
                  ${"status"} 
                  ${ticket.status === "In Prog" ? "inProgressStatus" :"" }
                  ${ticket.status === "Closed" ?  "closedStatus":""} 
                  ${ticket.status === "Open" ?  "openStatus" :""} 
                  ${ticket.status === "Resolved" ?  "resolvedStatus":""} 
                `}>
                 {ticket.status}
                  </span>
                </td>
                {/* <td className={style.cell}>{new Date(ticket.created_at).toDateString()}</td> */}
                <td className={style.cell}>
                  {new Date(ticket.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })}
                </td>
                <td className={`${style.cell}`} >
                  <FontAwesomeIcon icon={faEye}  className={`${style.action} ${style.actionCell}`}/>                
                </td>
              </tr>

            );
          }): <tr><td colSpan={5}>No tickets found</td></tr>}
        </tbody>
      </table>

      </div>}
  </>
    
}
