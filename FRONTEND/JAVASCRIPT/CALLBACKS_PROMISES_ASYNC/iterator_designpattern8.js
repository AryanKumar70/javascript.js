function fetchNextElement(arr){ //1. iterator me "value"  and "done" properties h 
    let idx = 0;
    function next(){
        if(idx >= arr.length){
            // some logic 
            return{value:undefined , done: true};  // 2."true" mtlb ab stop kro and new value ab nhi milega 
        }
        const newElement = arr[idx]; //3. current ka store kiye
        idx++;  //4. then print se pahle ek idx aage bhade
        return{value:newElement , done:false};  // 5."false" mtlb next value h to jao next ke liye
    }

    return {next};


}

const autoFetch = fetchNextElement([1,2,3,4,5]);
console.log(autoFetch.next());  //6. ".next" se next value ko print kr skte h 
console.log(autoFetch.next());
console.log(autoFetch.next());
console.log(autoFetch.next());
console.log(autoFetch.next());
console.log(autoFetch.next());