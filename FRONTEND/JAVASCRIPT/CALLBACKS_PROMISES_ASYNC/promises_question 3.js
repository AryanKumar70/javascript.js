/**
 * Implement set of dummy function  which can mimic(COPY BEHAVIOUR OF SOMETHING) the behaviour of following function :
 *  1. download - This function should mimic downloading of somecontent from a url.
 * 2. writeFile -   This function should mimic writing of  some content to a file.
 * 3. upload -  This function should mimic uploading a file to a server.
 * 
 *   ,Now after you implemented these function  , try to implement these function in a scenario where we first:
 *   download a file , then write it to a disk  and then upload it to a server.
 */


function download(url ,callback){
    console.log("Downloading from" , url);
    setTimeout(() =>{
        console.log("Downloading is done");
        let downloadData = "some data";
        callback?. (downloadData);

    } ,3000);

}

function writeFile(data,fileName , callback){ // 1.filename tells name of file to be created in which data will be written .
    console.log("writing" ,data , "to file");
    setTimeout(() => {
        console.log("writing to a file" , fileName , "is done");
        let status = "success";
        callback ?.(status);   //2. "?." is OPTIONAL CHAINING property jisme user ne callback pass kiye to call kr dega and nhi pass so call nhi krega 
                         //3.OPTIONAL CHAINING agar function h to usko call krega and object h so uska koi property call krega . 
    } , 2000);

}

function upload(fileName ,url , callback){ // 4.fileName tell name of file to be uploaded
    console.log("uploading file " , fileName , "to" , url);
    setTimeout(() =>{
        console.log("upload is done");
        let uploadStatus = "success";
        callback?. (uploadStatus);

    } ,3000);

}

function process(){
    download( "https://www.example.com ",(data) => {
        writeFile( data , "file.txt ", (status) => {
            upload( "file.txt" ,"https://www.example1.com" ,(uploadStatus) =>{
                console.log("All done");

            });

        });

    });
}
process(); 
 