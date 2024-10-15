import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Dummy data for finance personnel
const initialFinancePersonnel = [
  {
    id: 1,
    name: 'Alice Williams',
    title: 'Accountant',
    email: 'alice@example.com',
    mobile: '+1 234 567 890',
    status: 'Active',
    department: 'Finance'
  },
  {
    id: 2,
    name: 'Bob Johnson',
    title: 'Financial Analyst',
    email: 'bob@example.com',
    mobile: '+1 345 678 901',
    status: 'Inactive',
    department: 'Finance'
  }
];

const FinanceDetails = () => {
  const [personnelList] = useState(initialFinancePersonnel);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEdit = (id) => {
    // Logic for editing finance personnel
    console.log('Edit finance personnel with ID:', id);
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      <h2>Manage Finance Personnel</h2>
      <Button variant="outlined" onClick={handleBack} style={{ marginBottom: '20px' }}>
        Back
      </Button>
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

export default FinanceDetails;
