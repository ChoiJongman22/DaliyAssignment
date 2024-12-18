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
var Query;
(function (Query) {
    Query["off"] = "\uACF5\uACA9\uC218 \uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694.";
    Query["mid"] = "\uBBF8\uB4DC\uD544\uB354 \uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694";
    Query["def"] = "\uC218\uBE44\uC218 \uC22B\uC790\uB97C \uC785\uB825\uD558\uC138\uC694.";
})(Query || (Query = {}));
var teamName;
(function (teamName) {
    teamName["mangu"] = "\uB9F9\uCCB4\uC2A4\uD130 \uC720\uB098\uC774\uD2F0\uB4DC";
    teamName["chealsea"] = "\uCCBC\uC2DC";
})(teamName || (teamName = {}));
var Play = /** @class */ (function () {
    function Play() {
        this.formation = { teamName: "", def: 0, mid: 0, off: 0 };
        this.matchUp = [];
    }
    Play.prototype.isKeyOfQuery = function (key) {
        return key in Query;
    };
    Play.prototype.inputFormation = function (query) {
        return new Promise(function (resolve) {
            rl.question(query, function (answer) {
                resolve(answer);
            });
        });
    };
    Play.prototype.goal = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Play.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var seconds = 0;
                        console.log("경기 시작합니다.");
                        var intervalId = setInterval(function () {
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
                            }
                        }, 1000);
                    })];
            });
        });
    };
    return Play;
}());
var Mangu = /** @class */ (function () {
    function Mangu() {
        this.playerList = [];
    }
    return Mangu;
}());
var Chelsea = /** @class */ (function () {
    function Chelsea() {
        this.playerList = [];
    }
    return Chelsea;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var play, i, currentFormation, teamNameInput, _a, _b, _c, _i, key, tmp, num;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    play = new Play();
                    i = 0;
                    _d.label = 1;
                case 1:
                    if (!(i < 2)) return [3 /*break*/, 8];
                    currentFormation = { teamName: "", def: 0, mid: 0, off: 0 };
                    return [4 /*yield*/, play.inputFormation("팀 이름을 입력하세요.")];
                case 2:
                    teamNameInput = _d.sent();
                    currentFormation.teamName = teamNameInput;
                    _a = Query;
                    _b = [];
                    for (_c in _a)
                        _b.push(_c);
                    _i = 0;
                    _d.label = 3;
                case 3:
                    if (!(_i < _b.length)) return [3 /*break*/, 6];
                    _c = _b[_i];
                    if (!(_c in _a)) return [3 /*break*/, 5];
                    key = _c;
                    if (!play.isKeyOfQuery(key)) return [3 /*break*/, 5];
                    return [4 /*yield*/, play.inputFormation(Query[key])];
                case 4:
                    tmp = _d.sent();
                    num = parseInt(tmp, 10);
                    console.log(num);
                    if (!isNaN(num)) {
                        switch (key) {
                            case "def":
                                currentFormation.def = num;
                                break;
                            case "mid":
                                currentFormation.mid = num;
                                break;
                            case "off":
                                currentFormation.off = num;
                                break;
                            default:
                                console.log("포지션을 정확하게 입력하세요.");
                                break;
                        }
                    }
                    else {
                        console.log("유효한 숫자를 입력해주세요.");
                    }
                    _d.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6:
                    play.matchUp.push(currentFormation);
                    _d.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 1];
                case 8:
                    console.log(play.matchUp);
                    return [4 /*yield*/, play.play()];
                case 9:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main().then(function () {
    process.exit(0);
});
