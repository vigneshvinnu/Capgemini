var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, name, balance1) {
        this.id = id;
        this.name = name;
        this.balance1 = balance1;
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(id, balance1, name) {
        var _this = _super.call(this, id, name, balance1) || this;
        _this.showBalance = function () {
            var b = _this.getInterest() + _this.getCash_credit();
            console.log("---------");
            console.log('the balance in your savings account is: ' + b);
        };
        _this.id = id;
        _this.name = name;
        _this.balance1 = balance1;
        return _this;
    }
    SavingsAccount.prototype.getInterest = function () {
        var balance2 = this.balance1 * 0.2;
        console.log("Interest for Savings account", balance2);
        return balance2;
    };
    SavingsAccount.prototype.getCash_credit = function () {
        var balance3 = this.balance1 * 0.1 + this.balance1;
        if (this.balance1 == 0) {
            var balance3_1 = 1000 + this.balance1;
            console.log("Interest for Savings account", balance3_1);
            return balance3_1;
        }
        else
            
            console.log("Balance for Savings account", balance3);
        
        return balance3;
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(id, balance1, name) {
        var _this = _super.call(this, id, name, balance1) || this;
        _this.showBalance = function () {
            var b = _this.getInterest() + _this.getCash_credit();
            console.log("---------");
            console.log('the balance in your current account is: ' + b);
        };
        _this.id = id;
        _this.name = name;
        _this.balance1 = balance1;
        return _this;
    }
    CurrentAccount.prototype.getInterest = function () {
        var balance2 = this.balance1 * 0.1;
        console.log("Interest for Current account", balance2);
        return balance2;
    };
    CurrentAccount.prototype.getCash_credit = function () {
        var balance3 = this.balance1 * 0.1 + this.balance1;
        if (this.balance1 == 0) {
            var balance3_2 = 2000 + this.balance1;
            console.log("cash credit for current account", balance3_2);
            return balance3_2;
        }
        else
            
            console.log("Balance for current account", balance3);
        
        return balance3;
    };
    return CurrentAccount;
}(SavingsAccount));
var e = new CurrentAccount(1, 100, "Vinnu");
e.getInterest();
e.getCash_credit();
e.showBalance();
var n = new SavingsAccount(2, 200, "vinnu");
n.getInterest();
n.getCash_credit();
n.showBalance();
