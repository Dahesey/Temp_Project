import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Divider,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import back icon
import { useNavigate } from "react-router-dom"; // Import navigation hook

const ServiceAttendance = () => {
  const navigate = useNavigate(); // Initialize navigation hook

  // Dummy data for church services
  const churchServices = [
    {
      eventId: "001",
      serviceName: "Sunday Morning Worship",
      serviceDate: "2024-10-01",
      totalMembersCheckedIn: 250,
      male: 100,
      female: 120,
      children: 20,
      teens: 10,
    },
    {
      eventId: "002",
      serviceName: "Midweek Bible Study",
      serviceDate: "2024-10-04",
      totalMembersCheckedIn: 150,
      male: 70,
      female: 60,
      children: 10,
      teens: 10,
    },
    {
      eventId: "003",
      serviceName: "Youth Service",
      serviceDate: "2024-10-08",
      totalMembersCheckedIn: 100,
      male: 40,
      female: 40,
      children: 0,
      teens: 20,
    },
  ];

  // State to store the selected church service
  const [selectedService, setSelectedService] = useState("001");

  // Get the selected service details
  const selectedServiceDetails = churchServices.find(
    (service) => service.eventId === selectedService
  );

  // Chart data based on selected service
  const attendanceChartData = {
    labels: ["Male", "Female", "Children", "Teens"],
    datasets: [
      {
        label: `Attendance for ${selectedServiceDetails.serviceName}`,
        data: [
          selectedServiceDetails.male,
          selectedServiceDetails.female,
          selectedServiceDetails.children,
          selectedServiceDetails.teens,
        ],
        backgroundColor: ["#3498db", "#e74c3c", "#2ecc71", "#f39c12"],
      },
    ],
  };

  // Chart options
  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
  };

  // Handle service selection
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  // Function to download the report (dummy implementation for now)
  const downloadReport = () => {
    alert(`Downloading report for ${selectedServiceDetails.serviceName}`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        position: "relative", // Add this line
      }}
    >
      {/* Styled Back Button */}
      <StyledIconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ fontSize: 40 }} />
      </StyledIconButton>

      <Typography variant="h4" align="center" gutterBottom>
        Attendance Overview
      </Typography>

      <Grid container spacing={3}>
        {/* Service Selector */}
        <Grid item xs={12}>
          <StyledPaper>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="service-select-label">Select Service</InputLabel>
              <Select
                labelId="service-select-label"
                value={selectedService}
                onChange={handleServiceChange}
                label="Select Service"
              >
                {churchServices.map((service) => (
                  <MenuItem key={service.eventId} value={service.eventId}>
                    {service.serviceName} ({service.serviceDate})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StyledPaper>
        </Grid>

        {/* Bar chart for selected service attendance */}
        <Grid item xs={12}>
          <StyledPaper>
            <Title align="center">
              Attendance Breakdown for {selectedServiceDetails.serviceName}
            </Title>
            <Box sx={{ width: "100%", height: 300 }}>
              <Bar data={attendanceChartData} options={barOptions} />
            </Box>
          </StyledPaper>
        </Grid>

        {/* Detailed view and report generation */}
        <Grid item xs={12}>
          <StyledPaper>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">
                Attendance Summary for {selectedServiceDetails.serviceName}
              </Typography>
              <Typography variant="body1">
                Date: {selectedServiceDetails.serviceDate}
              </Typography>
              <Typography variant="body1">
                Total Members Checked In:{" "}
                {selectedServiceDetails.totalMembersCheckedIn}
              </Typography>
              <Typography variant="body1">
                Male: {selectedServiceDetails.male}
              </Typography>
              <Typography variant="body1">
                Female: {selectedServiceDetails.female}
              </Typography>
              <Typography variant="body1">
                Children: {selectedServiceDetails.children}
              </Typography>
              <Typography variant="body1">
                Teens: {selectedServiceDetails.teens}
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />

            {/* Button to download the report */}
            <Button variant="outlined" onClick={downloadReport}>
              Download Report for {selectedServiceDetails.serviceName}
            </Button>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

// Styled Components
const StyledPaper = styled(Paper)`
  padding: 16px;
  background: #f5f5f5;
`;

const Title = styled(Typography)`
  margin-bottom: 16px;
  font-weight: bold;
`;

const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 10px;
  left: -5px;
  background-color: #f0f4f8;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #3498db;
  width: 48px;
  height: 48px;

  &:hover {
    background-color: rgba(52, 152, 219, 0.1);
  }
`;

export default ServiceAttendance;
