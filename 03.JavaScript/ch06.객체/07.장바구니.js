// Product 클래스 정의할 것(속성 : 이름, 가격, toString메쏘드)
// 5가지의 상품을 만들 것(instance)
// Cart 클래스를 정의할 것(속성 : 상품, 수량, 메쏘드 : add(), sum())
// Cart 의 총 가격을 구하세요.

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `${this.name}은 ${this.price}원 입니다. `;
    }
}
// const cart = new Product();
const bag = new Product('가방', 10000);
const shoes = new Product('신발', 15000);
const pants = new Product('바지', 5000);
const cap = new Product('모자', 20000);
const ring = new Product('반지', 30000);
console.log(bag, shoes, pants, cap, ring);
// console.log(shoes);
// console.log(pants);
// console.log(cap);
// console.log(ring);

class Cart extends Product {
    constructor (name, price, count, sum) {
        super (name, price);
        this.count = count;
        this.sum = sum;
    }
    add() {
        return super.toString() + `갯수는 ${this.count}개이며, 가격은 ${this.count*this.price} 입니다.`;
    }
    sum() {
        return `총 가격은 ${this.sum}입니다.`;
    }
}
const cart = new Cart('가방', 10000, 3, 30000);
console.log(cart.add());







// class Cart extends Product {
//     constructor ()
// }
// console.log(Product);