import {configureStore}from'@reduxjs/toolkit'
import studentReducer from'./studentSlice'
const Store=configureStore({
    reducer:{
        studentSate: studentReducer
    }
})

export default Store;