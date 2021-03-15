var p = new Promise(function (resolve, reject) {
    var a = parseInt(prompt('Enter the value of a '));
    resolve(a);
});
var q = new Promise(function (resolve, reject) {
    var b = parseInt(prompt('Enter the value of b '));
    resolve(b);
});
Promise.all([
    [p, q]
]).then(function (values) {
    console.log("Value:" + values);
    console.log("Sum:" + (values[0] + values[1]));
}).then(function (messages) {
    console.log(messages);
});
