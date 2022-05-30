import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import Form from '../components/Form/Form'

const CreateQuote = () => {
  useEffect(() => {
    document.title = '製作報價單' 
  },[])
  return (
    <Container sx={{ p:5 }}>
      <Form action="submit" />
    </Container>
  )
}

export default CreateQuote