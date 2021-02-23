function isEven(num)
{
return(num%2 == 0);
}
function find(array,isEven)
{
let Newarray=[]
for(var i=0;i<array.length;i++)
{
if(isEven(array[i])==true)
{
Newarray.push(array[i]);
}
}
return Newarray[0];
}
console.log(find([1,3,5,4,2],isEven));
console.log(isEven(3));
console.log(isEven(4));