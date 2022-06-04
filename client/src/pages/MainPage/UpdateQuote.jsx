import { Container } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import quoteApi from '../../apis/quoteApi'
import Form from '../../components/Form/Form'
import { FormsContext } from '../../context/formsContext'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';

const UpdateQuote = () => {
  const { id } = useParams();
  
  const { setUpdateForm } = useContext(FormsContext);
  const {userState} = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    document.title = '編輯報價單'
 
    const fetchQuoteDetail = async () => {
      try {
        const res = await quoteApi.get(`/${id}`, {
          headers: {"x-access-token": userState.token}
        });
        setUpdateForm(res.data.data);
      } catch (error) {
        console.log(error.message);
        navigate('/login');
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