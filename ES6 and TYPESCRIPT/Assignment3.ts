let id=1;
let title="T-shirt";
let price=1000;


var Order=
{
  id:id,
  title:title,
  price:price
};


const new_obj = Object.assign({}, Order);
console.log(new_obj);
function printOrder()
{
console.log(Order);
}
printOrder()

function getprice()
{
  console.log(Order.price);
}
getprice();