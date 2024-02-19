import * as readline from 'readline'; //type node를 설치해야만 사용가능함.


class FashionCompany {
    private Survey: { data: string; demand: number; }[];
    private products: { name: string; salesCost: number; quantity: number; }[];
    private sales: { productName: string; quantity: number; }[];
    private profit: number;
    private productionCost: number;

    constructor() {
        this.Survey = [];
        this.products = [];
        this.sales = [];
        this.profit = 0;
        this.productionCost = 0;

    }

    designProduct(cost: number): void {
        this.productionCost += cost;
    }

    addSurvey(data: string, demand: number): void {
        this.productionCost += 1;
        this.Survey.push({ data, demand });
    }

    produceProduct(name: string, quantity: number, salesCost: number): void {
        if (quantity >= 1000) {
            salesCost = Math.floor((this.productionCost + 120) * 1.1);
        } else {
            salesCost = Math.floor((this.productionCost + 100) * 1.1);
        }
        this.products.push({ name, salesCost, quantity })
    }

    getRandomSales(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    async sellProduct(): Promise<void> {
        const productName=await this.askHowmany("무슨 상품을 사실건가요? ");
        const quantity = parseInt(await this.askHowmany("얼마나 사실건가요? "));
        const product = this.products.find((product: { name: string; salesCost: number; }) => product.name === productName);
        if(productName ==="BYE"){
            rl.close()
            return;
        }

        if (product) {
            if (product.quantity >= quantity) {
                this.sales.push({ productName, quantity });
                this.profit = quantity * product.salesCost;
                product.quantity -= quantity;
                rl.close()
                return;
            } else {
                console.log("죄송합니다. 재고가 부족합니다.");
                await this.sellProduct(); //재귀를 통해 다시 물어보기
            }
        } else {
            console.log("제품 이름을 다시 입력하세요");
            await this.sellProduct(); //재귀를 통해 다시 물어보기

        }
    }
    askHowmany(query: string): Promise<string> {
        return new Promise((resolve) => {
            rl.question(query, (answer) => {
                resolve(answer);
            })
        })
    }
    
    calculateProfit(): number {
        return this.profit;
    }
    findProductQuantity(surveyData: string): number {
        const result = this.Survey.find((survey: { data: string, demand: number }) => survey.data === surveyData);
        if (result) {
            return result.demand;//demand가 만약 숫자가 아니라면 아래 함수에서 매개변수를 입력할 수 없더라.
        } else {
            return 0;
        }
    }
    getProductLength(): number {
        return this.products.length;
    }

    showProduct(): void {
        const productlength: number = this.getProductLength();
        for (let i = 0; i < productlength; i++) {
            console.log("상품 이름 : ", this.products[i].name);
            console.log("판매가 : ", this.products[i].salesCost)
        }
    }
    getStatus(): void {
        console.log("수요 조사 정보", this.Survey);
        console.log("제품 정보:", this.products);
        console.log("판매 정보:", this.sales);
        console.log("이익금:", this.profit);
    }
}

const rl = readline.createInterface({
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

async function main(){
    const myFashionCompany = new FashionCompany();
    myFashionCompany.addSurvey("2024 SS", 300);
    myFashionCompany.designProduct(15);
    const quantity = myFashionCompany.findProductQuantity("2024 SS");
    myFashionCompany.produceProduct("HSLT", quantity, 0);
    myFashionCompany.showProduct();
    await myFashionCompany.sellProduct(); // 비동기 처리 대기
    myFashionCompany.showProduct();
    myFashionCompany.getStatus();
}
main().then(()=>{
    process.exit(0);//프로그램 종료
});