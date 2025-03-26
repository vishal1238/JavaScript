
// // console.log('Hello World')
// // // How to declare Variable
// // // var
// // // let
// // // const
// // {
// //     var a = 10;
// //     console.log(a)

// const { compile } = require("tailwindcss")

// // }
// // {
// //     let b = 11;
// // }
// // console.log(b)

// // var x;
// // let y;
// // // in const we have to assing some value otherwise its give error
// // // const z
// // console.log(x)
// // console.log(y)
// // // console.log(z)


// // // redeclare is only possible in var keyword
// // var ab=10;
// // var ab=20;

// // // other redeclare is not possible
// // let b=10;
// // let b=20;

// // const c=10;
// // const c=20;

// // // reassigment

// // var ab=10
// // ab=20

// // let bc=10
// // bc=20

// // // reassigment is not possible in const
// // const cd=10
// // cd=20

// // var x = 10
// // var y = ++x
// // var z = x++ 
// // console.log(x)
// // console.log(y)
// // console.log(z)

// // // to know the data type
// // var ab = '100'
// // console.log(typeof(ab))

// // operators
// var x = 10
// var y = 20

// console.log("Addition",(x+y) , "\n", "Subtraction",(x-y))
// console.log(`Addition: ${x+y} \n Subtraction: ${x-y}`)
// console.log("Subtraction",x-y)
// console.log("Multiplication",x*y)
// console.log("Division",x/y)
// console.log("Modulus",x%y)
// console.log("Expo",x**y)

// // Assigement operator
// var x=10

// console.log("+= 5:", x+=5)
// console.log("-= 3:", x+=3)
// console.log("*= 2:", x+=2)
// console.log("/= 4:", x+=4)
// console.log("%= 5:", x+=5)

// var prompt=require('prompt-sync')()
// var a=parseInt(prompt("enter a number: "))
// console.log(a)
// var b=parseInt(prompt("enter a number: "))
// console.log(b)
// console.log("the sum of a + b is: " ,a+b)



// function sum(a,b){
//     return a+b
// }
// console.log(sum(4,5));

// function fact(num){
//     if(num==0 || num==1){
//         return 1
//     }
//     else{
//         return num*fact(num-1)
//     }
// }
// console.log(fact(5))


// var obj = {name:"vishal",
//     age:30,
//     city:"patiala",
//     marks: 100,
//     // display:function(){
//     //     document.write("print")
//     // }
//     obj.display = function(){
//         return "display"
//     }
// }

// console.log(obj.name+"<br>")
// console.log(obj.display()+"<br>")
// for(i in obj){
//     console.log(i + ": " + obj[i]);
// }

// var obj = abc1()

// function abc1(name,city){
//     this.name=name
//     this.city=city
// }
// var obj2 = new abc1("Arwin","Patiala")
// console.log(obj2.name)
// console.log(obj2.city)


// Array

// var arr=[10,4,3,5,3]
// arr[100] = 45
// console.log(arr)

// var arr1 = new Array()
// arr1[0] = 10
// arr1[2] = 30
// console.log(arr1)


// var arr = [10, 4, 6, 2, 6, 9, 34, 3, 5, 19];  
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) { 
//     if (max < arr[i]) {  
//         max = arr[i];  
//     }  
// }  
// console.log("max element of array is : ", max);  


// let a = 0;
// for(let i = 10; i <=100; i++){
//     if(i%7==0){
//         a=i;
//         break;
//     }
// }
// console.log(a);

// for(let i=1; i<=20; i++){
//     if(i%3==0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }
// //print the stars
// for(let i=0; i<=5; i++){
//     row=""
//     for(j=0; j <i;j++){
//         row+="*"
//     }
//     console.log(row)
// }

//write a function that calculates the function of given number 
// let a = 1;
// for(let i = 1; i <=5; i++){
//     a=a*i;
// }
// console.log(a);

//write a program to count the number of vowels in string
let vowelCount = 0;   
let s = "wdhgsjhdgudoasjkbdwweouiewyb";  

for (let i = 0; i < s.length; i++) { 
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
        vowelCount++;  
    }  
}  

console.log(vowelCount);  



//by using function

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
    
//     return count;
// }

// // Example usage:
// let input = "Hello World!";
// console.log("Number of vowels:", countVowels(input));

 
    