import { OrderItems } from "./order-items";

export interface IOrderCreate {
 orderItem:OrderItems[],
UserID:number,
ShippingPrice:number,
Tax:number,

Total:number
}
