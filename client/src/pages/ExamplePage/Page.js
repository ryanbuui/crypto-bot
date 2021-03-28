import React, { Component } from 'react'
import CryptoList from "../../components/CryptoList";
import { useState, useEffect } from 'react';
import "./Page.css";

const Page = () => {

  useEffect(() => {
    fetch("http://localhost:5000/coins/", {method: "GET"})
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])

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
          <div className="search" id="search-txt">Enter Crypto Name: </div>
          <div className="search"><input id="crypto-name"></input></div>
          <button id="button">Search</button>
        </div>
        <div id="list">
          <div id="list-title">Selected Currencies</div>
          <div id="cryptos">
            <div id="col-titles">
              <div className="col-title" id="name">Name</div>
              <div className="col-title" id="price">Price</div>
              <div className="col-title" id="hr24">24hr Change</div>
            </div>
            {cryptos.length > 0 ? (<CryptoList cryptos={cryptos} onDelete={deleteCrypto} />) : ( 'No Cryptos Selected' ) }
          </div>
        </div>
      </div>
  )
}

export default Page;

//hello