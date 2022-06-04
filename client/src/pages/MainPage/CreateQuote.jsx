import { Container } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import Form from '../../components/Form/Form'
import { FormsContext } from '../../context/formsContext'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';


const CreateQuote = () => {
  const { resetForm } = useContext(FormsContext);
  const { userState } = useContext(UserContext);

  let navigate = useNavigate();


  useEffect(() => {
    document.title = '製作報價單' 
    if(!userState.token) {
      navigate('/login');
    }
    resetForm();
  },[])

  return (
    <Container sx={{ p:5 }}>
      <Form action="create" />
    </Container>
  )
}

export default CreateQuote