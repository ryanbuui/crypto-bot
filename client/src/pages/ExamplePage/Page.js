import React, { Component } from 'react'
import CryptoList from "../../components/CryptoList";
import { useState } from 'react';
import "./Page.css";

const Page = () => {
  const [cryptos, setCryptos] = useState([
    {
        id: 1,
        text: 'Crypto 1',
        price: '$99999',
        percentage: '10%'
    },
    {
        id: 2,
        text: 'Crypto 2',
        price: '$89999',
        percentage: '15%'
    },
  ])


  //Delete Crypto
  const deleteCrypto = (id) => {
    setCryptos(cryptos.filter((crypto) => crypto.id !== id));
  }

  return (
    <div>
        <div id="title">CryptoBot</div>
        <div id="searchbar">
          <div class="search" id="search-txt">Enter Crypto Name: </div>
          <div class="search"><input id="crypto-name"></input></div>
          <button id="button">Search</button>
        </div>
        <div id="list">
          <div id="list-title">Selected Currencies</div>
          <div id="cryptos">
            <div id="col-titles">
              <div class="col-title" id="name">Name</div>
              <div class="col-title" id="price">Price</div>
              <div class="col-title" id="hr24">24hr Change</div>
            </div>
            {cryptos.length > 0 ? (<CryptoList cryptos={cryptos} onDelete={deleteCrypto} />) : ( 'No Cryptos Selected' ) }
          </div>
        </div>
      </div>
  )
}

export default Page;

//hello