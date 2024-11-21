"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RideServiceImpl = /** @class */ (function () {
    function RideServiceImpl() {
    }
    RideServiceImpl.prototype.calculatepRrice = function (from, to) {
        var price = (from.length + to.length) * 1000;
        return price;
    };
    return RideServiceImpl;
}());
exports.default = RideServiceImpl;
