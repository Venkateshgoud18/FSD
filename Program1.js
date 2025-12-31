let arr=[1,2,3,45,5];

console.log("The arrays doubled values :");
let a=arr.forEach(n=>console.log(n+n));
console.log(a);
console.log("THe filtered values");
let b=arr.filter(n=>n>20);
console.log(b);

//2 

let arr1=[1,2,3,4,5];
console.log("The sum of values :");
let c=arr1.reduce((acc,n)=>acc+n,0);
console.log(c);

//3

let arr2=[1,2,3,4,5];
console.log("The filter values of arr2(even) :");
let d=arr2.filter(n=>n%2===0);
d.forEach(n=>console.log(n));

//4

let str1="madam"
let str2="sir"

let palindrome=str=>str===str.split('').reverse().join('');
console.log(`Is ${str1} is ${palindrome(str1)}`);
console.log(`Is ${str2} is ${palindrome(str2)}`);

//5

let countVowels=str1=>str1.toLowerCase().split('').filter(c=>'aeiou'.includes(c)).length;
console.log(countVowels(str1));   

//6

let person={
    name:"Venkatesh",
    age:20
}
let {name,age}=person;
console.log("Object destructuring: ");
console.log("Name: "+name);
console.log("Age: "+age);

let numbers=[1,2,3,4,5];
let [fir,sec,...rest]=numbers;
console.log("First number: "+fir);
console.log("Second number: "+sec);
console.log("rest all are: "+rest);

let {name:person1,age:agePerson}=person;
console.log("The name of the person: "+person1);
console.log("The age of the person: "+agePerson);
function display({name,age}){
    console.log(`The name of the person is ${name} and age of the person ${age}`);
}
display(person);

//7
let arr6=[1,2,3,4,5];
let sumOfSqaures=arr=>arr.filter(n=>n%2!=0).map(n=>n*n).reduce((acc,n)=>acc+n,0);
console.log(sumOfSqaures(arr6));

//8
 






















































































































































































































































































































































































































