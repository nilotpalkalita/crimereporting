import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import ReportList from '../components/ReportList';
import CategoryFilter from '../components/CategoryFilter';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [reports, setReports] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Filter reports based on the selected category
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Crime Reports
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/report"
        sx={{ mb: 4 }}
      >
        Report a Crime
      </Button>
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ReportList reports={reports} />
    </Container>
  );
};

export default HomePage;