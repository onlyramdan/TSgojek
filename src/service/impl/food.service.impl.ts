import FoodService from "../food.service";

class FoodServiceImpl implements FoodService {
    calculatePrice(from: string, to: string, totalPriceMenu: number): number {
        const price: number = (from.length + to.length) * 1000;
        return price + totalPriceMenu;
    }
}

export default FoodServiceImpl;