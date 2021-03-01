let student=['Vignesh','20','Male','Single','Cse']

let [nickname,age,gender,martial_status,course]=student;

console.log(gender);



let nameOforganization="VigneshCompany";
let Address="illa street,draksharama,East godavari,533262";
var organization=
{

    name:nameOforganization,
    Address:Address 

};

/*const new_obj1= Object.assign({}, organization);
console.log(new_obj1);
*/

function getPincode()
{
    let f=organization.Address;
    let res=/[0-9]/g;
    let match1=f.match(res);
    console.log(match1);
}
getPincode();
