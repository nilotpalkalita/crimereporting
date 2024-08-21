import React from 'react';
import { Container, Typography } from '@mui/material';
import ReportForm from '../components/ReportForm';

const ReportPage = () => {
  const handleSubmit = (reportData) => {
    // Handle report submission
    console.log(reportData);
    // Redirect to home page or show success message
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Report a Crime
      </Typography>
      <ReportForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default ReportPage;