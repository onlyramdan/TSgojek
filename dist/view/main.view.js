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
var driver_service_impl_1 = require("../service/impl/driver.service.impl");
var food_service_impl_1 = require("../service/impl/food.service.impl");
var restauran_service_impl_1 = require("../service/impl/restauran.service.impl");
var ride_service_impl_1 = require("../service/impl/ride.service.impl");
var send_service_impl_1 = require("../service/impl/send.service.impl");
var scanner_1 = require("../util/scanner");
var gofood_view_1 = require("./gofood.view");
var goride_view_1 = require("./goride.view");
var gosend_view_1 = require("./gosend.view");
var history_view_1 = require("./history.view");
var MainView = /** @class */ (function () {
    function MainView() {
        this.driverService = new driver_service_impl_1.default();
        this.rideService = new ride_service_impl_1.default();
        this.sendService = new send_service_impl_1.default();
        this.restaurantService = new restauran_service_impl_1.default();
        this.foodService = new food_service_impl_1.default();
        this.historyList = [];
    }
    MainView.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var option, _a, rideView, sendView, foodView, historyView;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('=============================');
                        console.log('Menu');
                        console.log('=============================');
                        console.log('1. Ride');
                        console.log('2. Send');
                        console.log('3. Food');
                        console.log('4. History');
                        console.log('5. Exit');
                        _a = Number;
                        return [4 /*yield*/, (0, scanner_1.scannerNum)("Input :", 1, 5)];
                    case 1:
                        option = _a.apply(void 0, [_b.sent()]);
                        if (option == 1) {
                            rideView = new goride_view_1.default(this.rideService, this.driverService, this, this.historyList);
                            rideView.show();
                        }
                        else if (option == 2) {
                            sendView = new gosend_view_1.default(this, this.driverService, this.sendService, this.historyList);
                            sendView.show();
                        }
                        else if (option == 3) {
                            foodView = new gofood_view_1.default(this, this.restaurantService, this.foodService, this.driverService, this.historyList);
                            foodView.show();
                        }
                        else if (option == 4) {
                            historyView = new history_view_1.default(this, this.historyList);
                            historyView.show();
                        }
                        else if (option == 5) {
                            console.log('Exit Thank you');
                            process.exit(0);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return MainView;
}());
exports.default = MainView;
