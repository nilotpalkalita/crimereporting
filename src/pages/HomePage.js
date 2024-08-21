import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import ReportList from '../components/ReportList';
import CategoryFilter from '../components/CategoryFilter';
import { fetchReports } from '../api/reports';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const fetchedReports = await fetchReports();
      setReports(fetchedReports);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredReports = selectedCategory === 'All'
    ? reports
    : reports.filter(report => report.category.toLowerCase() === selectedCategory.toLowerCase());

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
      <ReportList reports={filteredReports} />
    </Container>
  );
};

export default HomePage;