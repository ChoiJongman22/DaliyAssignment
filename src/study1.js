"use strict";
// // 1. Promise, async/await
// // const myPromise = new Promise<string>((resolve, reject) => {
// //     const success = false; // 성공/실패를 제어하기 위한 변수
// //     if (success) {
// //         resolve("Promise is resolved successfully!"); // 성공 시
// //     } else {
// //         reject("Promise is rejected."); // 실패 시
// //     }
// // });
// // myPromise
// //     .then((result) => {
// //         console.log(result); // 성공 시 결과 처리
// //     })
// //     .catch((error) => {
// //         console.error(error); // 실패 시 오류 처리
// //     });
// const promise1 = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve("프로미스1 성공입니다.");
//     }, 500);
// });
// const promise2 = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve("프로미스2 성공입니다.");
//     }, 300);
// });
// // Promise.race([promise1, promise2])
// //     .then((value) => {
// //         console.log(value);
// //     })
// //     .catch((error) => {
// //         console.error(error);
// //     });
// // Promise.all([promise1, promise2])
// //     .then((results: any[]) => {
// //         results.forEach((item) => console.log(item));
// //     })
// function getpromise<T>(value: T): Promise<T> {
//     return Promise.resolve(value);
// }
// function fetchpromise(): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//         setTimeout(() => {
//             console.log("1 약속입니다. 지켜주세요!");
//         }, 800);
//     })
// }
// function fetchpromise2(): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//         setTimeout(() => {
//             console.log("2 약속입니다. 지켜주세요!");
//         }, 850);
//     })
// }
// async function returnpromise(): Promise<void> {
//     const promise4 = await getpromise("하이");
//     console.log(promise4);
//     console.log(typeof promise4);
// }
// // 2. callback함수
// type CallbackFunction = (arg: string) => void;
// function myFunction(callback: CallbackFunction): void {
//     callback("콜백 함수!");
// }
// // myFunction((message: string) => {
// //     console.log(message);
// // })
// async function exampleTask(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Example Task Complete");
//         }, 1000);
//     });
// }
// async function exampleTask2(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Example Task2 Complete");
//         }, 1000);
//     });
// }
// async function handleAsyncTask(message:string){
//     console.log(message);
//     const result = await exampleTask();
//     console.log(result);
//     const result2=await exampleTask2();
//     console.log(result2);
//     // process.nextTick(()=>{
//     //     console.log("Next TICK");
//     // })
//     setImmediate(()=>{
//         console.log("Set Immediate");
//     })
// }
// // fetchpromise();
// // fetchpromise2();
// // returnpromise();
// console.log("Main Program Start!");
// handleAsyncTask("Task1 Start!");
// console.log("Main Program Complete!");
