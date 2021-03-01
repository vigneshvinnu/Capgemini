var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function add(a, b) {
    a = a + b;
    return a;
}
console.log(add(3, 2));
function userFriends(username) {
    var users = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        users[_i - 1] = arguments[_i];
    }
    console.log.apply(console, __spreadArray([username], users));
}
var arr = ['Mahesh', 'Balu', 'Santhosh'];
userFriends("Vignesh", arr);
function printCapitalNames() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    var uppercased = name.map(function (name) { return name.toUpperCase(); });
    console.log(uppercased);
}
var aray = ['Vignesh', 'Mahesh', 'Balu', 'Santhosh', 'elon'];
printCapitalNames.apply(void 0, aray);
//# sourceMappingURL=Assignment5.js.map