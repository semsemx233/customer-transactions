import React, { useContext, useEffect } from 'react';
import { CustomerContext } from '../Context/CustomerContext';
import { Link, useParams } from 'react-router-dom';
import axios from '../mockAxios';
import TransactionChart from './TransactionChart';
import { Helmet } from 'react-helmet';

function CustomerInfo() {
    const { transactions, setTransactions, customers, setCustomers } = useContext(CustomerContext);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const customersResponse = await axios.get('/api/customers');
            const transactionsResponse = await axios.get('/api/transactions');
            setCustomers(customersResponse.data);
            setTransactions(transactionsResponse.data);
        };
        fetchData();
    }, []);

    const customer = customers.find(cust => cust.id === parseInt(id));
    const customerName = customer ? customer.name : "Unknown";

    const filteredTransactions = transactions.filter(transaction => transaction.customer_id === parseInt(id));

    return (
        <>

            <Helmet>
                <title>{customerName} - Transactions</title>
            </Helmet>

            <div className='container mt-5'>

                <Link to={'/'}>
                    <button className='back-btn'><i className="fa-solid fa-chevron-left"></i> back</button>
                </Link>

                <p className='h1 mt-3 mb-1 text-center'>{customerName}</p>
                <p className='text-center'>Customer Id: {id}</p>

                <div className='chart-container'>

                    <TransactionChart transactions={filteredTransactions} />
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{customerName}</td>
                                <td>{transaction.date}</td>
                                <td>${transaction.amount.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default CustomerInfo;
