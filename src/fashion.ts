// class FashionCompany {
//     private Survey: { data: string; demand: number; }[];
//     private products: { name: string; salesCost: number; }[];
//     private sales: { productName: string; quantity: number; }[];
//     private profit: number;
//     private productionCost: number;

//     constructor() {
//         this.Survey = [];
//         this.products = [];
//         this.sales = [];
//         this.profit = 0;
//         this.productionCost = 0;

//     }

//     designProduct(cost: number): void {
//         this.productionCost += cost;
//     }

//     addSurvey(data: string, demand: number): void {
//         this.productionCost += 1;
//         this.Survey.push({ data, demand });
//     }

//     produceProduct(name: string, quantity: number, salesCost: number): void {
//         quantity = quantity * 1.1;
//         if (quantity >= 1000) {
//             salesCost = (this.productionCost + 120) * 1.1;
//         } else {
//             salesCost = (this.productionCost + 100) * 1.1;
//         }
//         this.products.push({ name, salesCost })
//     }

//     sellProduct(productName: string, quantity: number): void {
//         const product = this.products.find((product: { name: string; salesCost: number; }) => product.name === productName);
//         if (product) {
//             this.sales.push({ productName, quantity });
//             this.profit = quantity * product.salesCost;
//         }
//     }

//     calculateProfit(): number {
//         return this.profit;
//     }
//     findProductQuantity(surveyData: string): number {
//         const result = this.Survey.find((survey: { data: string, demand: number }) => survey.data === surveyData);
//         if (result) {
//             return result.demand;//demand가 만약 숫자가 아니라면 아래 함수에서 매개변수를 입력할 수 없더라.
//         }else{
//             return 0;
//         }
//     }
//     getProductLength(): number {
//         return this.products.length;
//     }
//     showProduct(): void {
//         const productlength: number = this.getProductLength();
//         for (let i = 0; i < productlength; i++) {
//             console.log("상품 이름 : ", this.products[i].name);
//             console.log("판매가 : ", this.products[i].salesCost)
//         }
//     }
//     getStatus(): void {
//         console.log("수요 조사 정보", this.Survey);
//         console.log("제품 정보:", this.products);
//         console.log("판매 정보:", this.sales);
//         console.log("이익금:", this.profit);
//     }
// }

// const myFashionCompany = new FashionCompany();
// myFashionCompany.addSurvey("2024 SS", 300);
// myFashionCompany.designProduct(15);
// const quantity = myFashionCompany.findProductQuantity("2024 SS");
// myFashionCompany.produceProduct("HSLT", quantity, 0);
// myFashionCompany.showProduct();
// myFashionCompany.sellProduct("HSLT", Math.floor(quantity * 0.81));
// myFashionCompany.getStatus();
