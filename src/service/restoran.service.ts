import Restaurant from "../model/restoran.model";

interface RestaurantService{
    findRestaurant(): Restaurant[];
}

export default RestaurantService;