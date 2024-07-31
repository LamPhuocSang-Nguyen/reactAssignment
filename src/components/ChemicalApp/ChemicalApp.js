
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Table,Button, Input } from 'reactstrap';
import { deleteChemical, editChemical } from '../../redux/ChemicalSlice';


export default function ChemicalApp() {
    const dispatch = useDispatch();
    const { chemicals } = useSelector((state) => state.chemicals);
    const [isEdit,setIsEdit] = useState({id:"", flag:false});
    const [valueChemical, setValueChemical] = useState("");

    console.log(chemicals)

    // useEffect(()=>{
    //     dispatch(deleteChemical)
    // },[])
    return (
        <Container>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Formula
                        </th>
                        <th>
                            delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        chemicals.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                {
                                    isEdit.id===item.id && isEdit.flag===true ? <td><Input type='text' value={valueChemical} onChange={(e)=>setValueChemical(e.target.value)} onKeyDown={(e)=>{
                                        if(e.key==="Enter"){
                                            dispatch(editChemical({id:item.id,name:valueChemical}));
                                            setValueChemical("");
                                            setIsEdit({id:item.name, flag:!isEdit.flag})
                                        }
                                    }}></Input></td> : <td>{item.name}</td>
                                }
                                <td>{item.formula}</td>
                                <td><Button onClick={()=>(dispatch(deleteChemical(item.id)))}>X</Button>
                                <Button onClick={()=>(setIsEdit({id:item.id, flag:!isEdit.flag}), setValueChemical(item.name))}>Edit</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
}
