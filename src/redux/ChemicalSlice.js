import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react';


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
            state.chemicals = [...state.chemicals, { id:6, name: action.payload, formula: null }];
            console.log(state.chemicals)
        },
        deleteChemical(state, action) {
            let newList = state.chemicals.filter((item) => item.id !== action.payload);
            state.chemicals = newList;
            console.log(state.chemicals)
        },
        editChemical(state, action) {
            state.chemicals.map((item) => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name;
                }
            })
        }
    }
})


export const { addChemical, deleteChemical, editChemical } = ChemicalSlice.actions
export default ChemicalSlice.reducer