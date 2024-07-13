import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { BarElement, BarController } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, BarController);

const TransactionChart = ({ transactions }) => {
    
    // Check for data existence before using it
    if (!transactions || transactions.length === 0) {
        return <div>No transactions data available</div>;
    }

    const data = {
        labels: transactions.map(transaction => transaction.date),
        datasets: [
            {
                label: 'Transaction Amount',
                data: transactions.map(transaction => transaction.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
            title: {
                display: true,
                text: 'Transaction Amount Over Time',
                font: {
                    size: 18,
                    weight: 'bold',
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Date',
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                title: {
                    display: true,
                    text: 'Amount ($)',
                    font: {
                        size: 16,
                    },
                },
                ticks: {
                    beginAtZero: true,
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default TransactionChart;
