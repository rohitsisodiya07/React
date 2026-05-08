import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../slice/dataSlice'


export const store = configureStore({
    reducer : {
       
        dummy : authReducer
    }
})