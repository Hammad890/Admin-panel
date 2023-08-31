import React from 'react'
import { Link } from 'react-router-dom'
export default function Userman() {

  return (
    <div>
        <h1 style={{color: 'rgb(51, 54, 238)',textAlign:'center', paddingRight: 380+'px'}}>User Management</h1>
      <Link to='/userdata'>
      <button style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:150+'px',fontSize:18+"px", borderRadius: 5+'px',cursor: 'pointer', border:2+'px solid grey'}}>Add User</button>
      </Link>
    </div>
  )
}
