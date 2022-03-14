import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const Transaction = () => {

  let [transactions, setTransactions] = useState([]);
  let [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/", { withCredentials: true })
      .then((res) => {
        console.log(res);
        setTransactions([...res.data.transactions])
        setUser(res.data.current_user);
      }).catch(err => {
        console.log("Oops something went wrong!!", err);
      })
  }, [])


  return (
    <div className="container-fluid">
      {user && <h2 className='my-3'>Transactions for {user.first_name} (The last {transactions.length})</h2>}
      {(transactions.length > 0) ? <Table striped bordered hover>
        <thead>
          <tr>
            <th>Transaction Type</th>
            <th>Amount</th>
            <th>Transaction Date</th>
            <th>Transaction number</th>
          </tr>
        </thead>
        <tbody>

          {transactions.map((trans, index) => {
            return (<tr key={index}>
              <td>{trans.transaction_type}</td>
              <td>&euro;  {trans.amount}</td>
              <td>{new Date(trans.created_at).toDateString()}</td>
              <td>{trans.transaction_number}</td>
            </tr>)
          })}
          
        </tbody>
      </Table> : <p>Collecting your information, please wait ...</p>}
    </div>
  )
}

export default Transaction;
