import React, { Component } from 'react'
import CryptoList from "../../components/CryptoList";
import { useState, useEffect } from 'react';
import "./Page.css";

const Page = () => { 
  
  const [cryptos, setCryptos] = useState([]);  
  const [initalSearch,setInitialState] = useState([]);
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  let showing = true;
  
  useEffect(() => {
    fetch("http://localhost:5000/coins/", {method: "GET"})
    .then(res => res.json())
    .then(data => setSearch(JSON.parse(data)));
  }, [])

  //Add Crypto
  function addCrypto(){
    const val = search.find( (c)=> c.name === input);
    if(val === undefined){
      console.log("Element not found")
      return;
    }
    if(cryptos.find( (c)=>c.text === input) !== undefined){
      console.log("Duplicate")
      return;
    } 

    setCryptos(cryptos.concat({text:val.name, price:val.quote.USD.price, percentage:val.quote.USD.percent_change_24h}));
  }

  //Delete 
  const deleteCrypto = (text) => {
    setCryptos(cryptos.filter((crypto) => crypto.text !== text));
  }

  let searchResults = []
  if(input.length > 0){
    searchResults = search.filter((i) => {
      return i.name.toLowerCase().match(input);
    })
  }
  else{
    searchResults = [];
  }
  return (
    <div>
        <div id="title">CryptoBot</div>
        <div id="searchbar">
          <div className="searchBar">
          <div className="search" id="search-txt">Enter Crypto Name: </div>
            <input type="text" placeholder="Searching..." onChange={(e) => {setInput(e.target.value)}} value={input} id="crypto-name"></input>
            <button type="submit" id="button" onClick={addCrypto}>Add</button>
            <ul className="search-list">
              {searchResults.map((element, index) => {
                return(<div key={index}>
                    <li id="list-item" onClick={function(){setInput(element.name); showing=false;}} >
                      {element.name}
                    </li> 
                </div>
                )
              })}
            </ul>
          </div>
        </div>
        <div id="list">
          <div id="list-title">Selected Currencies</div>
          <div id="cryptos">
            <div id="col-titles">
              <div className="col-title" id="name">Name</div>
              <div className="col-title" id="price">Price</div>
              <div className="col-title" id="hr24">24hr Change</div>
            </div>
            <div id="crypto-list">{cryptos.length > 0 ? (<CryptoList cryptos={cryptos} onDelete={deleteCrypto} />) : ( 'No Cryptos Selected' ) }</div>
          </div>
        </div>
      </div>
  )
}

export default Page;
