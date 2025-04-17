'use client';
import type { Metadata } from "next";
import theme from '../theme/theme';


import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import { AuthProvider } from '@/context/AuthContext';


// export const metadata = {
//   title: 'Soul and Soil',
//   description: 'Book peaceful picnics in nature',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
          <Navbar/>
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            {children}
          </Container>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
