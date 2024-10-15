import React, { useState } from "react";
import { TextField, Button, Box, Typography, Grid, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Importing useNavigate

const AddFinance = () => {
  const [formData, setFormData] = useState({
    memberType: "", // New state for member type
    existingMember: "",
    name: "",
    title: "",
    mobile: "",
    email: "",
    department: "",
    joinDate: "",
    address: "",
    state: "",
    gender: "",
    occupation: "",
    status: "",
    welfareContribution: "",
    memberSince: "",
    numChildren: "",
    payTithe: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Initializing navigate function

  const existingMembers = [
    { name: "John Doe", id: 1 },
    { name: "Kenneth Johnson", id: 2 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear all fields except username and password if existing member is selected
    if (name === "memberType" && value === "Existing Member") {
      setFormData((prevData) => ({
        ...prevData,
        existingMember: "", // Reset existing member field
        // Reset other fields if necessary
        name: "",
        title: "",
        mobile: "",
        email: "",
        department: "",
        joinDate: "",
        address: "",
        state: "",
        gender: "",
        occupation: "",
        status: "",
        welfareContribution: "",
        memberSince: "",
        numChildren: "",
        payTithe: "",
        username: "",
        password: "",
      }));
    }
  };

  const handleExistingMemberChange = (e) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      existingMember: value,
    }));

    // Optionally populate formData with selected member's info here
    if (value) {
      const selectedMember = existingMembers.find(member => member.name === value);
      if (selectedMember) {
        // Populate fields with existing member's info here if necessary
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Finance Personnel Form Submitted:", formData);
    // Save the data, likely an API call to backend
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Back Button */}
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        Back
      </Button>

      <Typography variant="h4" gutterBottom>
        Add New Finance Personnel
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* New Dropdown for Member Type */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Member Type"
              name="memberType"
              select
              value={formData.memberType}
              onChange={handleChange}
              fullWidth
              required
            >
              <MenuItem value="">
                {/* <em>Select Member Type</em> */}
              </MenuItem>
              <MenuItem value="Existing Member">Existing Member</MenuItem>
              <MenuItem value="New Member">New Member</MenuItem>
            </TextField>
          </Grid>

          {/* Show Existing Member dropdown if 'Existing Member' is selected */}
          {formData.memberType === "Existing Member" && (
            <Grid item xs={12} md={6}>
              <TextField
                label="Select Existing Member"
                name="existingMember"
                select
                value={formData.existingMember}
                onChange={handleExistingMemberChange}
                fullWidth
                required
              >
                <MenuItem value="">
                  {/* <em>Select an Existing Member</em> */}
                </MenuItem>
                {existingMembers.map((member) => (
                  <MenuItem key={member.id} value={member.name}>
                    {member.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}

          {/* Fields for New Member remain the same */}
          {formData.memberType === "New Member" && (
            <>
              {/* New Member fields... */}
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Join Date"
                  name="joinDate"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.joinDate}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Gender"
                  name="gender"
                  select
                  value={formData.gender}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Contribution to Welfare"
                  name="welfareContribution"
                  select
                  value={formData.welfareContribution}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Member Since"
                  name="memberSince"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.memberSince}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Number of Children"
                  name="numChildren"
                  type="number"
                  value={formData.numChildren}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Do you pay tithe?"
                  name="payTithe"
                  select
                  value={formData.payTithe}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField>
              </Grid>
            </>
          )}

          {/* Username and Password Fields for Existing Members */}
          {formData.memberType === "Existing Member" && (
            <>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
            </>
          )}

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddFinance;
