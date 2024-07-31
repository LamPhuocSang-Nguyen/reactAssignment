import { configureStore } from "@reduxjs/toolkit";
import ChemicalSlice from "./ChemicalSlice";

const store = configureStore({
    reducer:{
        chemicals:ChemicalSlice
    }
})

export default store