import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 100, name : 'White and Black', count : 2},
        {id : 102, name : 'Grey Yordan', count : 1}
      ],
    reducers : {
        increase(state, action){
            const item = state.find((product)=> product.id === action.payload.id)
            if(item){
                item.count += 1;
            }
        },//end of increase

        addProduct(state, action){
            state.push(action.payload)
        }//end of addProduct
    }
})

export let {increase,addProduct} = cart.actions;

export default configureStore({
  reducer: { 
    cart : cart.reducer
 }
}) 