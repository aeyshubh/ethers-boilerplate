
# Project Title

This repo is created for begineers starting into blockchain and want to learn ethers.js

<h2>Using this repo you can Read,Write data , Send ethers to the deployed smart contract and send ethers to a person.
<h3>How to use this repo ?</h3><br>
<li>First Create a smart contract on remix,compile and deploy it</li><br>
<li>Copy the Abi and smart contract address</li><br>
<li>clone this repo in your local env.</li><br>
<li>Change the Contract Address in ./src/wallet.js</li><br>
<li>Change Abi in ./src/contract.js</li><br>
<li>A provider is used to read data from blockchain which dosen't require any wallet signature.</li><br>
<li>Solidity functions marked as View can be read using provider.</<li>I have created two objects,one for reading data and one for writing</li><br>
<li>contractRead is a Provider object for reading data</li><br>
<li>contractWrite is a writing object which requires a signer</li><br>
<li>In writeData() in wallet.js ,we are fetching the current addess of metamask and getting the one which is selected.</li><br>

<li>Surprise!Surprise! We are adding more and more features to our ethers boilerplate repo</li>
<li>All these new features will be found at <i>"src/components"</i> a few of them are :</li>
<h2>Components</h2>
<li><b>IPFS Boiler plate</b> : This boiler plate repo is using Web3.storage for storing files to IPFS</li>
<h3>How to use</h3>
  <li>Create a Account on Web3.Storage and get your API KEY</li>
  <li>Paste your API KEY in storageKey Variable</li>
  <li>Woohoo! you can now use this boiler plate and create exciting DApp</li>
  <li>It's Main feature are : can upload files to IPFS & can fetch those uploaded files and display it.</li>

<h3>Will be adding more & more features to it in future stay tune ;)</h3>
<h1> By Straw Hats </h1>
