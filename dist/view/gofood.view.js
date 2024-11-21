"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var generatorInvoice_1 = require("../util/generatorInvoice");
var scanner_1 = require("../util/scanner");
var FoodView = /** @class */ (function () {
    function FoodView(mainView, restaurantService, foodService, driverService, historyList) {
        this.mainView = mainView;
        this.restaurantService = restaurantService;
        this.foodService = foodService;
        this.driverService = driverService;
        this.historyList = historyList;
        this.cartList = [];
    }
    FoodView.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var restoranList, option, _a, selectedRestaurant;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('=============================');
                        console.log('Food');
                        console.log('=============================');
                        console.log("[List Restorant]");
                        return [4 /*yield*/, this.restaurantService.findRestaurant()];
                    case 1:
                        restoranList = _b.sent();
                        restoranList.forEach(function (restaurant, i) {
                            console.log("".concat(i + 1, ". ").concat(restaurant.restaurantName));
                        });
                        _a = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)('Pilih Restaurant: ', 1, restoranList.length)];
                    case 2:
                        option = _a.apply(void 0, [_b.sent()]);
                        selectedRestaurant = restoranList[option - 1];
                        this.chooseMenu(selectedRestaurant);
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodView.prototype.chooseMenu = function (selectedRestaurant) {
        return __awaiter(this, void 0, void 0, function () {
            var optionMenu, _a, selectedMenu, quantity, _b, existingItemIndex;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (selectedRestaurant) {
                            console.log("\nAnda memilih: ".concat(selectedRestaurant.restaurantName));
                            console.log("[List Menu]");
                            selectedRestaurant.menu.forEach(function (item, index) {
                                console.log("".concat(index + 1, ". ").concat(item.name, " - Rp ").concat(item.price.toLocaleString()));
                            });
                        }
                        else {
                            console.log("Restoran tidak ditemukan.");
                        }
                        _a = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)('Pilih Menu: ', 1, selectedRestaurant.menu.length)];
                    case 1:
                        optionMenu = _a.apply(void 0, [_c.sent()]);
                        selectedMenu = selectedRestaurant.menu[optionMenu - 1];
                        console.log("\nAnda memilih: ".concat(selectedMenu.name, " - Rp ").concat(selectedMenu.price));
                        _b = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)('Masukkan Jumlah: ', 1, Infinity)];
                    case 2:
                        quantity = _b.apply(void 0, [_c.sent()]);
                        existingItemIndex = this.cartList.findIndex(function (item) { return item.name === selectedMenu.name; });
                        if (existingItemIndex !== -1) {
                            this.cartList[existingItemIndex].qty += quantity;
                        }
                        else {
                            this.cartList.push({
                                name: selectedMenu.name,
                                price: selectedMenu.price,
                                qty: quantity
                            });
                        }
                        this.cartMenu(selectedRestaurant);
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodView.prototype.cartMenu = function (selectedRestaurant) {
        return __awaiter(this, void 0, void 0, function () {
            var option, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('=============================');
                        console.log("Cart");
                        console.log('=============================');
                        if (this.cartList.length > 0) {
                            this.cartList.forEach(function (item, index) {
                                console.log("".concat(index + 1, ". ").concat(item.name, " - Rp ").concat(item.price.toLocaleString(), " x ").concat(item.qty));
                            });
                            console.log("Total: Rp ".concat(this.cartList.reduce(function (acc, item) { return acc + (item.price * item.qty); }, 0).toLocaleString()));
                        }
                        else {
                            console.log("Tidak ada menu yang dipilih");
                        }
                        console.log('\n1. Order Now');
                        console.log('2. Add New Food');
                        console.log('3. Edit Quantity');
                        console.log('4. Delete Menu');
                        console.log('5. Clear cart');
                        console.log('0. Back');
                        _a = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)('Pilih Opsi: ', 0, 5)];
                    case 1:
                        option = _a.apply(void 0, [_b.sent()]);
                        if (option === 1) {
                            this.orderNow(selectedRestaurant);
                        }
                        else if (option === 2) {
                            this.chooseMenu(selectedRestaurant);
                        }
                        else if (option === 3) {
                            this.editQuantity(selectedRestaurant);
                        }
                        else if (option === 4) {
                            this.deleteMenu(selectedRestaurant);
                        }
                        else if (option === 5) {
                            this.clearCart(selectedRestaurant);
                        }
                        else if (option === 0) {
                            this.mainView.show();
                        }
                        else {
                            console.log("Invalid Input");
                            this.cartMenu(selectedRestaurant);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodView.prototype.orderNow = function (selectedRestaurant) {
        return __awaiter(this, void 0, void 0, function () {
            var to, _a, reciever, _b, totalPriceMenu, totaPrice, option, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.cartList.length > 0)) return [3 /*break*/, 4];
                        _a = String;
                        return [4 /*yield*/, (0, scanner_1.default)('Masukkan alamat tujuan: ')];
                    case 1:
                        to = _a.apply(void 0, [_d.sent()]);
                        _b = String;
                        return [4 /*yield*/, (0, scanner_1.default)('Masukkan nama penerima: ')];
                    case 2:
                        reciever = _b.apply(void 0, [_d.sent()]);
                        totalPriceMenu = this.cartList.reduce(function (acc, item) { return acc + (item.price * item.qty); }, 0);
                        totaPrice = this.foodService.calculatePrice(selectedRestaurant.restaurantAddress, to, totalPriceMenu);
                        console.log('=============================');
                        console.log("Total: Rp ".concat(totalPriceMenu.toLocaleString()));
                        console.log('Total Dengan Ongkir: ' + totaPrice);
                        console.log('=============================');
                        _c = Number;
                        return [4 /*yield*/, (0, scanner_1.default)('Order No?\n1. Yes\n2. Cancel\nInput: ')];
                    case 3:
                        option = _c.apply(void 0, [_d.sent()]);
                        if (option === 1) {
                            this.orderDetail(totaPrice, selectedRestaurant, to, reciever);
                        }
                        else {
                            console.log('Order cancelled.');
                            this.mainView.show();
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('Tidak ada menu yang dipilih');
                        this.show();
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FoodView.prototype.orderDetail = function (total, selectedRestaurant, to, reciever) {
        console.log('=============================');
        console.log("Order Detail");
        console.log('=============================');
        var driver = this.driverService.findDriver();
        var price = total;
        var invoice = "FOOD-" + (0, generatorInvoice_1.default)();
        var type = "FOOD";
        var history = {
            invoice: invoice,
            type: type,
            total: price
        };
        this.historyList.push(history);
        console.log("Invoice: ".concat(invoice));
        console.log("Driver: ".concat(driver.name));
        console.log("Plat Number: ".concat(driver.platNumber));
        console.log("Restaurant: ".concat(selectedRestaurant.restaurantName));
        console.log("from: ".concat(selectedRestaurant.restaurantAddress));
        console.log("to: ".concat(to));
        console.log("Revciever: ".concat(reciever));
        console.log("Total: Rp ".concat(total.toLocaleString()));
        this.mainView.show();
    };
    FoodView.prototype.editQuantity = function (selectedRestaurant) {
        return __awaiter(this, void 0, void 0, function () {
            var option, _a, selectedMenu, quantity, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log('=============================');
                        console.log("Edit Quantity");
                        console.log('=============================');
                        this.cartList.forEach(function (item, index) {
                            console.log("".concat(index + 1, ". ").concat(item.name, " - Rp ").concat(item.price.toLocaleString(), " x ").concat(item.qty));
                        });
                        _a = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)('Pilih Menu: ', 1, this.cartList.length)];
                    case 1:
                        option = _a.apply(void 0, [_c.sent()]);
                        selectedMenu = this.cartList[option - 1];
                        _b = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)('Masukkan Jumlah: ', 1, Infinity)];
                    case 2:
                        quantity = _b.apply(void 0, [_c.sent()]);
                        selectedMenu.qty = quantity;
                        this.cartMenu(selectedRestaurant);
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodView.prototype.deleteMenu = function (selectedRestaurant) {
        return __awaiter(this, void 0, void 0, function () {
            var option, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('=============================');
                        console.log("Delete Menu");
                        console.log('=============================');
                        this.cartList.forEach(function (item, index) {
                            console.log("".concat(index + 1, ". ").concat(item.name, " - Rp ").concat(item.price.toLocaleString(), " x ").concat(item.qty));
                        });
                        _a = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)('Pilih Menu: ', 1, this.cartList.length)];
                    case 1:
                        option = _a.apply(void 0, [_b.sent()]);
                        this.cartList.splice(option - 1, 1);
                        this.cartMenu(selectedRestaurant);
                        return [2 /*return*/];
                }
            });
        });
    };
    FoodView.prototype.clearCart = function (selectedRestaurant) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.cartList = [];
                this.cartMenu(selectedRestaurant);
                return [2 /*return*/];
            });
        });
    };
    return FoodView;
}());
exports.default = FoodView;
