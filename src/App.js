import React, { useEffect, useState } from "react";
import './App.css';
import guvenABI from "./ABI.json"

import Web3 from "web3";

function App() {
  const web3 = new Web3("https://api.avax-test.network/ext/bc/C/rpc")
  const contractAddress = "0xff39f96d6560F769D5a1f30fFd4aa044AF3296b5"
  const [account, setAccount] = useState("")
  async function requestConnect() {

    const account = (await window.ethereum.request({ method: "eth_accounts" }))[0]
    setAccount(web3.utils.toChecksumAddress(account))
  }


  const handleTest = async () => {
    const Contract = new web3.eth.Contract(guvenABI, contractAddress);

    const result = await Contract.methods.newPayload("deneme").call()
    console.log(result);

  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestConnect} style={{ cursor: "pointer" }}>{account ? account : "bağlan"}</button>
        <button onClick={handleTest} style={{ cursor: "pointer" }}>deneme</button>
      </header>
    </div>
  );
}

export default App;
