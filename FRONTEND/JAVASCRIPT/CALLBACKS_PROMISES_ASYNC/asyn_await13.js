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
            res(status);                 
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

async function exe(){
    console.log("start Execution: ");

    const downloadData = await download("https://www.example.com"); // using "await"se immediately function ke bahar aayenge and promise resolve hoga then phir function me wapas jayenge for final resolve
    console.log("Data Downloaded is " , downloadData );

    const fileResponse = await writeFile(downloadData , "example.txt");
    console.log("File write status " , fileResponse );

    const uploadStatus = await upload("example.txt" , "https://www.example.com");
    console.log("Upload status " , uploadStatus );

    return uploadStatus;
}

exe();

