import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';

const Home = () => {
     const[data,setData]=useState([])
     useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setData(res.data)
        })
     },[])


  return (
    <div style={{margin:'5%', marginTop:'10%'}}>
      <Grid container spacing={2}>
       {data.map((row)=>(
  <Grid size={4}>
  <Card sx={{ Width: 245, height:330 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
        title={row.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {row.title}
        </Typography>
       
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Price:{row.price}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Rating:{row.rating.rate}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
       ))}
  </Grid>

    </div>
  )
}

export default Home