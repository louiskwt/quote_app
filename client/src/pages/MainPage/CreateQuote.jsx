import { Container } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import Form from '../../components/Form/Form'
import { FormsContext } from '../../context/formsContext'

const CreateQuote = () => {
  const { resetForm } = useContext(FormsContext);

  useEffect(() => {
    document.title = '製作報價單' 
    resetForm();
  },[])
  return (
    <Container sx={{ p:5 }}>
      <Form action="create" />
    </Container>
  )
}

export default CreateQuote