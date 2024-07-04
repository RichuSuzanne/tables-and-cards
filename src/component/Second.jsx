import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Second = (props) => {
    var [name,setName]=useState("Richu");
    const changeName = () =>{
        console.log("btn1 clicked")
        setName("Home")
    }
    const changeName1 = () =>{
        console.log("btn2 clicked")
        setName("Contact")
    }
  return (
    <div style={{margin:'20%',textAlign:'center' }}> 
      <Typography variant='h3'>Welcome to {name} from {props.name}</Typography>
      <Button variant='contained' on onClick={changeName}>Home</Button> &nbsp;
      <Button variant='contained' color='secondary' onClick={changeName1}>Contact</Button>
    </div>
  )
}

export default Second
