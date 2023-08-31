import React, { useState, useEffect } from 'react'
import { Box,TextField, MenuItem,InputLabel,FormControl, Select  } from '@mui/material'
import { useNavigate,useParams } from 'react-router-dom'

export default function Updatedproduct() {
    const [productname,setProductname] =useState('');
    const [price,setPrice]= useState('');
    const [category,setCategory]= useState('');
    const navigate= useNavigate();
    const params = useParams();
    useEffect(()=>{
        productDetails();
      },[]);
      const productDetails= async()=>{
        let result= await fetch(`http://localhost:5000/products/${params.id}`,{
          method: 'GET',
        })
        result= await result.json();
        setProductname(result.data.productname)
        setPrice(result.data.price)
        setCategory(result.data.category)
      }
      const handleSubmit = async (u) => {
        let res= await fetch(`http://localhost:5000/products/${params.id}`,{
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({productname,price,category}),
           })
          res = await res.json();
        navigate('/productform');
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
        <h1 style={{color:'rgb(51, 54, 238)'}}> Update User </h1>
      <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
      <TextField
          required
          id="outlined-required"
          label="Product Name:"
          name='Productname'
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
        <input type="button" onClick={handleSubmit}  value= 'SAVE' style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:80+'px',fontSize:18+"px"}} />
      </div>
    </Box>
  )
}