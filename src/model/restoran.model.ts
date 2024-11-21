import Menu from "./menu.model";

interface Restaurant{
    restaurantName: string;
    restaurantAddress: string;
    menu: Menu[];
}

export default Restaurant;