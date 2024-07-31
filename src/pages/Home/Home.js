import React from 'react'
import ChemicalApp from '../../components/ChemicalApp/ChemicalApp';
import Form from '../../components/form/Form';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <Container>
      <Form />
      <ChemicalApp />
      <Link to="/AddChemicalpage">addChemical</Link>
    </Container>
  )
}
