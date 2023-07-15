import React from 'react'
import { useState } from 'react'
import { useProductContext } from '../context/ProductContext'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export const Home = () => {

const {products} = useProductContext() // getting data 
console.log(products)

    
  return (
    <>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        Here is All the Products List
      </h1>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {products.map((ele) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500 }}
              image={ele.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ele.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary" size="large">
                RS- {ele.price}
              </Button>
              <Button color="secondary" size="large">
                Share
              </Button>
              <Button color="secondary" size="large">
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
}
