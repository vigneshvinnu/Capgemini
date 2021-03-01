var student = ['Vignesh', '20', 'Male', 'Single', 'Cse'];
var nickname = student[0], age = student[1], gender = student[2], martial_status = student[3], course = student[4];
console.log(gender);
var nameOforganization = "VigneshCompany";
var Address = "illa street,draksharama,East godavari,533262";
var organization = {
    name: nameOforganization,
    Address: Address
};
/*const new_obj1= Object.assign({}, organization);
console.log(new_obj1);
*/
function getPincode() {
    var f = organization.Address;
    var res = /[0-9]/g;
    var match1 = f.match(res);
    console.log(match1);
}
getPincode();
//# sourceMappingURL=Assignment7.js.map