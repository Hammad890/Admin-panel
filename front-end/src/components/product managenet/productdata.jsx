import React from 'react'
import { Box,Select,TextField,MenuItem,InputLabel,FormControl } from '@mui/material'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';

export default function Productdata() {
  const navigate= useNavigate();
  const [productname,setProductname] =useState( '');
    const [category,setCategory]= useState('');
    const [price,setPrice]= useState('');
    const handleSave= async (e)=>{
      const newProducts= {productname: productname, category: category, price: price}
      try{
      let result = await fetch('http://localhost:5000/products',{
        method: 'POST',
        body: JSON.stringify(newProducts),
        headers: {
          "Content-Type": "application/json"
      }
      })
      result = await result.json();
      navigate('/productform/:id');
      e.preventDefault();
    }catch (error) {
      console.error("Network error:", error);
    }
  }
  return (
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1 style={{color:'rgb(51, 54, 238)'}}>Product Details</h1>
      <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
        <TextField
          required
          id="outlined-required"
          label="Product Name:"
          name='productname'
          value={productname}
          onChange={(e)=>setProductname(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Category:"
          name='Productcategory'
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />
        <TextField
          required
          defaultValue="$"
          id="outlined-password-input"
          label="Price"
          type="price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
         <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Genre*</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          label="Category *"
          style={{height:60+'px',width:200+'px',marginRight:60+'px'}}
          >
          <MenuItem value="Men"> Men
          </MenuItem>
          <MenuItem value="Women"> Women</MenuItem>
          <MenuItem value="Children">Children</MenuItem>
        </Select>
        </FormControl>
        <input type="button" onClick={handleSave}  value= 'SAVE' style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:80+'px',fontSize:18+"px"}} />
      </div>
    </Box>
  )
}

