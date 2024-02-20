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
var FashionCompany = /** @class */ (function () {
    function FashionCompany() {
        this.Survey = [];
        this.products = [];
        this.sales = [];
        this.profit = 0;
        this.productionCost = 0;
    }
    FashionCompany.prototype.designProduct = function (cost) {
        this.productionCost += cost;
    };
    FashionCompany.prototype.addSurvey = function (data, demand) {
        this.productionCost += 1;
        this.Survey.push({ data: data, demand: demand });
    };
    FashionCompany.prototype.produceProduct = function (name, quantity, salesCost) {
        if (quantity >= 1000) {
            salesCost = Math.floor((this.productionCost + 120) * 1.1);
        }
        else {
            salesCost = Math.floor((this.productionCost + 100) * 1.1);
        }
        this.products.push({ name: name, salesCost: salesCost, quantity: quantity });
    };
    FashionCompany.prototype.getRandomSales = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    FashionCompany.prototype.sellProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productName, quantity, _a, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.askHowmany("무슨 상품을 사실건가요? ")];
                    case 1:
                        productName = _b.sent();
                        _a = parseInt;
                        return [4 /*yield*/, this.askHowmany("얼마나 사실건가요? ")];
                    case 2:
                        quantity = _a.apply(void 0, [_b.sent()]);
                        product = this.products.find(function (product) { return product.name === productName; });
                        if (productName === "BYE") {
                            rl.close();
                            return [2 /*return*/];
                        }
                        if (!product) return [3 /*break*/, 6];
                        if (!(product.quantity >= quantity)) return [3 /*break*/, 3];
                        this.sales.push({ productName: productName, quantity: quantity });
                        this.profit = quantity * product.salesCost;
                        product.quantity -= quantity;
                        rl.close();
                        return [2 /*return*/];
                    case 3:
                        console.log("죄송합니다. 재고가 부족합니다.");
                        return [4 /*yield*/, this.sellProduct()];
                    case 4:
                        _b.sent(); //재귀를 통해 다시 물어보기
                        _b.label = 5;
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        console.log("제품 이름을 다시 입력하세요");
                        return [4 /*yield*/, this.sellProduct()];
                    case 7:
                        _b.sent(); //재귀를 통해 다시 물어보기
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    FashionCompany.prototype.askHowmany = function (query) {
        return new Promise(function (resolve) {
            rl.question(query, function (answer) {
                resolve(answer);
            });
        });
    };
    FashionCompany.prototype.calculateProfit = function () {
        return this.profit;
    };
    FashionCompany.prototype.findProductQuantity = function (surveyData) {
        var result = this.Survey.find(function (survey) { return survey.data === surveyData; });
        if (result) {
            return result.demand; //demand가 만약 숫자가 아니라면 아래 함수에서 매개변수를 입력할 수 없더라.
        }
        else {
            return 0;
        }
    };
    FashionCompany.prototype.getProductLength = function () {
        return this.products.length;
    };
    FashionCompany.prototype.showProduct = function () {
        var productlength = this.getProductLength();
        for (var i = 0; i < productlength; i++) {
            console.log("상품 이름 : ", this.products[i].name);
            console.log("판매가 : ", this.products[i].salesCost);
        }
    };
    FashionCompany.prototype.getStatus = function () {
        console.log("수요 조사 정보", this.Survey);
        console.log("제품 정보:", this.products);
        console.log("판매 정보:", this.sales);
        console.log("이익금:", this.profit);
    };
    return FashionCompany;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//비동기적으로 처리하고 있는 sellProduct메서드를 전혀 고려하지 않은 코드
// const myFashionCompany = new FashionCompany();
// myFashionCompany.addSurvey("2024 SS", 300);
// myFashionCompany.designProduct(15);
// const quantity = myFashionCompany.findProductQuantity("2024 SS");
// myFashionCompany.produceProduct("HSLT", quantity, 0);
// myFashionCompany.showProduct();
// myFashionCompany.sellProduct();
// myFashionCompany.getStatus();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var myFashionCompany, quantity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    myFashionCompany = new FashionCompany();
                    myFashionCompany.addSurvey("2024 SS", 300);
                    myFashionCompany.designProduct(15);
                    quantity = myFashionCompany.findProductQuantity("2024 SS");
                    myFashionCompany.produceProduct("HSLT", quantity, 0);
                    myFashionCompany.showProduct();
                    return [4 /*yield*/, myFashionCompany.sellProduct()];
                case 1:
                    _a.sent(); // 비동기 처리 대기
                    myFashionCompany.showProduct();
                    myFashionCompany.getStatus();
                    return [2 /*return*/];
            }
        });
    });
}
main().then(function () {
    process.exit(0); //프로그램 종료
});
