import { abi } from './contract';
import { Contract, ethers } from 'ethers';
import { useEffect } from 'react';
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contractAddress = '0xd3DE95C8a44aE71E82501152D9C63083241C8feE';
const contractABI = abi;
const contractObjP = new Contract(
    contractAddress,
    contractABI,
    provider
);
const contractWriting = new ethers.Contract(contractAddress, contractABI, signer);


async function damn() {
    //const chainId = await window.ethereum.request({ method: "eth_chainId" });

    console.log("Reading")
    const getName = await contractObjP.name();

    console.log("mined", getName.hash);
    console.log("The Name is:" + getName);
}
const writeData = async () => {
    const accounts = await provider.send("eth_requestAccounts", []); //This is used to pop up metamask accounts list
   
const account = accounts[0];
     console.log(" Address :" + account);

    const writen = await contractWriting.setValue(100);
    console.log("Written"+writen.hash);
    const c = await contractObjP.getvalue();
    console.log("The New Value:" + c);
}

const sendEtherToContract = async () => {
    const reply = await contractWriting.sendEthContract({ value: ethers.utils.parseEther("0.001") });
    console.log("Reply =" + reply.hash);
}

const sendEtherToAContract = async () => {
    const status = await contractWriting.sendEthUser("0x6f144c0628D2039f27F13604c583fAb72BEF197e", { value: ethers.utils.parseEther("0.001") });
        console.log("Hash :"+status);
}

export const Writecontract = () => {
    return (
        <div>


            <button
                onClick={() => damn()}>Read
            </button>

            <button
                onClick={() => writeData()}>Write
            </button>

            <button
                onClick={() => sendEtherToContract()}>SendEther
            </button>

            <button
                onClick={() => sendEtherToAContract()}>SendEtherToAPerson
            </button>

        </div>
    )
}