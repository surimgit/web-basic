/*
    매개변수 기본값 : 
    - 해출시 매개변수를 전달하지 않으면 사용할 기본값을 지정할 수 있 음
*/
const add = (a = 5, b = 10) => a + b;
console.log(add());
console.log(add(b = 50));

console.log('========================================');

/*
    rest 매개변수 : 
    - 함수 선언시 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받은 매개변수의 배열을 전달 받음
    - 
*/
const restFunc = (...arg) => console.log(arg);
restFunc(1, 2, 3, 4, 5, 6);

const restFunc2 = (arg1, ...arg) => {
    console.log(arg1);
    console.log(arg2);
}

console.log('========================================');

/*
    spread 연산자 : 
    - ...을 사용하여 피연산자의 대상의 요소를 하나씩 분리
    - 피연산자는 반드시 반복가능 객체(배열, 객체, ...) 이어야 함
*/
const numbers = [1,29,33,44,5];
console.log(numbers);
console.log(...numbers);
console.log(1, 2, 3, 4, 5);

// 배열 복사에 사용
let newNumbers = [...numbers];
console.log(newNumbers);

newNumbers[0] = 99;
console.log(numbers);
console.log(newNumbers);

// 배열 연결에 사용
const numbers2 = [6, 7, 8];
newNumbers = [1,29, 33, 44, 5, 6, 7, 8];
newNumbers = [...numbers, ...numbers2]
console.log(newNumbers);
newNumbers = [...numbers2, ...numbers]
console.log(newNumbers);

// 배열 요소 추가
newNumbers = [...numbers, 100, 200, 300];
console.log(newNumbers);

// 객체 복사, 연결, 요소 추가에 사용
const king = {
    name: '이방원',
    ho: '태종',
};

let newKing = { ...king };
console.log(newKing);

const KingInfo = {
    ho: '의안대군',
    address: '고려'
};

newKing = {...king, ...KingInfo};
console.log(newKing);

newKing = {...king, ho: '의안대군'};
console.log(newKing);

console.log('========================================');                                                                    