import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Tab1 = () => {
    var[output,setOutput]=useState([])
    useEffect(()=>{
        // CRED function - get post, put, delete
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{console.log(res.data) //res is the data from axios which is printed to console in .data form
        setOutput(res.data) //useState is altered using setOutput
    })
    .catch((error)=>{console.log(error)}) //in case of any error in  the axios
},[])//callback function-function calling another function,[]given to prevent repeated rendering
  return (
    <div>
      <TableContainer>
       <Table>
        <TableHead>
          <TableRow>
            {/* <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}}>Details</TableCell> */}
            <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}} >Name</TableCell>
            <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}} >Email</TableCell>
            <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'20px'}} >City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
             //mapping the axios data to the table rows , val has all the data
            output.map((val,i)=>{
                return(<TableRow>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.email}</TableCell>
                    <TableCell>{val.address.city}</TableCell>

                </TableRow>)
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Tab1
