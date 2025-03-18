import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage=()=>{
    const cartData= localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];

}

const cartSlice= createSlice({
    name:"cart",
    initialState:loadCartFromLocalStorage(),
    reducers:{
        addToCart:(state,action)=>{
            const item=state.find((product)=>product.id===action.payload.id);
            if(item){
                item.quantity+=1;
            }  
            else {
                state.push({...action.payload,quantity:1})
            }
            localStorage.setItem("cart",JSON.stringify(state));
        },
        removeFromCart:(state,action)=>{
            const newState =state.filter((item)=>item.id !== action.payload);
            localStorage.setItem("cart",JSON.stringify(newState));
            return newState;
        },
        increaseQuantity :(state,action)=>{
            const item=state.find((product)=>product.id===action.payload);
            if(item) item.quantity += 1;
            localStorage.setItem("cart",JSON.stringify(state))
            return state;

        },
        decreaseQuantity : (state,action)=>{
            const item = state.find((product)=>product.id === action.payload);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        clearCart: (state) => {
            // Clear localStorage and return empty cart
            localStorage.removeItem("cart");
          },
    },

});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;