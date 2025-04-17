"use client";

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Typography, Container, Button, Card, CardContent } from '@mui/material';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

export default function Page() {
  const params = useParams(); // { _id: "123" }
  const id = params?._id as string;
  const { user } = useAuth();
  const router = useRouter();
  const [picnic, setPicnic] = useState<any>(null);

  useEffect(() => {
    const fetchPicnic = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/picnics/getpicnic/${id}`);
        setPicnic(res.data);
      } catch (err) {
        console.error("Error fetching picnic:", err);
        alert("Error fetching picnic");
        router.push("/");
      }
    };

    if (id) fetchPicnic();
  }, [id]);

  const handleBooking = async () => {
    if (!user) {
      alert("Please login to book a picnic");
      router.push("/login");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:5000/api/user/reserve/reservespot`, {
        userId: user._id,
        picnicId: id,
      });

      alert("Booking confirmed!");
      router.push("/book");
    } catch (error) {
      alert("Error booking picnic");
      console.error(error);
    }
  };

  if (!picnic) return <div>Loading...</div>;

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4">{picnic.title}</Typography>
          <Typography>{picnic.description}</Typography>
          <Typography>Date: {new Date(picnic.date).toLocaleDateString()}</Typography>
          <Typography>Spots Available: {picnic.availableSpots}</Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleBooking}
          >
            Confirm Booking
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
