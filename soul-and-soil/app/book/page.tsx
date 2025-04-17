"use client"
import {Typography, Link,FormControl,InputLabel,Select,MenuItem,Box, Card, CardMedia, CardContent, CardActions, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';

import { picnics } from '@/utils/picnics';
import { useAuth } from '@/context/AuthContext';

const BookPage = () => {
  const { picnics } = useAuth();
    const [category, setCategory] = useState('');

  const filteredPicnics = category !== '' && category !== 'All'
    ? picnics.filter((picnic) => picnic.category === category)
    : picnics;

    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Upcoming Picnics
        </Typography>


        {/* Category Filter */}
      <Box sx={{ mb: 4, width: 200 }}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Crochet">Crochet</MenuItem>
            <MenuItem value="Pottery">Pottery</MenuItem>
            <MenuItem value="Writing">Writing</MenuItem>
          </Select>
        </FormControl>
      </Box>
  
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {filteredPicnics.map((picnic) => (
            <Card
              key={picnic._id}
              sx={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={picnic.image}
                alt={picnic.title}
              />
              <CardContent>
                <Typography variant="h6">{picnic.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {picnic.description}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {picnic.location}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                Date: {new Date(picnic.date).toLocaleDateString()}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Available Spots: {picnic.availableSpots}
                </Typography>

              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button size="small" variant="outlined" fullWidth component={Link} href={`/book/${picnic._id}`}>
                  Book Now
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    );
  };

export default BookPage;
