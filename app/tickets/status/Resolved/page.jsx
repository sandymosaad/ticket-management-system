"use client"
import { useEffect, useState } from 'react';
import { ticketsDepandOnStatus } from '../../../lib/data-service';
import Spinner from '../../../components/Spinner/Spinner';
import Table from '../../../components/Table/Table';
export default function Resolved() {

    const [tickets, setTickets] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
      ticketsDepandOnStatus("Resolved").then((data)=>{
        setLoading(false)
        setTickets(data)
      })
    },[])
    
  return<>
      {loading ? <Spinner/>:
        <div className="tableContainer">  
        <div className="header">
          <h1>Resolved Tickets</h1>
        </div>
        <Table tickets={tickets}/>
        </div>
    }
  </>
}

