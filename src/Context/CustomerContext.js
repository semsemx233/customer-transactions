import { createContext, useState } from "react";

export let CustomerContext = createContext()

export default function CustomerContextProvider(props) {

    const [customers, setCustomers] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [filteredCustomer, setFilteredCustomer] = useState(null);
    const [selectedCustomer, setSelectedCustomer] = useState(null)

    const handleCustomerFilter = (name) => {
        if (name) {
            const customer = customers.find(c => c.name.toLowerCase().includes(name.toLowerCase()));
            if (customer) {
                setFilteredTransactions(transactions.filter(t => t.customer_id === customer.id));
                setFilteredCustomer(customer);
            }
        } else {
            setFilteredTransactions(transactions);
            setFilteredCustomer(null);
        }
    };

    
    const handleAmountFilter = (amount) => {
        if (amount) {
            setFilteredTransactions(transactions.filter(t => t.amount.toString().includes(amount)));
        } else {
            setFilteredTransactions(transactions);
        }
    };

    return <CustomerContext.Provider value={{ customers, setCustomers, transactions, setTransactions, filteredTransactions, setFilteredTransactions, handleCustomerFilter, handleAmountFilter }}>
        {props.children}
    </CustomerContext.Provider>
}