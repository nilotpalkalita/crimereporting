import React from 'react';
const API_URL = 'https://crimereporting.vercel.app/api';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReportForm from '../components/ReportForm';
import { submitReport } from '../api/reports';

const ReportPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (reportData) => {
    try {
      await submitReport(reportData);
      alert('Report submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Error submitting report. Please try again.');
    }
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