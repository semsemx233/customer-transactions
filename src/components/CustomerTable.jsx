import React from "react";
import { Link } from "react-router-dom";

function CustomerTable({ customers, transactions, onCustomerFilter, onAmountFilter }) {
    // console.log("customers...", customers);
    // console.log("transactions...", transactions);

    // if (customers.length === 0 || transactions.length === 0) {
    //     return <div>Loading...</div>;
    // }


    return (
        <div>
            <div className="mb-3">
                <div className="form-group">
                    <input
                        type="search"
                        className="form-control rounded-input mb-2"
                        placeholder="Search by customer name.."
                        onChange={e => onCustomerFilter(e.target.value)}
                    />
                    <i className="search-icon fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="form-group">
                    <input
                        type="search"
                        className="form-control rounded-input"
                        placeholder="Search by transaction amount.."
                        onChange={e => onAmountFilter(e.target.value)}
                    />
                    <i className="search-icon fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        const customer = customers.find(cust => cust.id === transaction.customer_id);
                        const customerName = customer ? customer.name : "Unknown";

                        return (

                            <tr key={transaction.id}>
                                <td>
                                    <Link to={`customer/${transaction.customer_id}`}>
                                        {customerName}
                                    </Link>
                                </td>
                                <td>{transaction.date}</td>
                                <td>${transaction.amount.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}

export default CustomerTable;
