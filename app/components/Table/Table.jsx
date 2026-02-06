'use client'
import style from "./table.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation'

export default function Table({tickets}) {
 const router =useRouter();

return <>
    <table className={style.table}>
        <thead >
          <tr  className={`${style.tableHeader} ${style.row}`}>
            <th className={style.cell}>Title</th>
            <th className={`${style.cell} ${style.descriptionCell}`}>Description</th>
            <th className={style.cell} >Status</th>
            <th className={`${style.cell} ${style.createdCell}`}>Created </th>
            {/* <th className={`${style.cell} ${style.createdCell}`}>Created </th> */}
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
                <td className={`${style.cell} ${style.descriptionCell}`}>{ticket.description}</td>
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
                <td className={`${style.cell} ${style.createdCell}`}>
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
          }): <tr><td colSpan={5} className={style.noTicketsFound}>No tickets found</td></tr>}
        </tbody>
      </table>
    {/* } */}
    </>
}
