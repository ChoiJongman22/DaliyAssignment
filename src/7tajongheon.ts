
interface studentStats {
    name: string;
    concentration: number;
    time: number;
    sumTime: number;
}

interface testStats {
    name: string;
    record: number;
}

class SevenTa {
    private studentList: studentStats[];
    private testList: testStats[];
    private testCnt: number;
    public level: number;
    public exit: boolean;

    constructor() {
        this.studentList = [];
        this.testList = [];
        this.testCnt = 10;
        this.level = 7;
        this.exit = false;
    }
    enterStudents(name: string, concentration: number, time: number, sumTime: number): void {
        this.studentList.push({ name, concentration, time, sumTime });
    }

    practiceTest(): void {
        for (let i = 0; i < this.studentList.length; i++) {
            for (let j = 0; j < 30; j++) {
                this.studentList[i].sumTime += this.studentList[i].time;
            }
        }
    }
    upgrade(name: string): void {
        const idx = this.studentList.findIndex(student => student.name === name);
        this.studentList[idx].concentration += 5;
    }
    evaluation(): void {
        let sum: number = 0;
        let success: number = 0;
        for (let i = 0; i < this.testList.length; i++) {
            sum += this.testList[i].record;
        }
        let mean: number = sum / this.testList.length;
        for (let i = 0; i < this.testList.length; i++) {
            if (this.testList[i].record  >= mean +30) {
                success += 1;
                this.upgrade(this.testList[i].name);
            }
        }
        mean=0;
        if (success >= this.testList.length * 0.4) {
            this.testCnt -= 1;
            this.level -= 1;
            if (this.level === 1 && this.exit == true) {
                this.exit = true;
                return;
            }
            if (this.testCnt > 0) {
                console.log("다들 시험을 잘봤구나.");
                console.log("나는 이제 ", this.level, "타강사다.");
                console.log("이제 ", this.testCnt, "번 남았다~!");
            } else {
                console.log("고생했다.");
                console.log("나는 이제 ", this.level, "타강사다.");
                return;
            }

        }
    }

    examTest(): void {
        for (let i = 0; i < this.studentList.length; i++) {
            const name = this.studentList[i].name
            const record = this.studentList[i].sumTime + this.studentList[i].concentration
            this.testList.push({ name, record });
            this.studentList[i].sumTime=0;
        }

    }
}



// async function main() {
//     const teacher = new SevenTa();
//     console.log("시작하자.")
//     teacher.enterStudents("에이",10, 6,0);
//     teacher.enterStudents("비",15, 4,0);
//     teacher.enterStudents("씨",14, 7,0);
//     teacher.enterStudents("디",17, 4,0);
//     teacher.enterStudents("에프",20, 5,0);
//     teacher.enterStudents("이",21, 7,0);
//     teacher.enterStudents("쥐",15, 7,0);
//     teacher.enterStudents("에이치",12, 4,0);
//     teacher.enterStudents("아이",18, 7,0);
//     teacher.enterStudents("제이",19, 8,0);
//     teacher.enterStudents("케이",11, 5,0);
//     for(let i=0;i<10;i++){
//         teacher.practiceTest();
//         teacher.examTest();
//         teacher.evaluation();
//     }
//     console.log('1타강사가 되었다. 난 이제 일 안해 수고~!');
// }

// main().then(()=>{
//     process.exit(0);
// })