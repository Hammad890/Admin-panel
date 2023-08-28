import React, { useState } from 'react'
import { Box,TextField } from '@mui/material'
import { useNavigate,useLocation } from 'react-router-dom'


export default function Userview() {
    const navigate= useNavigate();
    const location= useLocation();
    const {user}= location.state || {};
    const [users, setUsers] = useState([]);
    const [userName,setUserName] =useState(user ? user.username: '');
    const [email,setEmail]= useState(user ? user.email: '');
    const [number,setNumber]= useState(user ? user.number: '');
    const handleSave= async(e)=>{
        const newUser= {username: userName,email: email,number: number, }
        try{
        let result = await fetch('http://localhost:5000/user',{
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json"
        }
        })
        result = await result.json();
          navigate('/userform');
          e.preventDefault();
        } catch (error) {
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
        <h1 style={{color:'rgb(51, 54, 238)'}}>User Details</h1>
      <div style={{display: 'flex', justifyContent:'center', flexDirection: 'column'}}>
        <TextField
          required
          id="outlined-required"
          label="User Name:"
          name='username'
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
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
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder='******'
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="phone number"
          defaultValue= '+92'
          name='number'
          value={number}
          onChange={(e)=>setNumber(e.target.value)}
        />
        <TextField id="outlined-search" label="Address" />
        <input type="button" onClick={handleSave}  value= 'SAVE' style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:80+'px',fontSize:18+"px"}} />
      </div>
    </Box>
  )
    }
