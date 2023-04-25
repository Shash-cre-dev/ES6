//ASYNC AND AWAIT

const photos = [];

function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = uploadStatus;
    
    console.log(result);
    console.log(photos.length);
}

photoUpload();

//Promise
//0

//It's 0 because because JS runs synchronously, it executes line by line
// uploadStatus takes 3 s to run completely, but JS skips it after some time
//and moves on to the next instruction, since uploadStatus disn't complete 
//it's execution result = 0


//To resolve this issue async and await are used
const photos1 = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos1.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = await uploadStatus;
    
    console.log(result);
    console.log(photos1.length);
}

photoUpload();

// async results in asynchronous execution 
//we go over to 
//let result = await uploadStatus;
//here until uploadStatus (Promise) is completed the execution
//doesn't move to the next line ie it waits

//Photo Uploaded
//1
