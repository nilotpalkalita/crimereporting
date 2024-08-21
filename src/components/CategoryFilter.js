import React from 'react';
import { Chip, Box } from '@mui/material';

const categories = ['All', 'Traffic', 'People', 'Business', 'Others'];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 0.5 }}>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          clickable
          color={selectedCategory === category ? 'primary' : 'default'}
          onClick={() => onCategoryChange(category)}
        />
      ))}
    </Box>
  );
};

export default CategoryFilter;