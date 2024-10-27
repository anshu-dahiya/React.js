import React, { useEffect, useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid2,
} from '@mui/material';

export default function ImgMediaCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await response.json();
        setPosts(json.slice(0, 10));

      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchPost();
  }, [])

  return (
    <Grid2 container spacing={4} justifyContent="center" sx={{ padding: 2 }}>
      {posts.map((post) => (
        <Grid2 item xs={12} sm={6} md={4} key={post.id}>
          <Card sx={{
            maxWidth: 345,
            bgcolor: "black",
            margin: 4
          }}>
            <CardMedia 
            component="img"
            alt={post.title}
            height="140"
            image={post.thumbnailUrl}
            />
                 
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color='white'>
                {post.title}
              </Typography>
              
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}