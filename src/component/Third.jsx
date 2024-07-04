import { Button, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'

const Third = (props) => {
    var[input,setInput]=useState()
    var[output,setOutput]=useState()
    const inputHandler=(e)=>{
       console.log(e.target.value) /* to get the value that is typed */
       setInput(e.target.value) }
    const addName = () =>{
           console.log("btn1 clicked")
           setOutput(input)
    }
  return (
    <div style={{textAlign:'center', marginTop:'20%'}}>
        <Typography variant='h4'>Hello {output} {props.age}</Typography>
        <br/>
      <TextField variant='outlined' label='Name' onChange={inputHandler}></TextField> &nbsp;
      <Button variant='contained' onClick={addName}>Submit</Button>
    </div>
  )
}

export default Third
