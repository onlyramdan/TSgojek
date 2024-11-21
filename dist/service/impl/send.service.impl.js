"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SendServiceImpl = /** @class */ (function () {
    function SendServiceImpl() {
    }
    SendServiceImpl.prototype.calculatePrice = function (from, to, wight) {
        var price = (from.length + to.length + wight) * 1000;
        return price;
    };
    return SendServiceImpl;
}());
exports.default = SendServiceImpl;
