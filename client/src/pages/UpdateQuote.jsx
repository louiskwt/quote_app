import { Container } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import quoteApi from '../apis/quoteApi'
import Form from '../components/Form/Form'
import { FormsContext } from '../context/formsContext'


const UpdateQuote = () => {
  const { id } = useParams();
  
  const { setUpdateForm } = useContext(FormsContext);

  useEffect(() => {
    document.title = '編輯報價單'
 
    const fetchQuoteDetail = async () => {
      try {
        const res = await quoteApi.get(`/${id}`);
        setUpdateForm(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchQuoteDetail()
  }, []);



  return (
      <Container sx={{ p: 5 }}>
          <Form action="edit"  />
      </Container>
  )
}

export default UpdateQuote