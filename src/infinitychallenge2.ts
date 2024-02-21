import * as readline from 'readline'; //type node를 설치해야만 사용가능함.


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


class InfinityChallenge {
    private episodeName: string;
    private runningTime: number;
    private episodeYear: Date;
    private episodeRate: number;
    private episode: { order: number, name: string, time: number, year: Date, rate: number }[];



    constructor() {
        this.episodeName = "";
        this.runningTime = 0;
        this.episodeRate = 0;
        this.episodeYear = new Date();//new는 객체를 생성하는 키워드.
        //Date뒤에 괄호를 붙이지 않으면 생성자를 참조하여 객체를 생성한다는 것이고, 괄호를 붙이면 초기화된 객체까지 생성하는 것임.
        this.episode = [];
    }

    async saveEpisode(): Promise<void> {
        const name = await this.askEpisode("에피소드 이름을 작성하세요.");
        const year = await this.askEpisode("에피소드 방영시기를 작성해주세요.");
        const time = await this.askEpisode("에피소드 러닝타임을 작성해주세요.");
        const rate = await this.askEpisode("에피소드 시청률을 작성해주세요.");
        const order = this.episode.length + 1;
        if (order === 21) {
            const minor: number = 0;
            const lowestRateIndex = this.episode.reduce((lowest, episode, index) => {
                return episode.rate < this.episode[lowest].rate ? index : lowest;
            }, 0);
            this.episode.splice(lowestRateIndex, 1);
            const order: number = this.episode.length;
            this.episode.push({ order, name, time, year, rate });
        } else {
            this.episode.push({ order, name, time, year, rate });
        }
    }
    askEpisode(query: string): Promise<any> {
        return new Promise((resolve) => {
            rl.question(query, (answer) => {
                resolve(answer);
            })
        })
    }
    callbyEpisodeName(name: string): void {
        const filtername = this.episode.filter(ep => ep.name.includes(name));
        console.log(filtername);
    }

    async modifyEpisode(): Promise<void> {
        const targetEP = await this.askEpisode("타겟 에피소드 이름을 작성하세요.");
        const target = await this.askEpisode("무엇을 수정할건가요?(번호입력) 1. 에피소드 이름 2. 러닝타임 3. 방영연도");
        const EP = this.episode.find(ep => ep.name === targetEP);
        console.log("에피소드 :", EP);
        if (EP === null || EP === undefined) {
            rl.close()
            return;
        }
        switch (parseInt(target)) {
            case 1:
                const name = await this.askEpisode("수정할 에피소드 이름을 작성하세요.");
                EP.name = name;
                //!는 non null assersion , ? null일수도 있다.
                break;
            case 2:
                const time = await this.askEpisode("수정할 에피소드 러닝타임을 작성하세요.");
                EP.time = time;

                break;
            case 3:
                const year = await this.askEpisode("수정할 에피소드 방영연도를 작성하세요.");
                EP.year = year;
                break;
            default:
                break;
        }

    }

    async deleteEP(): Promise<void> {
        const targetEP = await this.askEpisode("삭제할 에피소드 이름을 작성하세요.");
        const idx = this.episode.findIndex(ep => ep.name === targetEP);
        if (idx !== -1) {
            this.episode.splice(idx, 1);
        }
        for (let i = idx; i < this.episode.length; i++) {
            this.episode[i].order = i + 1;
        }
    }
    getStatus(): void {
        console.log(this.episode);
    }
    async watchIC(duration: number, idx: number): Promise<void> {
        return new Promise((resolve) => {//return Promise문을 이해하자.
            console.log(duration,"분만 봐야돼 너!");
            console.log(this.episode[idx].name, "방영 중");
            let episodeIdx = idx;
            let seconds = 0;
            let second = 0;
            const intervalId = setInterval(() => {
                if (this.episode[episodeIdx].time <= second) {
                    episodeIdx++;
                    console.log(this.episode[episodeIdx].name, "방영 중");
                    console.log("아 재밌어.");
                    second = 0;
                } else {
                    console.log("아 재밌어.");
                }

                seconds++;
                second++;

                if (seconds > duration) {
                    console.log("너 이제 그만봐. 방영 중지!!");
                    clearInterval(intervalId);
                    resolve();
                }
            }, 1000);
        });
    }

}

async function main() {
    const IC = new InfinityChallenge();
    IC.getStatus();
    await IC.saveEpisode();
    await IC.saveEpisode();
    await IC.saveEpisode();
    IC.getStatus();
    await IC.watchIC(10, 0);
    await IC.modifyEpisode();
    IC.getStatus();
    await IC.deleteEP();
    IC.getStatus();
    rl.close();
}

main().then(() => {
    process.exit(0);
})