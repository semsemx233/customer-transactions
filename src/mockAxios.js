// src/mockAxios.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './data.json';

const mock = new MockAdapter(axios, { delayResponse: 500 });

mock.onGet('/api/customers').reply(200, data.customers);
mock.onGet('/api/transactions').reply(200, data.transactions);

export default axios;
