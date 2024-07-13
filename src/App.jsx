import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CustomerInfo from './components/CustomerInfo';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <title>Customer Transactions</title>
      </Helmet>

      <Router >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/customer/:id" element={<CustomerInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
