import React, { useState } from 'react'
import { Container, Input } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import {addChemical} from "../../redux/ChemicalSlice"
import "./Form.css"

export default function Form() {
    const [text, setText] = useState("")
    const dispatch = useDispatch();
    //const {chemicals} = useSelector((state)=>state.chemicals);


  return (
    <Container className='form-input'>
        <Input type='text' value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
            if(e.key==="Enter"){
                dispatch(addChemical(text))
                setText("")
            }
        }}></Input>
    </Container>
  )
}
