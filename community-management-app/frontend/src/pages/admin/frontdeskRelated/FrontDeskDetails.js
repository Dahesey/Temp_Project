import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Dummy data for frontdesk personnel
const initialPersonnel = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Mr.',
    email: 'john@example.com',
    mobile: '+1 234 567 890',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Ms.',
    email: 'jane@example.com',
    mobile: '+1 345 678 901',
    status: 'Inactive'
  }
];

const FrontDeskDetails = () => {
  const [personnelList] = useState(initialPersonnel);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEdit = (id) => {
    // Logic for editing personnel
    console.log('Edit personnel with ID:', id);
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      <h2>Manage Frontdesk Personnel</h2>
      
      {/* Back button */}
      <Box display="flex" justifyContent="flex-start" sx={{ mb: 2 }}>
        <Button variant="outlined" color="secondary" onClick={handleBack}>
          Back
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personnelList.map((personnel) => (
            <TableRow key={personnel.id}>
              <TableCell>{personnel.name}</TableCell>
              <TableCell>{personnel.title}</TableCell>
              <TableCell>{personnel.email}</TableCell>
              <TableCell>{personnel.mobile}</TableCell>
              <TableCell>{personnel.status}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => handleEdit(personnel.id)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FrontDeskDetails;
