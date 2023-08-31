import React, { useState, useEffect } from 'react'
import { Box,TextField } from '@mui/material'
import { useNavigate,useParams } from 'react-router-dom'

export default function Updateuser() {
    const [username,setUsername] =useState('');
    const [email,setEmail]= useState('');
    const [number,setNumber]= useState('');
    const navigate= useNavigate();
    const params = useParams();
    useEffect(()=>{
        userDetails();
      },[]);
      const userDetails= async()=>{
        let result= await fetch(`http://localhost:5000/user/${params.id}`,{
          method: 'GET',
        })
        result= await result.json();
        setUsername(result.data.username)
        setEmail(result.data.email)
        setNumber(result.data.number)
      }
      const handleSubmit = async (u) => {
        let res= await fetch(`http://localhost:5000/user/${params.id}`,{
          method: 'PUT',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({username,email,number}),
           })
        res = await res.json();
        navigate('/userform/:id');
      }
  return (
    <div>
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
          label="User Name:"
          name='username'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Email:"
          placeholder='user2@gmail.com'
          type='email'
          name='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password:"
          type="password"
          autoComplete="current-password"
          placeholder='******'
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="phone number"
          name='number'
          value={number}
          onChange={(e)=>setNumber(e.target.value)}
        />
        <TextField id="outlined-search" label="Address" />
        <input type="button" onClick={handleSubmit}  value= 'SAVE' style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:80+'px',fontSize:18+"px"}} />
      </div>
    </Box>
    </div>
  )
}
