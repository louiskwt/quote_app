import { Button, Container, TextField, Typography } from '@mui/material'
import {useEffect} from 'react'

const LoginPage = () => {
  
  useEffect(() => {
    document.title = '登入'
  }, [])

  return (
    <Container sx={{ p:10, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant='h5' textAlign='center' fontWeight='bold'>
        請先登入
      </Typography>
      <TextField
        label='用户名'    
        variant="outlined"
        sx={{ mt: 4 }}
      />
      <TextField
        label='密碼'
        type='password'    
        variant="outlined"
        sx={{ mt: 4 }}
      />
      <Button variant="contained" sx={{ mt: 5}}>登入</Button>
    </Container>
  )
}

export default LoginPage