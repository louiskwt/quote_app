import { Box, FormControl, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [memo, setMemo] = useState('');
    const [contents, setContents] = useState([
        {
            item: '',
            price: '',
            subItem: ''
        }
    ])

    const handleGeneralInput = (type, value) => {
        const updateFunc = {
            name: setName,
            address: setAddress,
            memo: setMemo,
        }
        updateFunc[type](value);
    }

    const handleContentInput = (index, key, value) => {
        let updatedContent = [...contents];
        updatedContent[index][key] = value;

        setContents(updatedContent);
    }

  return (
    <>
        <Paper sx={{ p: 4, mt: 3 }}>
            <Typography variant='h6'>Create Quote</Typography>
            <FormControl fullWidth sx={{ mt: 3 }}>
                <TextField label="客戶" id="name" value={name} onChange={(e) => handleGeneralInput('name', e.target.value)} />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 3 }}>
                <TextField label="地址" id="address" value={address} onChange={(e) => handleGeneralInput('address', e.target.value)} />
            </FormControl>
        </Paper>
        <Paper sx={{ p: 4, mt: 3 }}>
              <Typography variant='h6'>工程細項</Typography>
              {contents.map((content, index) => (
                  <div key={index}>
                      <Box component='form' sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                          <TextField label="工序" sx={{ mr: 4, width: '50ch' }} id="item" value={content.item} onChange={(e) => handleContentInput(index, e.target.id, e.target.value)} />
                          <TextField label="價錢" id="price" sx={{ width: '30ch' }} value={content.price} onChange={(e) => handleContentInput(index, e.target.id, e.target.value)} />
                      </Box>
                      <FormControl fullWidth sx={{ mt: 3 }}>
                          <TextField label="地址" id="subItem" value={content.subItem} onChange={(e) => handleContentInput(index, e.target.id, e.target.value)} />
                      </FormControl>
                  </div>
              ))}

        </Paper>
        <Paper sx={{ p: 4, mt: 3 }}>
              <Typography variant='h6'>Memo</Typography>
              <FormControl fullWidth sx={{ mt: 3 }}>
                  <TextField label="客戶" id="name" value={memo} onChange={(e) => handleGeneralInput('memo', e.target.value)} />
              </FormControl>
        </Paper>
    </>
  )
}

export default Form