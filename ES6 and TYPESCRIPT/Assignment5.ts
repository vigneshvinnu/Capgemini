function add(a,b)
{
    a=a+b;
    return a;
}
console.log(add(3,2))


function userFriends(username,...users)
{
   console.log(username,...users);
}
let arr=['Mahesh','Balu','Santhosh']
userFriends("Vignesh",arr)


function printCapitalNames(...name)
{
    const uppercased = name.map(name => name.toUpperCase());
    console.log(uppercased);
}
let aray=['Vignesh','Mahesh','Balu','Santhosh','elon']
printCapitalNames(...aray);
