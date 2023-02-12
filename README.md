
# Project Title

This repo is created for begineers starting into blockchain and want to learn ether.js

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



