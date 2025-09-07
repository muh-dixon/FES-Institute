const emailRef = document.querySelector(".email");

//1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1").then(response =>{
//    return response.json()
// }).then(data => {
//     emailRef.innerHTML = data.email
// })

// 2. Async/Await
async function email() {
   const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
   const data = await response.json()
   emailRef.innerHTML = data.email
} 

email();

const statusRef = document.querySelector(".status")

function getSubcription() {
    return new Promise((resolve, reject) => {
        resolve("FREE")
    }, 2000)
}


//1. then
// getSubcription().then(response => console.log(response))

//async/await
async function stats()
{
    const status = await getSubcription();
    statusRef.innerHTML = status;
    try {
        const vidStat = await getVid(status)
        videRef.innerHTML = vidStat
    }
    catch(e) {
        videRef.innerHTML = e;
    }
}

stats();


const videRef = document.querySelector(".video")

function getVid(subscriptionStats) {
    return new Promise((resolve, reject) => {
        if(subscriptionStats === "VIP"){
            resolve("Show video")
        }
        else if(subscriptionStats === "FREE") {
            resolve("Show trailer")
        }
        else{
            reject("no video")
        }

    })
}