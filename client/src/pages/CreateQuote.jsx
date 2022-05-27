import { Container } from '@mui/material'
import React from 'react'
import Form from '../components/Form/Form'

const CreateQuote = () => {
  return (
    <Container sx={{ p:5 }}>
      <Form action="submit" />
    </Container>
  )
}

export default CreateQuote