interface FoodService{
    calculatePrice(from: string, to: string, totalPriceMenu: number): number;
}

export default FoodService;