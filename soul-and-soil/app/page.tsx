"use client";

import { Box, Typography, Button, Container, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";

const experiences = [
  {
    title: "Crochet by the Lake",
    description: "Slow moments. Gentle threads. Lakeside peace.",
    image: "/images/crochet.jpg",
  },
  {
    title: "Pottery in the Woods",
    description: "Earth between your fingers. Trees above your head.",
    image: "/images/pottery.jpg",
  },
  {
    title: "Writing Under the Sky",
    description: "Let thoughts flow as the clouds drift by.",
    image: "/images/writing.jpg",
  },
];

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "#fdf6f0", minHeight: "100vh", boxShadow: 3 }}>
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
        }}
      >
        <Box sx={{ bgcolor: "rgba(255,255,255,0.75)", p: 4, borderRadius: 4, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 500, fontFamily: "Georgia" }}>
            Soul and Soil
          </Typography>
          <Typography sx={{ mt: 2, fontSize: "1.2rem", fontStyle: "italic" }}>
          Gather. Create. Connect.
          </Typography>
          
          <Button
            variant="outlined"
            sx={{ mt: 4, borderRadius: "20px", borderColor: "#6a994e", color: "#6a994e" }}
            component={Link}
            href="/book"
          >
            Explore Picnics
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Container sx={{ py: 6, display:"flex", flexDirection:"column", textAlign: "center", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 500, color: "#6a994e" }}>
          A Gentle Escape.
        </Typography>
        <Typography sx={{ maxWidth: "600px", lineHeight: 1.6,}}>
        At Soul and Soil, we believe in the quiet magic of slowing down.
        </Typography>
        <Typography sx={{ maxWidth: "600px", lineHeight: 1.6, mt: 2 }}>
Every Saturday, we gather under open skies—by lakes, under trees, or in open meadows—to reconnect with what makes us feel most alive. Our picnics are not just about food and blankets; they are themed experiences that invite you to be—to write, to paint, to read, to create, or simply to exist, gently.
        </Typography>
        <Typography sx={{ maxWidth: "600px", lineHeight: 1.6, mt: 2 }}>
Whether you're threading yarn into something beautiful, shaping clay with bare hands, or scribbling poems on sunlit pages, each picnic is a soft rebellion against the rush of everyday life. We curate spaces where strangers become companions, screens are set aside, and souls find a little more space to breathe.
</Typography>
        <Typography sx={{ maxWidth: "600px", lineHeight: 1.6, mt: 2 }}>
These aren’t events. They’re pauses.
        </Typography>
        <Typography sx={{ maxWidth: "600px", lineHeight: 1.6,}}>
Moments stitched together with art, nature, and warmth.
        </Typography>
        <Typography sx={{ maxWidth: "600px", lineHeight: 1.6,}}>
Come find your Saturday story—with Soul and Soil.
        </Typography>
      </Container>

      

      

      {/* Footer CTA */}
      <Box sx={{ py: 5, textAlign: "center", bgcolor: "#fff4ec", mt: 6 }}>
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          Ready to book your pause?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, borderRadius: "20px", bgcolor: "#6a994e", ":hover": { bgcolor: "#333" } }}
          component={Link}
          href="/book"
        >
          Book a Picnic
        </Button>
      </Box>
      <Box bgcolor="#f5f5f5" py={4} mt={5} mb={5}>
  <Typography textAlign="center" variant="body2" color="textSecondary">
    © 2025 Soul and Soil • All Rights Reserved
  </Typography>
  </Box>
    </Box>
  );
}
