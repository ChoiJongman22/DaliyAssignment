"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Mangu = /** @class */ (function () {
    function Mangu() {
        this.playerList = [];
        this.fightList = [];
        this.squad = [];
    }
    Mangu.prototype.getRandomElement = function (list) {
        var randomIdx = Math.floor(Math.random() * list.length);
        return list[randomIdx];
    };
    Mangu.prototype.makeManguTeam = function (number, name, fightCnt, stats, tolerance) {
        this.playerList.push({ number: number, name: name, fightCnt: fightCnt, stats: stats, tolerance: tolerance });
        console.log(name, " 선수!! 맹구에 입단을 환영합니다. ");
        console.log();
    };
    Mangu.prototype.fight = function () {
        var from = (this.getRandomElement(this.playerList)).name;
        var to = (this.getRandomElement(this.playerList)).name;
        var fidx = this.playerList.findIndex(function (player) { return player.name === from; });
        var tidx = this.playerList.findIndex(function (player) { return player.name === to; });
        if (from === to) {
            console.log(this.playerList[fidx].name, "는 자기와의 싸움중이거나 삐짐.");
            console.log();
        }
        else {
            if (this.playerList[tidx].tolerance >= 8) {
                console.log(this.playerList[tidx].name, " : 내가 참을게~!!!!");
                console.log();
                this.playerList[tidx].tolerance += 1;
                this.playerList[tidx].stats += 1;
                return;
            }
            console.log(this.playerList[fidx].name, ": ", this.playerList[tidx].name, " 이 xx야, 너 뭐야");
            this.playerList[fidx].fightCnt += 1;
            this.playerList[fidx].stats -= 1;
            this.playerList[fidx].tolerance -= 1;
            this.playerList[tidx].fightCnt += 1;
            this.playerList[tidx].stats -= 1;
            this.playerList[tidx].tolerance -= 1;
            if (this.playerList[fidx].tolerance == 0) {
                console.log(this.playerList[fidx].name, " 선수, 방출입니다.");
                this.playerList.splice(fidx, 1);
            }
            if (this.playerList[tidx].tolerance == 0) {
                this.playerList.splice(tidx, 1);
                console.log(this.playerList[tidx].name, " 선수, 방출입니다.");
            }
            this.fightList.push({ from: from, to: to });
            console.log();
            console.log("감스트 : 모에~~~~~~!!!!");
            console.log();
            console.log("퍼거슨 : 그만 싸워라, 축구도 못하는 것들이...");
            console.log();
        }
    };
    Mangu.prototype.constructionTeam = function () {
        this.playerList.sort(function (a, b) { return b.stats - a.stats; });
        for (var i = 0; i < 11; i++) {
            var name_1 = this.playerList[i].name;
            var stats = this.playerList[i].stats;
            this.squad.push({ name: name_1, stats: stats });
        }
        console.log(this.squad);
        var totalStats = this.squad.reduce(function (sum, player) { return sum + player.stats; }, 0); //초기값은 0
        console.log("이 팀의 스탯은 ", totalStats);
        console.log("이걸로 이기겠누~~");
    };
    return Mangu;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var Mang, i;
        return __generator(this, function (_a) {
            Mang = new Mangu();
            Mang.makeManguTeam(1, "오나나나", 0, 15, 9);
            Mang.makeManguTeam(2, "린델로프", 0, 7, 8);
            Mang.makeManguTeam(5, "매과이어", 0, 11, 8);
            Mang.makeManguTeam(20, "달로", 0, 14, 6);
            Mang.makeManguTeam(29, "완비사카", 0, 15, 7);
            Mang.makeManguTeam(6, "리산마", 0, 22, 8);
            Mang.makeManguTeam(19, "바란", 0, 21, 8);
            Mang.makeManguTeam(23, "쇼", 0, 12, 7);
            Mang.makeManguTeam(8, "브페", 0, 20, 3);
            Mang.makeManguTeam(23, "펠리스트리", 0, 5, 8);
            Mang.makeManguTeam(23, "판 더 베이크", 0, 4, 9);
            Mang.makeManguTeam(39, "맥중사", 0, 18, 8);
            Mang.makeManguTeam(10, "급식포드", 0, 19, 4);
            Mang.makeManguTeam(9, "마샬", 0, 7, 8);
            Mang.makeManguTeam(21, "안토니", 0, 7, 8);
            Mang.makeManguTeam(14, "린가드", 0, 11, 8);
            Mang.makeManguTeam(17, "가르나초", 0, 12, 7);
            Mang.makeManguTeam(11, "호일룬", 0, 13, 8);
            console.log();
            for (i = 0; i < 80; i++) {
                Mang.fight();
            }
            Mang.constructionTeam();
            return [2 /*return*/];
        });
    });
}
main().then(function () {
    process.exit(0);
});
