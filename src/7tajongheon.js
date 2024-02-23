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
var SevenTa = /** @class */ (function () {
    function SevenTa() {
        this.studentList = [];
        this.testList = [];
        this.testCnt = 10;
        this.level = 7;
        this.exit = false;
    }
    SevenTa.prototype.enterStudents = function (name, concentration, time, sumTime) {
        this.studentList.push({ name: name, concentration: concentration, time: time, sumTime: sumTime });
    };
    SevenTa.prototype.practiceTest = function () {
        for (var i = 0; i < this.studentList.length; i++) {
            for (var j = 0; j < 30; j++) {
                this.studentList[i].sumTime += this.studentList[i].time;
            }
        }
    };
    SevenTa.prototype.upgrade = function (name) {
        var idx = this.studentList.findIndex(function (student) { return student.name === name; });
        this.studentList[idx].concentration += 5;
    };
    SevenTa.prototype.evaluation = function () {
        var sum = 0;
        var success = 0;
        for (var i = 0; i < this.testList.length; i++) {
            sum += this.testList[i].record;
        }
        var mean = sum / this.testList.length;
        for (var i = 0; i < this.testList.length; i++) {
            if (this.testList[i].record >= mean + 30) {
                success += 1;
                this.upgrade(this.testList[i].name);
            }
        }
        mean = 0;
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
            }
            else {
                console.log("고생했다.");
                console.log("나는 이제 ", this.level, "타강사다.");
                return;
            }
        }
    };
    SevenTa.prototype.examTest = function () {
        for (var i = 0; i < this.studentList.length; i++) {
            var name_1 = this.studentList[i].name;
            var record = this.studentList[i].sumTime + this.studentList[i].concentration;
            this.testList.push({ name: name_1, record: record });
            this.studentList[i].sumTime = 0;
        }
    };
    return SevenTa;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var teacher, i;
        return __generator(this, function (_a) {
            teacher = new SevenTa();
            console.log("시작하자.");
            teacher.enterStudents("에이", 10, 6, 0);
            teacher.enterStudents("비", 15, 4, 0);
            teacher.enterStudents("씨", 14, 7, 0);
            teacher.enterStudents("디", 17, 4, 0);
            teacher.enterStudents("에프", 20, 5, 0);
            teacher.enterStudents("이", 21, 7, 0);
            teacher.enterStudents("쥐", 15, 7, 0);
            teacher.enterStudents("에이치", 12, 4, 0);
            teacher.enterStudents("아이", 18, 7, 0);
            teacher.enterStudents("제이", 19, 8, 0);
            teacher.enterStudents("케이", 11, 5, 0);
            for (i = 0; i < 10; i++) {
                teacher.practiceTest();
                teacher.examTest();
                teacher.evaluation();
            }
            console.log('1타강사가 되었다. 난 이제 일 안해 수고~!');
            return [2 /*return*/];
        });
    });
}
main().then(function () {
    process.exit(0);
});
