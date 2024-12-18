
import * as readline from 'readline'; //type node를 설치해야만 사용가능함.


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Player {
    name: String;
    stats: number;
    pos: String;
    num: String;
}

enum Query {
    off = "공격수 숫자를 입력하세요.",
    mid = "미드필더 숫자를 입력하세요",
    def = "수비수 숫자를 입력하세요.",
}

enum teamName {
    mangu = "맹체스터 유나이티드",
    chealsea = "첼시"
}

interface Players {
    def: Player[];
    mid: Player[];
    off: Player[];
}

interface Formation {
    teamName: String;
    def: number;
    mid: number;
    off: number;
}


class Play {

    public formation: Formation;
    public matchUp : Formation[];
    constructor() {
        this.formation = { teamName: "", def: 0, mid: 0, off: 0 };
        this.matchUp=[];
    }

    isKeyOfQuery(key: any):key is keyof typeof Query{
        return key in Query;
    }

    inputFormation(query: string): Promise<any> {
        return new Promise((resolve) => {
            rl.question(query, (answer) => {
                resolve(answer);
            })
        })
    }

    async goal(): Promise<void> {

    }

    async play(): Promise<void> {
        return new Promise((resolve) => {
            let seconds: number = 0;
            console.log("경기 시작합니다.");
            const intervalId = setInterval(() => {
                seconds += 1;
                if (seconds <= 90) {
                    //골 넣을 확률로 골 넣을 건지 계산
                    if (seconds < 45) {
                        console.log("전반전 진행중");
                    }
                    if (seconds === 45) {
                        console.log("전반전 종료되었습니다.");
                    }
                    if (seconds > 45) {
                        console.log("후반전 진행중");
                        if (seconds === 55) {
                            console.log("선수 교체");
                        }
                        if (seconds === 65) {
                            console.log("선수 교체");
                        }
                        if (seconds === 75) {
                            console.log("선수 교체");
                        }
                        if (seconds === 85) {
                            console.log("선수 교체");
                        }

                    }
                }
                else {
                    console.log("경기 종료되었습니다.");
                    console.log("경기 결과");
                    clearInterval(intervalId);
                    resolve();
                }
            }, 1000);
        });



    }

}

class Mangu {
    public playerList: Player[];

    constructor() {
        this.playerList = [];

    }
}

class Chelsea {
    public playerList: Player[];

    constructor() {
        this.playerList = [];

    }
}

async function main() {
    //포메이션 입력하기
    const play = new Play();
    
    for(let i=0;i<2;i++){
        let currentFormation :Formation={teamName :"",def :0,mid :0,off:0};
        const teamNameInput :String =await play.inputFormation("팀 이름을 입력하세요.");
        currentFormation.teamName = teamNameInput;
        for (let key in Query) {
            if(play.isKeyOfQuery(key)){
                let tmp = await play.inputFormation(Query[key]);
                let num = parseInt(tmp,10);
                console.log(num);
                if(!isNaN(num)){
                    switch(key){
                        case "def":
                            currentFormation.def = num;
                            break;
                        case "mid":
                            currentFormation.mid = num;
                            break;
                        case "off":
                            currentFormation.off = num;
                            break;
                        default :
                            console.log("포지션을 정확하게 입력하세요.");
                            break;
                    }
                }else{
                    console.log("유효한 숫자를 입력해주세요.");
                }
            }
        }
        play.matchUp.push(currentFormation);
    }
    console.log(play.matchUp);
    await play.play();


}
main().then(() => {
    process.exit(0);
})