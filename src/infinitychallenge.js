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
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline"); //type node를 설치해야만 사용가능함.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var InfinityChallenge = /** @class */ (function () {
    function InfinityChallenge() {
        this.episodeName = "";
        this.runningTime = "";
        this.episodeYear = new Date(); //new는 객체를 생성하는 키워드.
        //Date뒤에 괄호를 붙이지 않으면 생성자를 참조하여 객체를 생성한다는 것이고, 괄호를 붙이면 초기화된 객체까지 생성하는 것임.
        this.episode = [];
    }
    InfinityChallenge.prototype.saveEpisode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, year, time, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.askEpisode("에피소드 이름을 작성하세요.")];
                    case 1:
                        name = _a.sent();
                        return [4 /*yield*/, this.askEpisode("에피소드 방영시기를 작성해주세요.")];
                    case 2:
                        year = _a.sent();
                        return [4 /*yield*/, this.askEpisode("에피소드 러닝타임을 작성해주세요.")];
                    case 3:
                        time = _a.sent();
                        order = this.episode.length + 1;
                        this.episode.push({ order: order, name: name, time: time, year: year });
                        return [2 /*return*/];
                }
            });
        });
    };
    InfinityChallenge.prototype.askEpisode = function (query) {
        return new Promise(function (resolve) {
            rl.question(query, function (answer) {
                resolve(answer);
            });
        });
    };
    InfinityChallenge.prototype.callbyEpisodeName = function (name) {
        var filtername = this.episode.filter(function (ep) { return ep.name.includes(name); });
        console.log(filtername);
    };
    InfinityChallenge.prototype.modifyEpisode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var targetEP, target, EP, _a, name_1, time, year;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.askEpisode("수정할 에피소드 이름을 작성하세요.")];
                    case 1:
                        targetEP = _b.sent();
                        return [4 /*yield*/, this.askEpisode("무엇을 수정할건가요?(번호입력) 1. 에피소드 이름 2. 러닝타임 3. 방영연도 ")];
                    case 2:
                        target = _b.sent();
                        EP = this.episode.find(function (ep) { return ep.name === targetEP; });
                        console.log("에피소드 :", EP);
                        if (EP === null || EP === undefined) {
                            rl.close();
                            return [2 /*return*/];
                        }
                        _a = parseInt(target);
                        switch (_a) {
                            case 1: return [3 /*break*/, 3];
                            case 2: return [3 /*break*/, 5];
                            case 3: return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 9];
                    case 3: return [4 /*yield*/, this.askEpisode("수정할 에피소드 이름을 작성하세요.")];
                    case 4:
                        name_1 = _b.sent();
                        EP.name = name_1;
                        //!는 non null assersion , ? null일수도 있다.
                        return [3 /*break*/, 10];
                    case 5: return [4 /*yield*/, this.askEpisode("수정할 에피소드 러닝타임을 작성하세요.")];
                    case 6:
                        time = _b.sent();
                        EP.time = time;
                        return [3 /*break*/, 10];
                    case 7: return [4 /*yield*/, this.askEpisode("수정할 에피소드 방영연도를 작성하세요.")];
                    case 8:
                        year = _b.sent();
                        EP.year = year;
                        return [3 /*break*/, 10];
                    case 9: return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    InfinityChallenge.prototype.deleteEP = function () {
        return __awaiter(this, void 0, void 0, function () {
            var targetEP, idx, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.askEpisode("삭제할 에피소드 이름을 작성하세요.")];
                    case 1:
                        targetEP = _a.sent();
                        idx = this.episode.findIndex(function (ep) { return ep.name === targetEP; });
                        if (idx !== -1) {
                            this.episode.splice(idx, 1);
                        }
                        for (i = idx; i < this.episode.length; i++) {
                            this.episode[i].order = i + 1;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InfinityChallenge.prototype.getStatus = function () {
        console.log(this.episode);
    };
    return InfinityChallenge;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var IC;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    IC = new InfinityChallenge();
                    IC.getStatus();
                    return [4 /*yield*/, IC.saveEpisode()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, IC.saveEpisode()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, IC.saveEpisode()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, IC.saveEpisode()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, IC.saveEpisode()];
                case 5:
                    _a.sent();
                    IC.getStatus();
                    return [4 /*yield*/, IC.modifyEpisode()];
                case 6:
                    _a.sent();
                    IC.getStatus();
                    return [4 /*yield*/, IC.deleteEP()];
                case 7:
                    _a.sent();
                    IC.getStatus();
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
main().then(function () {
    process.exit(0);
});
