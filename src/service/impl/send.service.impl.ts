import SendService from "../send.service";

class SendServiceImpl implements SendService{
    calculatePrice(from: String, to: String, wight: number): number {
        const price: number = (from.length + to.length + wight) * 1000;
        return price;
    }
}

export default SendServiceImpl;