import { configureStore } from '@reduxjs/toolkit'
import  carSlice  from './slices/car.slice'
import  isLoadingSlice  from './slices/isLoading.slice'
import  productSlice  from './slices/product.slice'
import purcharseSlice from './slices/purcharse.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        product : productSlice,
        purcharse : purcharseSlice,
        car : carSlice
    }
})
