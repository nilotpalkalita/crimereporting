import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const ReportList = ({ reports }) => {
  if (reports.length === 0) {
    return <Typography>No reports available</Typography>;
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {reports.map((report) => (
        <ListItem alignItems="flex-start" key={report.id}>
          <ListItemText
            primary={report.category}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {report.message}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ReportList;