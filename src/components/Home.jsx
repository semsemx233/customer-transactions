import React, { useContext } from 'react'
// import data from './data.json';
import CustomerTable from './CustomerTable';
import { useEffect } from 'react';
import axios from '../mockAxios';
import { CustomerContext } from '../Context/CustomerContext';

function Home() {

    let { customers, setCustomers, setTransactions, filteredTransactions, setFilteredTransactions, handleCustomerFilter, handleAmountFilter } = useContext(CustomerContext)

    useEffect(() => {
        const fetchData = async () => {
            const customersResponse = await axios.get('/api/customers');
            const transactionsResponse = await axios.get('/api/transactions');
            setCustomers(customersResponse.data);
            setTransactions(transactionsResponse.data);
            setFilteredTransactions(transactionsResponse.data);
        };
        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Customer Transactions</h1>

                    <CustomerTable
                        customers={customers}
                        transactions={filteredTransactions}
                        onCustomerFilter={handleCustomerFilter}
                        onAmountFilter={handleAmountFilter} />

            </div>

    )
}

export default Home;