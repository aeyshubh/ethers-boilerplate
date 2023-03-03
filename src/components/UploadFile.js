import {useState} from 'react';
import {Web3Storage} from 'web3.storage';

function UploadFile() {
    //Add Your API KEY HERE .Package dotenv-webpack is already added in project 

    const storageKey = process.env.REACT_APP_STORAGE_API;
    const [uploadedFiles,setUploadedFiles] = useState('');

    //TO connect with web3Storage Client
    function makeStorageClient () {
        return new Web3Storage({ token: storageKey })
    }

    //This function will get Files from input element
    function getFiles () {
        const fileInput = document.querySelector('input[type="file"]')
        return fileInput.files
    }

    //This function will store files to IPFS using Web3.Storage
    async function storeFiles (files) {
        const client = makeStorageClient()
        const cid = await client.put(files,{name : files[0].name})
        //console.log('stored files with cid:', cid)
        return cid
    }

    async function listUploads () {
        const client = makeStorageClient()
        let arr = []
        //fetching data into an array for easy iteration
        for await (const upload of client.list()) {
            arr.push(upload)
          }
        setUploadedFiles(arr)
      }

    function upload(){
        storeFiles(getFiles());
    }
 

    return(
        <div className="UploadFile">
            <h1>IPFS Boiler Code using web3.storage</h1>
            <h3>I Know Desinging is BAD but YOU can show off your skills here ;) </h3>
            <h3>Do not forget to get your API key from web3.storage</h3>

            <div className="form">
                <input id="file" type="file"></input><br/>
                <button onClick ={upload} > Save to IPFS </button><br/><br/>

                <button id="btn2" onClick ={listUploads} > Get Files </button>
                <table align='center' border={"2px"}> <tr><th>File Name</th><th>CID</th><th>File Size</th></tr>
                {uploadedFiles && uploadedFiles.map((data)=>(
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.cid}</td>
                            <td>{data.dagSize}</td>
                        </tr>
                ))}
                </table>
                
            </div>
        </div>
    );
}

export default UploadFile;