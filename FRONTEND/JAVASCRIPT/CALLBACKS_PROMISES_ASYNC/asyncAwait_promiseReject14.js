function download(url ){
    return new Promise(function exec(res,rej){
        console.log("Started Downloading data  from" , url);
        setTimeout(() =>{
            let data = "Some data from" + url;
            console.log("Downloading data from ", url);
            res(data);
        } ,3000);
    });
    

}

function writeFile(data , fileName){ 
    return new Promise(function exec(res,rej){  
        console.log("writing" ,data , "to file");
        setTimeout(() => {
            console.log("writing to a file" , fileName , "is done");
            let status = "success";
            rej(status);       // promise reject so "try catch" use hoga              
        } , 2000);
    });    

}

function upload(fileName ,url ){ 
    return new Promise(function exec(res,rej){ 
        console.log("uploading file " , fileName , "to" , url);
        setTimeout(() =>{
            console.log("upload is done");
            let uploadStatus = "success";
            res(uploadStatus);
        } ,3000);
    });    

}

async function exe(){  // 1.asyync is always return a promise object
    try{  // rej  promise so execute kr rhe h problem hua so catch print something wrong 
        console.log("start Execution: ");

        const downloadData = await download("https://www.example.com"); //2. using "await"se immediately function ke bahar aayenge and promise resolve hoga then phir function me wapas jayenge for final resolve
        console.log("Data Downloaded is " , downloadData ); // downloadData jb await hoga so promise bnayega jisme (status:pending , value:undefine, onful[] ,onrej[] )

        const fileResponse = await writeFile(downloadData , "example.txt");
        console.log("File write status " , fileResponse );

        const uploadStatus = await upload("example.txt" , "https://www.example.com");
        console.log("Upload status " , uploadStatus );

        return uploadStatus;

    } catch(e){
        console.log("Something Went Wrong");
    }

   
}

exe().then((v) => console.log("exec done " , v));  //3. exe is asyn function so promise return krega and ".then" so callback "v" wla filled hoga onfulfillment array me 

