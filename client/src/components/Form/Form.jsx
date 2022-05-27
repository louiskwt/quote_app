import { Box, Button, FormControl, Paper, Stack, TextField, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [memo, setMemo] = useState('');
    const [contents, setContents] = useState([
        {
            id: uuidv4(),
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

    // dynamically add content function
    const addContent = () => {
        // set up an empty content
        const emptyContent = {
            id: uuidv4(),
            item: '',
            price: '',
            subItem: ''
        }
        setContents([...contents, emptyContent]);
    }

    const deleteContent = (id) => {
        // filter out the content based on id
        setContents((contents) => {
            return contents.filter((content) => content.id !== id)
        });
    }

    const handleContentInput = (index, key, value) => {
        let updatedContent = [...contents];
        updatedContent[index][key] = value;

        setContents(updatedContent);
    }

  return (
    <>
        <Typography variant='h5' textAlign="center">曾氏工程</Typography>
         {/* Info */}
        <Paper sx={{ p: 4, mt: 3 }}>
            <Typography variant='h6'>客戶資訊</Typography>
            <FormControl fullWidth sx={{ mt: 3 }}>
                <TextField label="客戶" id="name" value={name} onChange={(e) => handleGeneralInput('name', e.target.value)} />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 3 }}>
                <TextField label="地址" id="address" value={address} onChange={(e) => handleGeneralInput('address', e.target.value)} />
            </FormControl>
        </Paper>
        {/* Content */}
        <Paper sx={{ p: 4, mt: 3 }}>
              <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: 'space-between' }}>
                  <Typography variant='h6' >工程細項</Typography>
                  <Button variant="contained"  onClick={addContent}>
                    增加細項
                  </Button>
              </Stack>
              {contents && contents.map((content, index) => (
                  <div key={index} style={{ marginBottom: '1.5rem' }}>
                      <Stack direction="row" spacing={2}>
                          <Button variant="outlined" size='medium' color='error' onClick={() => deleteContent(content.id)} startIcon={<DeleteIcon />}>
                              刪除細項
                          </Button>
                      </Stack>
                      <Box component='form' sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                          <TextField label="工序" sx={{ mr: 4, width: '50ch' }} id="item" value={content.item} onChange={(e) => handleContentInput(index, e.target.id, e.target.value)} />
                          <TextField label="價錢" id="price" sx={{ width: '30ch' }} value={content.price} onChange={(e) => handleContentInput(index, e.target.id, e.target.value)} />
                      </Box>
                      <FormControl fullWidth sx={{ mt: 3 }}>
                          <TextField label="詳細說明 (每項用 / 分隔)" id="subItem" value={content.subItem} onChange={(e) => handleContentInput(index, e.target.id, e.target.value)} />
                      </FormControl>
                  </div>
              ))}
        </Paper>
        {/* Memo */}
        <Paper sx={{ p: 4, mt: 3 }}>
              <Typography variant='h6'>備注</Typography>
              <FormControl fullWidth sx={{ mt: 3 }}>
                  <TextField label="備注 (每項用 / 分隔)" id="name" value={memo} onChange={(e) => handleGeneralInput('memo', e.target.value)} />
              </FormControl>
        </Paper>
        <Button fullWidth variant='contained' sx={{ mt:3 }}> 建立</Button>
    </>
  )
}

export default Form