"use strict";
// const myPromise = new Promise<string>((resolve, reject) => {
//     const success = false; // 성공/실패를 제어하기 위한 변수
//     if (success) {
//         resolve("Promise is resolved successfully!"); // 성공 시
//     } else {
//         reject("Promise is rejected."); // 실패 시
//     }
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
// });
// myPromise
//     .then((result) => {
//         console.log(result); // 성공 시 결과 처리
//     })
//     .catch((error) => {
//         console.error(error); // 실패 시 오류 처리
//     });
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("프로미스1 성공입니다.");
    }, 500);
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("프로미스2 성공입니다.");
    }, 300);
});
Promise.race([promise1, promise2])
    .then(function (value) {
    console.log(value);
})
    .catch(function (error) {
    console.error(error);
});
Promise.all([promise1, promise2])
    .then(function (results) {
    results.forEach(function (item) { return console.log(item); });
});
function getpromise(value) {
    return Promise.resolve(value);
}
function fetchpromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("1 약속입니다. 지켜주세요!");
        }, 800);
    });
}
function fetchpromise2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("2 약속입니다. 지켜주세요!");
        }, 850);
    });
}
function returnpromise() {
    return __awaiter(this, void 0, void 0, function () {
        var promise4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getpromise("하이")];
                case 1:
                    promise4 = _a.sent();
                    console.log(promise4);
                    console.log(typeof promise4);
                    return [2 /*return*/];
            }
        });
    });
}
fetchpromise();
fetchpromise2();
returnpromise();
