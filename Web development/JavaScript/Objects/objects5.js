function person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let a=new person("vinnu","vignesh");
console.log("FirstName: "+a.firstName);
console.log("LastName: "+a.lastName);
a.lastName="Yaah! Worked";
console.log("LastName: "+a.lastName);

console.log("MiddleName: "+a.middleName);
a.middleName="Vadlamuri";
console.log("MiddleName: "+a.middleName);
// this behavior is not a good thing