
import React, { Component, useState, useEffect } from 'react';
import Web3ModalButton from '../../components/Web3ModalButton';
import Footer from '../../components/Footer';
import "./index.module.scss";
import { useEthers, useContractFunction, useCall, useTokenBalance, useTokenAllowance, useEtherBalance  } from '@usedapp/core'
import {useCoingeckoPrice } from '@usedapp/coingecko';
import { utils, Contract, constants } from 'ethers'
import useCountdown from "../../hooks/useCountdown";
import DggLogo from '../../public/static/assets/logo.png';
import LogoReflect from '../../public/static/assets/images/logoreflect.png';
import DggMascot from '../../public/static/assets/images/Refined Mascot Full.png';
import PoweredByCz from '../../public/static/assets/images/poweredbycz.png';
import BackgroundImage from '../../public/static/assets/images/bg.jpg';
import TopVideo from '../../public/static/assets/vids/bgv2.mp4';
import { shortenAddress, useLookupAddress} from '@usedapp/core'
import IERC20Abi from "../../abi/IERC20.json";
import DgodAbi from "../../abi/Dgod.json";
import DgodLockAbi from "../../abi/Dgod.json";
import AutoRewardPoolAbi from "../../abi/AutoRewardPool.json";
import {  ADDRESS_DOGE, ADDRESS_DGOD, ADDRESS_AUTO_REWARD_POOL, ADDRESS_DGOD_LOCK, ADDRESS_DGODCZUSD_PAIR} from '../../constants/addresses';
const { formatEther, parseEther, Interface } = utils;

const DgodInterface = new Interface(DgodAbi);
const CONTRACT_DGOD = new Contract(ADDRESS_DGOD,DgodInterface);

const AutoRewardPoolInterface = new Interface(AutoRewardPoolAbi);
const CONTRACT_AUTO_REWARD_POOL = new Contract(ADDRESS_AUTO_REWARD_POOL,AutoRewardPoolInterface);

const DgodLockInterface = new Interface(DgodLockAbi);
const CONTRACT_DGOD_LOCK = new Contract(ADDRESS_DGOD_LOCK,DgodLockInterface);

const Ierc20Interface = new Interface(IERC20Abi);
const CONTRACT_DOGE = new Contract(ADDRESS_DOGE,Ierc20Interface);
const CONTRACT_DGODCZUSD_PAIR = new Contract(ADDRESS_DGODCZUSD_PAIR,Ierc20Interface);



const displayWad = (wad)=>!!wad ? Number(formatEther(wad)).toFixed(2) : "...";

function Home() {
  
  const { account, chainId } = useEthers();
  console.log(chainId)
  


  return (<>
    <section id="top" className="hero has-text-centered">
      <div className="m-0 mb-5 p-0" style={{position:"relative",width:"100%",height:"7.5em"}}>
        <video autoPlay loop muted style={{position:"absolute",objectFit:"cover",width:"100vw",left:"0",top:"0",maxHeight:"7.5em", backgroundColor:"rgb(50,50,50)"}}>
          <source src={TopVideo} type="video/mp4" />
        </video>
        <Web3ModalButton className="mt-5 mb-5" />
        <p className='has-text-grey-lighter is-size-7 is-dark' style={{position:"absolute", bottom:"0",left:"0",right:"0",zIndex:"2", backgroundColor:"rgba(0,10,40,0.8)"}}>
          <span className="mr-2 mb-0 is-inline-block has-text-left" style={{width:"11em"}}>Network: {!!account ? (chainId == 56 ? (<span className="has-text-success">✓ BSC</span>) : <span className="has-text-error has-text-danger">❌NOT BSC</span>) : "..."}</span>
          <span className="mt-0 is-inline-block has-text-left" style={{width:"11em"}}>Wallet: {!!account ? shortenAddress(account) : "..."}</span>
        </p>
      </div>
      <h3 className="is-size-3 m-3">Global Oracle Analysis</h3>
      <div className="columns is-centered is-vcentered is-multiline pl-5 pr-5 mb-5">
        <div className="stat stat-2">
          <span className="stat-title">$0.00k</span>
          <span className="stat-content">DOGE total payouts</span>
        </div>
        <div className="stat stat-2">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">DOGE payout quantity</span>
        </div>
        <div className="stat stat-1">
          <span className="stat-title">00.00%</span>
          <span className="stat-content">Price Floor increase</span>
        </div>
        <div className="stat stat-1">
          <span className="stat-title">$0.00</span>
          <span className="stat-content">Current DGOD floor</span>
        </div>
        <div className="stat stat-1">
          <span className="stat-title">00.00%</span>
          <span className="stat-content">DGOD price increase</span>
        </div>
        <div className="stat stat-1">
          <span className="stat-title">$0.00</span>
          <span className="stat-content">Current DGOD price</span>
        </div>
        <div className="stat">
          <span className="stat-title">$0.00k</span>
          <span className="stat-content">DGOD burned since launch</span>
        </div>
        <div className="stat">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">DGOD burned today</span>
        </div>
        <div className="stat">
          <span className="stat-title">00.00%</span>
          <span className="stat-content">APR in DOGE for holding DGOD</span>
        </div>
        <div className="stat">
          <span className="stat-title">00.00%</span>
          <span className="stat-content">Percent of marketcap backed by liquidity</span>
        </div>
        <div className="stat">
          <span className="stat-title">$0.00k</span>
          <span className="stat-content">DGOD marketcap</span>
        </div>
        <div className="stat">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">DOGE to distribute today</span>
        </div>
      </div>
        <h3 className="is-size-3 m-3 mt-5">Wallet Oracle Analysis</h3>
          
      <div className="columns is-vcentered is-centered is-multiline pl-5 pr-5 mb-5">
        <div className="stat stat-2">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">Your total DOGE earned</span>
        </div>
        <div className="stat stat-2">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">Your estimated DOGE per day</span>
        </div>
        <div className="stat stat-1">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">Your held DOGE</span>
        </div>
        <div className="stat stat-1">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">Your held DGOD</span>
        </div>
        <div className="stat">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">Your Pending DOGE Rewards</span>
          <button className='button is-rounded mt-1 is-small' style={{maxWidth:"10em", position:"absolute",bottom:"-1.5em", right:"0em"}}>Manual Claim</button>
        </div>
        <div className="stat">
          <span className="stat-title">0.00m</span>
          <span className="stat-content">Your Vesting DGOD</span>
        </div>
        <div className="stat">
          <span className="stat-title">00d00m00s</span>
          <span className="stat-content">Next DGOD Vest Unlock</span>
          <button className='button is-rounded mt-1 is-small' style={{maxWidth:"10em", position:"absolute",bottom:"-1.5em", right:"0em"}}>Withdraw</button>
        </div>

      </div>
    </section>
    
    <Footer />
    
  </>);
}

export default Home
