import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProd = () => {

    const[prodData,setprodData]= useState({
        title:'',
        image:'',
        price:'',
        rating:''
    })

    const navigate= useNavigate()

    function updateValue(){
        console.log(prodData)
        navigate('/')
    }
  return (
    <div style={{margin:'5%',marginTop:'10%',textAlign:'center'}}>
        <Grid >
    <Typography variant='h4' style={{color:'gray',fontWeight:'bold'}}>ADD NEW PRODUCT</Typography> <br />
  <Grid >
   <TextField label='Title' variant='outlined' fullWidth onChange={(e)=>{
    setprodData({...prodData, title:e.target.value})}}></TextField>
  </Grid> <br />
  <Grid >
   <TextField label='Image' variant='outlined' fullWidth onChange={(e)=>{
    setprodData({...prodData, image:e.target.value})}}></TextField>
  </Grid> <br />
  <Grid >
   <TextField label='Price' variant='outlined' fullWidth onChange={(e)=>{
    setprodData({...prodData, price:e.target.value})}}></TextField>
  </Grid> <br />
  <Grid >
   <TextField label='Rating' variant='outlined' fullWidth onChange={(e)=>{
    setprodData({...prodData, rating:e.target.value})}}></TextField>
  </Grid> <br />
  <Grid >
    <Button color='error' variant='contained' onClick={updateValue}>ADD</Button> 
  </Grid>
</Grid>
    </div>
  )
}

export default AddProd