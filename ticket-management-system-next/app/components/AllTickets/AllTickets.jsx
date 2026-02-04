'use client'
import { useEffect, useState } from 'react';
import {getTickets} from '../../lib/data-service';
import Link from "next/link";
import style from "./allTickets.module.css"
import Spinner from "../Spinner/Spinner"
import { useRouter } from 'next/navigation';
import Table from '../Table/Table';

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
        <Table tickets={tickets}/>
      </div>
      } 
  </>
    
}
