const {ethers,Contract} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://eth-goerli.g.alchemy.com/v2/3LTa-sxj5pk6367rKlXq399SXWtYRVOf`); //If there is a new chain then you can paste the Rpc Url here 
const contract_address ="0x44823d543e417B1C4b7955d1cc58c5AD51294F88";
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getvalue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
const query = async() =>{
    /* const block = await provider.getBlockNumber();
    console.log(block);

    const balance = await provider.getBalance("0xaB8a67743325347Aa53bCC66850f8F13df87e3AF");
    console.log(balance);
 */

    const contractObj = ethers.Contract(contract_address,abi,provider);
    const name = await contractObj.name();
    console.log(name);
    
    const num = await contractObj.num();
    console.log(num);
 
    const contractBalance = await contractObj.contractBalance();
    console.log("Contract bal :"+contractBalance);
}
query();

export const trial{

}