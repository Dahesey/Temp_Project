import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const ShowFinance = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        // minHeight: '100vh',
      }}
    >
      <Typography variant="h4" component="div" gutterBottom align="center">
        Finance Personnel Overview
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {/* Add New Personnel Button */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ padding: '20px', borderRadius: '15px', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" align="center">Add New Finance Personnel</Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate('/Admin/add-finance-personnel')}
              >
                Add Personnel
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Manage Personnel Button */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ padding: '20px', borderRadius: '15px', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" align="center">Manage Finance Personnel</Typography>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => navigate('/Admin/manage-finance-personnel')}
              >
                Manage Personnel
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShowFinance;
