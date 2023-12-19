import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Button,
  Typography
} from "@material-tailwind/react";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'



function App() {

  const { address, isConnected } = useAccount()

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })

  const { disconnect } = useDisconnect();


  const onConnectWallet = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }

  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h6">
          {address}
        </Typography>
        <Button className='mt-5 min-w-[200px]' color='blue' placeholder={'sample'} onClick={onConnectWallet}>
          {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
        </Button>
      </header>
    </div>
  );
}

export default App;
