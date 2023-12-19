
import React from 'react';
import {
    Button,
    Typography
} from "@material-tailwind/react";
import logo from '../../logo.svg';
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import clsx from 'clsx';
import MainLayout from '../../components/layout/mainlayout';


const Home: React.FC = () => {

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


    return <MainLayout >
        <div className=' flex flex-col  items-center text-center pt-[100px] h-[200vh]'>
            <img src={logo} className=" w-[100px] h-[100px]" alt="logo" />
            <Typography variant="h6">
                {address}
            </Typography>
            <Button className={clsx('mt-5 bg-amber-800', ' min-w-[200px]')} color='orange' placeholder={'sample'} onClick={onConnectWallet}>
                {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
            </Button>
        </div>

    </MainLayout>

}


export default Home;