import React from 'react'
import {Typography} from '@mui/material'

// props called and used here
const First1 = (props) => {
  return (
    <div>
      <h1>Hola {props.data.name} {props.data.age} from {props.data.place}</h1>
      <Typography variant="hi">HELLO</Typography>
    </div>
  )
}

export default First1
