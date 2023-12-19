
import React from 'react';
import {
    Button,
    Typography
} from "@material-tailwind/react";
import logo from '../../logo.svg';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import clsx from 'clsx';


const Blog: React.FC = () => {

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


    return <div>
        <header className="App-header">
            <h1>Blog Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h6">
                {address}
            </Typography>
            <Button className={clsx('mt-5 bg-amber-800', ' min-w-[200px]')} color='orange' placeholder={'sample'} onClick={onConnectWallet}>
                {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
            </Button>
        </header>
    </div>
}


export default Blog;