import React, { useState } from 'react'
import { Form, FormGroup, Label, Col, Input, FormText, Button } from "reactstrap"
import { useSelector, useDispatch } from 'react-redux'
import { addChemical } from '../../redux/ChemicalSlice';



export default function AddChemical() {

    const dispatch= useDispatch()
    const [nameChe,setNameChe] = useState("");
    const [formula,setFormula] = useState("")

    return (
        <div><Form>
            <FormGroup row>
                <Label
                    for="nameofchemical"
                    sm={2}
                >
                    Name of Chemical
                </Label>
                <Col sm={10}>
                    <Input
                        id="text"
                        name="nameofchemical"
                        placeholder="with a placeholder"
                        type="text"

                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for="Formula"
                    sm={2}
                >
                    Formula
                </Label>
                <Col sm={10}>
                    <Input
                        id="Formula"
                        name="Formula"
                        value={formula}
                        placeholder="text placeholder"
                        type="text"
                    />
                </Col>
            </FormGroup>

            <Button>
                Submit
            </Button>
        </Form></div>
    )
}
