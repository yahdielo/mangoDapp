import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import React from 'react';
import { useDrag } from "react-dnd";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Client from './client.js';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, useActiveAccount, connectedButton } from "thirdweb/react";
import dotenv from 'dotenv';
dotenv.config();
const root = ReactDOM.createRoot(document.getElementById('root'));
// Create a QueryClient instance  
const queryClient = new QueryClient();
const _clientId = process.env.CLIENT_ID;
const _secreteKey = process.env.S_KEY;
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider  secreteKey={_secreteKey} clientId={_clientId} activeChain={'base'}>
      <App />
      </ThirdwebProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

