


// const myPromise = new Promise<string>((resolve, reject) => {
//     const success = false; // 성공/실패를 제어하기 위한 변수
//     if (success) {
//         resolve("Promise is resolved successfully!"); // 성공 시
//     } else {
//         reject("Promise is rejected."); // 실패 시
//     }

// });
// myPromise
//     .then((result) => {
//         console.log(result); // 성공 시 결과 처리
//     })
//     .catch((error) => {
//         console.error(error); // 실패 시 오류 처리
//     });



const promise1 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("프로미스1 성공입니다.");
    }, 500);
});


const promise2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("프로미스2 성공입니다.");
    }, 300);
});

Promise.race([promise1,promise2])
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.error(error);
    });

Promise.all([promise1,promise2])
    .then((results:any[])=>{
        results.forEach((item)=>console.log(item));
    })

function getpromise<T>(value :T):Promise<T>{
    return Promise.resolve(value);
}
function fetchpromise():Promise<void>{
    return new Promise<void>((resolve,reject)=>{
        setTimeout(()=>{
            console.log("1 약속입니다. 지켜주세요!");
        },800);
    })
}
function fetchpromise2():Promise<void>{
    return new Promise<void>((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2 약속입니다. 지켜주세요!");
        },850);
    })
}
async function returnpromise():Promise<void>{
    const promise4= await getpromise("하이");
    console.log(promise4);
    console.log(typeof promise4);
}

fetchpromise();
fetchpromise2();
returnpromise();
