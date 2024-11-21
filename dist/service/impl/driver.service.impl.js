"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DriverServiceImpl = /** @class */ (function () {
    function DriverServiceImpl() {
    }
    DriverServiceImpl.prototype.findDriver = function () {
        var driver = this.addDriver();
        var randomIndex = Math.floor(Math.random() * driver.length);
        return driver[randomIndex];
    };
    DriverServiceImpl.prototype.addDriver = function () {
        var drivers = [
            {
                name: 'Budi',
                platNumber: 'A 1234 ABC',
            },
            {
                name: 'Andi',
                platNumber: 'B 5678 DEF',
            },
            {
                name: 'Supri',
                platNumber: 'C 9012 GHI',
            }
        ];
        return drivers;
    };
    return DriverServiceImpl;
}());
exports.default = DriverServiceImpl;
