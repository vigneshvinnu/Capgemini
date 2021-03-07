var a= [1, 2, 3, 4, 5];
var b=[1, 4, 9, 16, 25];
var newArray = [];
var newArray1 = [];
function mapElements(array,square){
   array.slice(0,array.length - 1)
    array.map(square);
}
function mapElements1(array,mathsqrt){
   array.slice(0,array.length - 1)
    array.map(mathsqrt);
}
function square(n){
    n = n*n;
    newArray.push(n);
}
function mathsqrt(n){
    sqrt = n / 2;
        temp = 0;
       while(sqrt != temp){
            temp = sqrt;
            sqrt = ( n/temp + temp) / 2;
        }
        newArray1.push(sqrt);
}
mapElements(a,square);
mapElements1(b,mathsqrt);
console.log(newArray.join(","));
console.log(newArray1.join(","));