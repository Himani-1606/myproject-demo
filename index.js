/* console.log("Hello world!")

var name = "Himani";
console.log(name);

if (true) {
    var age = 25;
    let city ="new york";


console.log(age);
console.log(city);
console.log("Himani");
let name = "Aman";
console.log(typeof name)
let age=25;
console.log(typeof age)
let boolean = true;
console.log(typeof boolean)
let address = null;
console.log(typeof address)
let city;
console.log(typeof city)
let bignumber=12356459753890687596775547436n; 
console.log(typeof bignumber)
*/
/*
//operators
let a = 8;
let b =4;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

 
//assignment operator
let x = 34;
x = x+34
console.log(x)

 x -= 56
 console.log(x)
 x *= 6
console.log(x)
x /= 3
console.log(x)
x %=5
console.log(x)
// comparison operator
console.log(5 == "4");    
console.log(5 === "5");   
console.log(5 != 3);      
console.log(5 !== "5");   
console.log(5 > 2);       
console.log(5 < 4);       
console.log(5 >= 5);     
console.log(5 <= 3);      

//Logical Operator
console.log((2<3)&& (3>4));   
console.log((3<5) || (5>3));   
console.log(!(5>=5));   
*/
/*       

let chiji = "kurkure";
if( chiji == "lays"){
    console.log(" le ana ")
}
else{
    console.log(" vapas aa jana")
}
let marks = 67
switch(marks){
    case 33:
        console.log('you safe')
       break;
case (marks > 90):
    console.log('you have scored A')
        default :
     console.log('not checked yet')
      break;

}
let number = 0;
while (number <= 10) {
    console.log(number)
        number++
}
do {
    console.log(number)
    number++
} while(number<=10);
 

for (initilization ; comparison ; incre/decre){

    logic
}
    
   
   for (let i=1; i<=10;i++){
    console.log(i)
    
   } */
/*
   //simple table of 13
   for (let i = 1; i <= 10; i++) {
  console.log("13 * " + i + " = " + (13 * i));
}

//Print Even and Odd Numbers (1 to 10)
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is Even");
  } else {
    console.log(i + " is Odd");
  }
}
//Numbers divisible by both 2 and 3 (1 to 100)

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i);
  }
}

//Factorial of a Number

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log("Factorial of", number, "is", factorial);
*/
/*

//print day name using switch statement
let day = 6;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}

//for( let i =10; i>0; i--){

console.log(i)
//}

/*
const fruits = [ 'apples', 'banana', 'orange']
for ( let i=0; i<fruits.length; i++){
  console.log[i]
}
*/
/*

for(let i = 1; i<=3; i++){
let str = ''
for(let j=1; j>=3;j--){
  str += ' '
}
  for(let j=1; j<=i; j++){
          str += ' 123 '
  }
  console.log(str)
}

/*
for (let i=1; i<=5;i++){
  let str =''
  for(let j = 1; j<=3; j++){
    if(i=1 || j==3){
      str += '*'
    }
  }
  console.log(str);
}
*/
/*
//print day name using switch statement
let day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}
*/
/*
let marks = 78;
if(marks >= 90) {
  console.log("grade A+");
}
else if(marks >=80){
  console.log("Grade A");
}
else if(marks >=70){
  console.log("Grade B");
}
else if(marks >=60){
  console.log("Grade C");
}
else if(marks >=50){
  console.log("Grade D");
}
else {
  console.log("Grade F");
}
  */
 /*
 
 for(let i = 1; i<=3; i++){
  let str = ""
  for( let j = 1; j<=3; j++){
    str+=j;
  }
  console.log(str)
 }
  
 
 for(let i = 1; i<=4; i++){
  let str = " "
  for(let j=1; j<=i; j++){
    str +=j; 
  }
console.log(str)
 }

 //print stars
 for(let i = 1; i<=3; i++){
  let str = ""
  for(let j=3; j>=i; j--){
    str += "*"; 
  }
console.log(str)
 }
*/
/*
// print a hollow square of 5
 for (let i = 0; i < 5; i++) {
  let str = "";

  for (let j = 0; j < 5; j++) {
   if (i == 0 || i == 5 - 1 || j == 0 || j == 5 - 1) {
      str += "*";
    } else {
      str += " "; 
    }
  }

  console.log(str);

  
function sum( name ="aman "){
 
  console.log('hello', name)

}
sum('ram')
 function addition(a,b,c=10){
  console.log(a+b+c)
 }
 addition(5,5)
 
 
//expressional function
const additionofTwoNum = function sum(a,b){
  return a+b
}
console.log(additionofTwoNum(3,5))
*/
//diff bt return and console
/*
function hi(name){
  console.log("Hi",name);

}
hi("Himani");

let number = 6
number*number
**
25**0.5 == 5
number**.5

const sqrt = function my(n){
  let a = n**0.5;
  console.log(a)
}
sqrt(144)


function checkyourgrade(marks){
if(marks==100){
  console.log("grade O");
}
else if(marks>90 && marks<100){
console.log("grade A");
}
else if(marks>80 && marks<90){
console.log("grade B");
}
else if(marks>70 && marks<80){
console.log("grade C");
}
else if(marks>60 && marks<70){
console.log("grade D");
}
else if(marks>50 && marks<60){
console.log("grade E");
}

}
let marks = 78;
checkyourgrade(marks)

/*

let arr = [1,2,3,4,5]

console.log(arr[4])


function sayhello(name,CBfunction){
  console.log(name)
  CBfunction()
}
function greet(){
  console.log('hello')
} sayhello('aman',greet)
 
let arr = [1,2,3,4,5]
//arr.push(5)
let sum = 0
arr.forEach((item)=>{
  sum+=item
  console.log(item)
})

console.log(sum)


function print(a){
  for(let i = 1; i<=10; i++){
    console.log(a,"*",i, "=",a*i);
  }
}
print(12);


// print even or odd number using arrow function
const num = (n)=>{
  if(n%2==0){
    console.log("Even number")
  }
  else{
    console.log("odd number")
  }
}
num(65)
num(124)


//total the array
let arr=[1,2,4,2,6,4,2,6,8,9,5,2,4,6]
let sum = 0
arr.forEach((item)=>{
sum += item
console.log(sum)
}
)


// highest value of the array
let arr=[1,2,4,2,6,4,2,6,8,9,5,2,4,6]
const gethighestvalue=(arr)=>{
  let max = arr[0];
  for(let i = 0; i <= arr.length; i++)
    if(max<arr[i]){
      max = arr[i]
    }
    console.log(max)
}
gethighestvalue(arr)


// total of array
 let arr = [4,6,4,2,22,3,4]
let sum = 0;
arr.forEach((item)=>{
  sum += item;
})
console.log(sum)


for( let i = 1; i<=3; i++){
  let str = ""

for(let j = 1; j<=i; j++){
    str += '  '
  }

  for(let j = 3; j>=i; j++){
    str+=' + '
  }
  console.log(str)
}
  
 const evenNum = arr.filter((item)=>{

  return item % 2 === 0 ;
 });
const evenNum2 = arr.filter((item)=>
   item % 2 === 0 );

console.log(evenNum)
console.log(evenNum2)

const obj = [
  {name:'abc',age:17},
  {name:'def',age:56},
  {name:'ghi',age:25},
  {name:'jkl',age:18},

]
const userabove18 = obj.filter(user=> user.age>18);
console.log(userabove18)


let arr = [1,2,3,4,5]
const newarr = arr.slice(1,4)
arr.splice(1,2,6,7)
console.log(arr)
//console.log(arr)

let arr = [1,2,3,4,5]
const newRR = arr.map((item)=>{
 return item **2
}).filter((item)=>{
  return item>9
})
console.log(newRR)


// print age  and name in uppercase
const obj = [
  { name: 'abc', age: 17 },
  { name: 'def', age: 56 },
  { name: 'ghi', age: 25 },
  { name: 'jkl', age: 18 },
  {name: 'milan', age: 27}
];

const result = obj.filter((user) => user.age >= 20 && user.age <= 30)
  .map((user )=> ({ name: user.name.toUpperCase(),age: user.age}));

console.log(result);


// number divisible by 2,3 and 7
const arr1=[1,2,3,5,43,5,4,2,4,566,6,8,5,3,2,42];
const mydiv = arr1.filter((item)=>{
  return(item%2==0 && item%3==0 && item%7==0);
});
console.log(mydiv);

// use of splice method
let fruits1 = ['apple','carrot', 'orange'];
  fruits1.splice(1,1,'papaya');
  console.log(fruits1)
  

  // print sum , square and even numbers
 let newarray = [2,4,3,7,5,3,9];
 const evenNumbers = newarray.filter((num) => num % 2 == 0);
const squares = newarray.map(num => num * num);
const sum = newarray.reduce((acc, curr) => acc + curr, 0);

console.log("Even Numbers:", evenNumbers);
console.log("Squares:", squares);
console.log("Sum:", sum);

// find out the location of the target using searching
let arr5 = [1,2,3,4,5];
let target = 5;
let index = -1;
for(let i=0; i<arr5.length; i++){
  if(arr5[i] == target){
   index = i;
   break;
  }
  }
    console.log("Index of target:",index);
  */

const him = ['H','I','M','A','N','I'];
console.log(him.reverse());
let arr3 = ['Aa','aA'];
console.log(arr3.sort());


//pow
//random
//round
//FLOOR
//CEIL
//log

