"use client"
import { useEffect, useState } from 'react';
import { ticketsDepandOnStatus } from '../../../lib/data-service';
import Spinner from '../../../components/Spinner/Spinner';
import Table from '../../../components/Table/Table';
export default function Closed() {

    const [tickets, setTickets] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
      ticketsDepandOnStatus("Closed").then((data)=>{
        setLoading(false)
        setTickets(data)
      })
    },[])
    
  return<>
      {loading ? <Spinner/>:
        <div className="tableContainer">  
        <div className="header">
          <h1>Closed Tickets</h1>
        </div>
        <Table tickets={tickets}/>
        </div>
    }
  </>
}

