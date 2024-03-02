// exampleTask 함수들은 모두 비슷한 구조를 가질 것입니다.
// 이들은 Promise를 반환하며, setTimeout을 사용하여 비동기적으로 작업을 완료합니다.

function exampleTask(taskNumber: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`exampleTask${taskNumber} 완료`);
            resolve(`결과 ${taskNumber}`);
        }, 1000); // 모든 작업은 1초 후에 완료
    });
}

async function runTasksSequentially() {
    // 각 Task를 실행하고, Task 사이에 setImmediate를 사용하여 다음 이벤트 루프 사이클로 작업을 넘깁니다.
    for (let i = 1; i <= 5; i++) {
        // 현재 Task 실행
        const result = await exampleTask(i);
        console.log(result);

        // 마지막 Task 이후에는 setImmediate를 호출하지 않습니다.
        if (i < 5) {
            // Promise를 사용하여 setImmediate를 await 가능하게 만듭니다.
            //await new Promise((resolve) => setImmediate(resolve));
            await new Promise((resolve)=> process.nextTick(resolve));
            console.log(`setImmediate 후 Task ${i + 1}로 이동`);
        }
    }
}

console.log("비동기 작업 시작");
runTasksSequentially().then(() => console.log("모든 비동기 작업 완료"));
