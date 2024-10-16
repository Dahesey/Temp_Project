import {
    Container,
    Grid,
    Paper,
    Typography,
    Box,
    Divider,
  } from "@mui/material";
  import styled from "styled-components";
  import { Doughnut } from "react-chartjs-2";
  import "chart.js/auto";
  import { useState, useEffect } from "react";
  
  const StyledPaper = styled(Paper)`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  
  const Title = styled(Typography)`
    font-weight: bold;
    margin-bottom: 16px;
  `;
  
  const FrontDeskHomepage = () => {
    const members = 136;
    const children = 50;
    const teens = 30; // You can replace this with your actual data
  
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentFormattedDate, setCurrentFormattedDate] = useState("");
  
    const membersData = {
      datasets: [
        {
          data: [members, 100, 36],
          backgroundColor: ["#1f618d", "#2ecc71", "#FFCE56"],
          borderWidth: 0,
          cutout: "70%",
          rotation: -90,
          circumference: 180,
        },
      ],
    };
  
    const childrenData = {
      datasets: [
        {
          data: [children, 40, 10],
          backgroundColor: ["#1f618d", "#2ecc71", "#FFCE56"],
          borderWidth: 0,
          cutout: "70%",
          rotation: -90,
          circumference: 180,
        },
      ],
    };
  
    const teensData = {
      datasets: [
        {
          data: [teens, 20, 10], // Example data for teens
          backgroundColor: ["#1f618d", "#2ecc71", "#FFCE56"],
          borderWidth: 0,
          cutout: "70%",
          rotation: -90,
          circumference: 180,
        },
      ],
    };
  
    //const newMembersByMonth = [0, 3, 5, 2, 4, 7, 8, 6, 9, 10, 12, 11];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        setCurrentTime(now);
        setCurrentFormattedDate(formatDate(now));
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const formatDate = (date) => {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const day = date.getDate();
      const suffix =
        day % 10 === 1 && day !== 11
          ? "st"
          : day % 10 === 2 && day !== 12
          ? "nd"
          : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";
      return `${date
        .toLocaleDateString("en-US", options)
        .replace(day, day + suffix)}`;
    };
  
    return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h6">{currentFormattedDate}</Typography>
          <Typography variant="h6">{currentTime.toLocaleTimeString()}</Typography>
        </Box>
  
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Title align="center">Members</Title>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "200px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {members}
                </Typography>
                <Doughnut data={membersData} options={{}} />
              </Box>
              <Divider />
              <Grid container justifyContent="space-between" sx={{ p: 2 }}>
                <Grid item>
                  <Typography color="#1f618d">Today's Attendance: {members}</Typography>
                </Grid>
                {/* <Grid item>
                  <Typography color="green">Total Active: 100 </Typography>
                </Grid>
                <Grid item>
                  <Typography color="orange">Total Inactive: 36 </Typography>
                </Grid> */}
              </Grid>
            </StyledPaper>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Title align="center">Children</Title>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "200px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {children}
                </Typography>
                <Doughnut data={childrenData} options={{}} />
              </Box>
              <Divider />
              <Grid container justifyContent="space-between" sx={{ p: 2 }}>
                <Grid item>
                  <Typography color="#1f618d">Today's Attendance: {children}</Typography>
                </Grid>
                {/* <Grid item>
                  <Typography color="green">Total Active: 40</Typography>
                </Grid>
                <Grid item>
                  <Typography color="orange">Total Inactive: 10</Typography>
                </Grid> */}
              </Grid>
            </StyledPaper>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <StyledPaper>
              <Title align="center">Teens</Title>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "200px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    position: "absolute",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {teens}
                </Typography>
                <Doughnut data={teensData} options={{}} />
              </Box>
              <Divider />
              <Grid container justifyContent="space-between" sx={{ p: 2 }}>
                <Grid item>
                  <Typography color="#1f618d">Today's Attendance: {teens}</Typography>
                </Grid>
                {/* <Grid item>
                  <Typography color="green">Total Active: 20</Typography>
                </Grid>
                <Grid item>
                  <Typography color="orange">Total Inactive: 10</Typography>
                </Grid> */}
              </Grid>
            </StyledPaper>
          </Grid>
  
          {/* Attendance Overview can be added here if needed */}
  
        </Grid>
  
        <Box sx={{ mt: 4 }}>
          {/* <Typography variant="h6">
            New Members This Month: {newMembersByMonth[selectedMonth]}
          </Typography> */}
          {/* <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select Month</InputLabel>
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {Array.from({ length: 12 }, (_, index) => (
                <MenuItem key={index} value={index}>
                  {new Date(0, index).toLocaleString("default", { month: "long" })}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </Box>
      </Container>
    );
  };
  
  export default FrontDeskHomepage;
  