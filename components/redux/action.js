import { ADD_TO_CART, Remove_From_Cart,USER_LIST } from "./constants";

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}
export function removeFromCart(item){
    return{
        type:Remove_From_Cart,
        data:item
    }
}
export function getUserList() {
    return {
      type: USER_LIST,
    };
  }