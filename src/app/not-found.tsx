"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0A1128',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 700 }}>Coming Soon</h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', marginBottom: '2rem' }}>
        We are still building this section of the website. So far, we have only focused on perfecting the Homepage.
      </p>
      <Button variant="primary" size="lg" href="/">
        Return to Homepage
      </Button>
    </div>
  );
}
