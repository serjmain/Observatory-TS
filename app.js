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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.__esModule = true;
var premiumUser_1 = require("./src/lvl1/premiumUser");
var user_1 = require("./src/lvl1/user");
var observatory_1 = require("./src/lvl2/observatory");
var telescope_1 = require("./src/lvl3/telescope");
var solarSystem_1 = require("./src/lvl4/solarSystem");
var solarSystem = new solarSystem_1["default"]();
var nasa = new telescope_1["default"]("NASA", "GAMA-REY", solarSystem);
var mao = new telescope_1["default"]("MAO", "X-REY", solarSystem);
var kamle = new telescope_1["default"]("KAMLE", "REY", solarSystem);
var poje = new observatory_1["default"]("POJE", 10, 20, [nasa, mao, kamle]);
var frije = new observatory_1["default"]("FRIJE", 10, 20, [nasa, mao, kamle]);
var archi = new observatory_1["default"]("ARCHI", 10, 20, [nasa, mao, kamle]);
var jack = new user_1["default"]("Jack", "some email", "some password", 250);
var genadiu = new premiumUser_1["default"]("Genadiu", "some email", "some password", 50);
jack.addObservatory(poje);
jack.addObservatory(frije);
jack.addObservatory(archi);
/* const processOfBuyingExcursionAsync = (error: Error | null, { boughtExcursions, cardBalance }: { boughtExcursions: string[]; cardBalance: number; }) :void => {
    if (error) {
        throw error;
    } else {
        console.log("boughtExcursions", boughtExcursions);
        console.log("cardBalance", cardBalance);
    }
}

jack.buyExcursionAsync("POJE", (error, { boughtExcursions, cardBalance }) => {
    processOfBuyingExcursionAsync(error, { boughtExcursions, cardBalance });
    jack.buyExcursionAsync("FRIJE", (error, { boughtExcursions, cardBalance }) => {
        processOfBuyingExcursionAsync(error, { boughtExcursions, cardBalance });
        jack.buyExcursionAsync("ARCHI", (error, { boughtExcursions, cardBalance }) => {
            processOfBuyingExcursionAsync(error, { boughtExcursions, cardBalance });
            console.log("finish async")
        });
    });
}); */
console.log("async in progress");
var asyncBuyExcursion = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, jack.buyExcursionAsyncPromise("POJE")];
            case 1:
                _a.sent();
                console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
                return [4 /*yield*/, jack.buyExcursionAsyncPromise("FRIJE")];
            case 2:
                _a.sent();
                console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
                return [4 /*yield*/, jack.buyExcursionAsyncPromise("ARCHI")];
            case 3:
                _a.sent();
                console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
asyncBuyExcursion();
/* jack.buyExcursionAsyncPromise("POJE")
    .then(() => {
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
        return jack.buyExcursionAsyncPromise("FRIJE");
    })
    .then(() => {
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
        return jack.buyExcursionAsyncPromise("ARCHI");
    })
    .then(() => {
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
    })
    .catch(error => console.log(error)); */
