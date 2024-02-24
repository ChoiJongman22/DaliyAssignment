// interface Players{
//     number:number,
//     name:string,
//     stats:number,
//     salary :number
// }

// interface Market{
//     name:string,
//     salary :number,
//     stats:number
// }

// class Mangu3{
//     private playerList : Players[];
//     private squad:{name:string, stats:number}[];
//     private marketList:{name:string;salary:number;stats:number}[];
//     private budget :number;

//     constructor(){
//         this.playerList=[];
//         this.squad=[];
//         this.marketList=[];
//         this.budget=150;
//     }

//     getRandomElement<T>(list:T[]):T{
//         const randomIdx=Math.floor(Math.random()*list.length);
//         return list[randomIdx];
//     }

//     defaultManguTeam(number:number, name:string,stats:number,salary:number):void{
//         this.playerList.push({number,name,stats,salary});
//     }
//     makeMarket(name:string,stats:number,salary:number):void{
//         this.marketList.push({name,stats,salary});
//     }

//     dealMarket():void{
        

//     }


//     constructionTeam():void{
//         this.playerList.sort((a,b)=>b.stats - a.stats);
//         for(let i=0;i<11;i++){
//             const name :string =this.playerList[i].name;
//             const stats:number = this.playerList[i].stats;
//             this.squad.push({name,stats});
//         }
//         console.log(this.squad);
//         const totalStats=this.squad.reduce((sum,player)=>sum+player.stats,0); //초기값은 0
//         console.log("이 팀의 스탯은 ",totalStats);
//         console.log("이걸로 이기겠누~~");
//     }

// }


// const myPromise = new Promise<string>((resolve, reject) => {
//       const success = false; // 성공/실패를 제어하기 위한 변수
//       if (success) {
//         resolve("Promise is resolved successfully!"); // 성공 시
//       } else {
//         reject("Promise is rejected."); // 실패 시
//       }

//   });
//   myPromise
//   .then((result) => {
//     console.log(result); // 성공 시 결과 처리
//   })
//   .catch((error) => {
//     console.error(error); // 실패 시 오류 처리
//   });


// // async function main(){
// //     // const Mang=new Mangu3();
// //     // Mang.defaultManguTeam(1,"오나나나",45,70);
// //     // Mang.defaultManguTeam(2,"린델로프",39,60);
// //     // Mang.defaultManguTeam(5,"매과이어",41,50);
// //     // Mang.defaultManguTeam(20,"달로",40,60);
// //     // Mang.defaultManguTeam(29,"완비사카",40,55);
// //     // Mang.defaultManguTeam(6,"리산마",50,70);
// //     // Mang.defaultManguTeam(19,"바란",50,70);
// //     // Mang.defaultManguTeam(49,"쇼",44,50);
// //     // Mang.defaultManguTeam(8,"브페",51,80);
// //     // Mang.defaultManguTeam(23,"펠리스트리",42,30);
// //     // Mang.defaultManguTeam(44,"판 더 베이크",41,30);
// //     // Mang.defaultManguTeam(39,"맥중사",46,40);
// //     // Mang.defaultManguTeam(10,"급식포드",47,70);
// //     // Mang.defaultManguTeam(9,"마샬",39,70);
// //     // Mang.defaultManguTeam(21,"안토니",29,75);
// //     // Mang.defaultManguTeam(14,"린가드",40,55);
// //     // Mang.defaultManguTeam(17,"가르나초",39,57);
// //     // Mang.defaultManguTeam(11,"호일룬",41,70);

// //     // Mang.makeMarket("음바페",50,100);
// //     // Mang.makeMarket("손흥민",49,85);
// //     // Mang.makeMarket("이강인",44,75);
// //     // Mang.makeMarket("김민재",49,89);
// //     // Mang.makeMarket("벨링엄",48,90);
// //     // Mang.makeMarket("차범근",55,110);
// //     // Mang.makeMarket("박지성",48,78);
// //     // Mang.makeMarket("동팡저우",15,60);
// //     // Mang.makeMarket("에브라",40,70);
// //     // Mang.makeMarket("드록바",44,76);
// //     // Mang.makeMarket("조현우",47,55);

// //     // console.log();
// //     // Mang.constructionTeam();
// // }


// // main().then(() => {
// //     process.exit(0);
// // })