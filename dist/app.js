"use strict";
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
var jack = new user_1["default"]("Jack", "some email", "some password", 50);
var genadiu = new premiumUser_1["default"]("Genadiu", "some email", "some password", 50);
jack.addObservatory(poje);
jack.addObservatory(frije);
jack.addObservatory(archi);
var processOfBuyingExcursionAsync = function (error, _a) {
    var boughtExcursions = _a.boughtExcursions, cardBalance = _a.cardBalance;
    if (error) {
        throw error;
    }
    else {
        console.log("boughtExcursions", boughtExcursions);
        console.log("cardBalance", cardBalance);
    }
};
jack.buyExcursionAsync("POJE", function (error, _a) {
    var boughtExcursions = _a.boughtExcursions, cardBalance = _a.cardBalance;
    processOfBuyingExcursionAsync(error, { boughtExcursions: boughtExcursions, cardBalance: cardBalance });
    jack.buyExcursionAsync("FRIJE", function (error, _a) {
        var boughtExcursions = _a.boughtExcursions, cardBalance = _a.cardBalance;
        processOfBuyingExcursionAsync(error, { boughtExcursions: boughtExcursions, cardBalance: cardBalance });
        jack.buyExcursionAsync("ARCHI", function (error, _a) {
            var boughtExcursions = _a.boughtExcursions, cardBalance = _a.cardBalance;
            processOfBuyingExcursionAsync(error, { boughtExcursions: boughtExcursions, cardBalance: cardBalance });
            console.log("finish async");
        });
    });
});
console.log("async in progress");
//__________________________________2 0 1 5_________________________________________________________
/* jack.buyExcursionAsyncPromise("NASA")
    .then(() => {
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
        return jack.buyExcursionAsyncPromise("FRIJE");
    })
    .then(() => {
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
        return jack.buyExcursionAsyncPromise("GLUKE");
    })
    .then(() => {
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
    })
    .catch (error => console.log(error));

//___________________________________2 0 1 7________________________________________________________

async function asyncBuyExcursion() {
    try {
        await jack.buyExcursionAsyncPromise("NASA");
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
        await jack.buyExcursionAsyncPromise("FRIJE");
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
        await jack.buyExcursionAsyncPromise("GLUKE");
        console.log("boughtExcursions: ", jack.boughtExcursions, "cardBalance: ", jack.cardBalance);
    }
    catch (error) {
        console.log(error);
    }
}

asyncBuyExcursion(); */
