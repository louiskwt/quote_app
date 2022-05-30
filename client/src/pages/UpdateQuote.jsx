import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import Form from '../components/Form/Form'

const UpdateQuote = () => {
  useEffect(() => {
    document.title = '編輯報價單'
  }, [])

  return (
      <Container sx={{ p: 5 }}>
          <Form action="edit" />
      </Container>
  )
}

export default UpdateQuote