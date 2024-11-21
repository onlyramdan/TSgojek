import History from "../model/history.model";
import FoodService from "../service/food.service";
import DriverServiceImpl from "../service/impl/driver.service.impl";
import FoodServiceImpl from "../service/impl/food.service.impl";
import RestaurantServiceImpl from "../service/impl/restauran.service.impl";
import RideServiceImpl from "../service/impl/ride.service.impl";
import SendServiceImpl from "../service/impl/send.service.impl";
import RestaurantService from "../service/restoran.service";
import SendService from "../service/send.service";
import scanner, { scannerNum } from "../util/scanner";
import FoodView from "./gofood.view";
import RideView from "./goride.view";
import SendView from "./gosend.view";
import HistoryView from "./history.view";

class MainView {
    private driverService: DriverService = new DriverServiceImpl();
    private rideService: RideService = new RideServiceImpl();
    private sendService: SendService = new SendServiceImpl();
    private restaurantService: RestaurantService = new RestaurantServiceImpl();
    private foodService: FoodService = new FoodServiceImpl();
    private historyList: History[] = [];

    async show() {
        console.log('=============================');
        console.log('Menu');
        console.log('=============================');
        console.log('1. Ride');
        console.log('2. Send');
        console.log('3. Food');
        console.log('4. History');
        console.log('5. Exit');

        const option: number = Number(await scannerNum("Input :", 1, 5));
        if (option == 1) {
            const rideView = new RideView(this.rideService, this.driverService, this, this.historyList);
            rideView.show();
        } else if (option == 2) {
            const sendView = new SendView(this, this.driverService, this.sendService, this.historyList);
            sendView.show();
        } else if (option == 3) {
            const foodView = new FoodView(this, this.restaurantService, this.foodService, this.driverService, this.historyList);
            foodView.show();
        } else if (option == 4) {
            const historyView = new HistoryView(
                this, this.historyList);
            historyView.show();
        } else if (option == 5) {
            console.log('Exit Thank you');
            process.exit(0);
        }
    }
}
export default MainView;