const myPromise = new Promise((resolve, reject) => {
    const success = false;
    if(success){
        resolve("resolved successfully");
    }
    else{
        reject("reject");
    }
})

myPromise.then((result) => {
    if(result){
        console.log("Successfuly resolved");
    }
})
.catch((error) => {
    console.error(error);
})
