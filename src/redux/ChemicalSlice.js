import { createSlice } from '@reduxjs/toolkit'
import { act, useEffect } from 'react';


const initialState = {
    chemicals: [
        {
            id: 1,
            name: "Hydrochloric Acid",
            formula: "HCL"
        },
        {
            id: 2,
            name: "Sodium Chloride",
            formula: "Nacl"
        },
        {
            id: 3,
            name: "Sulfuric Acid",
            formula: "H2SO4"
        },
        {
            id: 4,
            name: "Ammonia",
            formula: "NH3"
        },
        {
            id: 5,
            name: "Ethanol",
            formula: "C2H5OH"
        }
    ],
    status: 'start',
    error: null,
}


// useEffect(()=>{

// },[])


const ChemicalSlice = createSlice({
    name: "chemicals",
    initialState,
    reducers: {
        addChemical(state, action) {
            state.chemicals = [...state.chemicals, { id:state.chemicals.length === 0 ? 1 : state.chemicals.reduce((value,item)=>Math.max(item.id,value)+1,0) , name: action.payload, formula: null }];
        },
        deleteChemical(state, action) {
            let newList = state.chemicals.filter((item) => item.id !== action.payload);
            state.chemicals = newList;
        },
        editChemical(state, action) {

            console.log(action.payload)
            const item = state.chemicals.find((item) => item.id === action.payload.id);

            if(item){
                item.name = action.payload.name
            }
        }
    }
})


export const { addChemical, deleteChemical, editChemical } = ChemicalSlice.actions
export default ChemicalSlice.reducer