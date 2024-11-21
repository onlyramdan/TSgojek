"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FoodServiceImpl = /** @class */ (function () {
    function FoodServiceImpl() {
    }
    FoodServiceImpl.prototype.calculatePrice = function (from, to, totalPriceMenu) {
        var price = (from.length + to.length) * 1000;
        return price + totalPriceMenu;
    };
    return FoodServiceImpl;
}());
exports.default = FoodServiceImpl;
