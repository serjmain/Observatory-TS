import PremiumUser from "./src/lvl1/premiumUser";
import User from "./src/lvl1/user";
import Observatory from "./src/lvl2/observatory";
import Telescope from "./src/lvl3/telescope";
import SolarSystem from "./src/lvl4/solarSystem";

const solarSystem = new SolarSystem();

const nasa = new Telescope("NASA", "GAMA-REY", solarSystem);
const mao = new Telescope("MAO", "X-REY", solarSystem);
const kamle = new Telescope("KAMLE", "REY", solarSystem);


const poje = new Observatory("POJE", 10, 20, [nasa, mao, kamle]);
const frije = new Observatory("FRIJE", 10, 20, [nasa, mao, kamle]);
const archi = new Observatory("ARCHI", 10, 20, [nasa, mao, kamle]);


const jack = new User("Jack", "some email", "some password", 50);

const genadiu = new PremiumUser("Genadiu", "some email", "some password", 50);

jack.addObservatory(poje);
jack.addObservatory(frije);
jack.addObservatory(archi);



const processOfBuyingExcursionAsync = function (error, { boughtExcursions, cardBalance }) {
    if (error) {
        throw error;
    } else {
        console.log("boughtExcursions", boughtExcursions);
        console.log("cardBalance", cardBalance);
    }
}

jack.buyExcursionAsync("POJE", function (error, { boughtExcursions, cardBalance }) {
    processOfBuyingExcursionAsync(error, { boughtExcursions, cardBalance });
    jack.buyExcursionAsync("FRIJE", function (error, { boughtExcursions, cardBalance }) {
        processOfBuyingExcursionAsync(error, { boughtExcursions, cardBalance });
        jack.buyExcursionAsync("ARCHI", function (error, { boughtExcursions, cardBalance }) {
            processOfBuyingExcursionAsync(error, { boughtExcursions, cardBalance });
            console.log("finish async")
        });
    });
});

console.log("async in progress");