import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';
import { useDrag } from "react-dnd";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Client from './client.js';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, useActiveAccount, ConnectedButton } from "thirdweb/react";
import dotenv from 'dotenv';
dotenv.config();
const _clientId = `${process.env.REACT_APP_CLIENT_ID}`;
const _secreteKey = `${process.env.REACT_APP_S_KEY}`;
console.log('console.log\n',_clientId,_secreteKey);
const root = ReactDOM.createRoot(document.getElementById('root'));
// Create a QueryClient instance  
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider  clientId={_clientId} secretKey={_secreteKey} activeChain={'base'}>
      <App />
      </ThirdwebProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

