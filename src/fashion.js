"use strict";
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
        quantity = quantity * 1.1;
        if (quantity >= 1000) {
            salesCost = (this.productionCost + 120);
        }
        else {
            salesCost = (this.productionCost + 100);
        }
        this.products.push({ name: name, salesCost: salesCost });
    };
    FashionCompany.prototype.sellProduct = function (productName, quantity) {
        var product = this.products.find(function (product) { return product.name === productName; });
        if (product) {
            this.sales.push({ productName: productName, quantity: quantity });
            this.profit = quantity * product.salesCost;
        }
    };
    FashionCompany.prototype.calculateProfit = function () {
        return this.profit;
    };
    FashionCompany.prototype.findProductQuantity = function (surveyData) {
        var result = this.Survey.find(function (survey) { return survey.data === surveyData; });
        if (result) {
            return result.demand;
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
var myFashionCompany = new FashionCompany();
myFashionCompany.addSurvey("2024 SS", 300);
myFashionCompany.designProduct(15);
var quantity = myFashionCompany.findProductQuantity("2024 SS");
myFashionCompany.produceProduct("HSLT", quantity, 0);
myFashionCompany.showProduct();
myFashionCompany.sellProduct("HSLT", Math.floor(quantity * 0.81));
myFashionCompany.getStatus();
