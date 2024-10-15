import { Container, Grid, Paper, Typography, Box, Divider } from '@mui/material';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js

const AdminHomePage = () => {
    const members = 136;
    const children = 50;
    const totalGiving = 5000;
    const profitMargin = 35;
    const income = 7000;
    const expenses = 2000;
    const totalAttendance = 75;
    const attendanceGoal = 100;
    const eventData = [5, 12, 18]; // Example event days left

    // Data for Members Overview
    const membersData = {
        datasets: [
            {
                data: [136, 100, 36], // Example data (Active, Inactive, Registered)
                backgroundColor: ['#1f618d', '#2ecc71', '#FFCE56'],
                borderWidth: 0,
                cutout: '70%', // Hollow center
                rotation: -90, // Start from the top
                circumference: 180 // Half circle
            }
        ]
    };

    // Data for Children Overview
    const childrenData = {
        datasets: [
            {
                data: [50, 40, 10], // Example data (Registered, Active, Inactive)
                backgroundColor: ['#1f618d', '#2ecc71', '#FFCE56'],
                borderWidth: 0,
                cutout: '70%', // Hollow center
                rotation: -90, // Start from the top
                circumference: 180 // Half circle
            }
        ]
    };

    const semiCircleOptions = {
        rotation: -Math.PI, // Start at the top
        circumference: Math.PI, // Semi-circle
        plugins: {
            legend: {
                display: false // Hide the legend
            }
        }
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                {/* Members Overview */}
                <Grid item xs={12} md={4}>
                    <StyledPaper>
                        <Title>Members Overview</Title>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%',
                                height: '200px'
                            }}
                        >
                            {/* Total number in the center */}
                            <Typography
                                variant="h5"
                                sx={{
                                    position: 'absolute',
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}
                            >
                                {members}
                            </Typography>
                            {/* Semi-circle chart */}
                            <Doughnut data={membersData} options={semiCircleOptions} />
                        </Box>
                        <Divider />
                        <Grid container justifyContent="space-around">
                            <OverviewStat label="Registered" value="136" color="#1f618d" />
                            <OverviewStat label="Active" value="100" color="#2ecc71" />
                            <OverviewStat label="Inactive" value="36" color="#FFCE56" />
                        </Grid>
                    </StyledPaper>
                </Grid>

                {/* Children Overview */}
                <Grid item xs={12} md={4}>
                    <StyledPaper>
                        <Title>Children Overview</Title>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                width: '100%',
                                height: '200px'
                            }}
                        >
                            {/* Total number in the center */}
                            <Typography
                                variant="h5"
                                sx={{
                                    position: 'absolute',
                                    fontWeight: 'bold',
                                    color: '#333'
                                }}
                            >
                                {children}
                            </Typography>
                            {/* Semi-circle chart */}
                            <Doughnut data={childrenData} options={semiCircleOptions} />
                        </Box>
                        <Divider />
                        <Grid container justifyContent="space-around">
                            <OverviewStat label="Registered" value="50" color="#1f618d" />
                            <OverviewStat label="Active" value="40" color="#2ecc71" />
                            <OverviewStat label="Inactive" value="10" color="#FFCE56" />
                        </Grid>
                    </StyledPaper>
                </Grid>

                {/* Financial Overview */}
                <Grid item xs={12} md={4}>
                    <StyledPaper>
                        <Title>Financial Overview</Title>
                        <FinanceStat label="Total Revenue" value={`$${totalGiving}`} />
                        <FinanceStat label="Profit Margin" value={`${profitMargin}%`} />
                        <FinanceStat label="Income" value={`$${income}`} />
                        <FinanceStat label="Expenses" value={`$${expenses}`} />
                        <Typography variant="caption" sx={{ color: 'gray', mt: 1 }}>
                            Check daily to keep it on track
                        </Typography>
                    </StyledPaper>
                </Grid>

                {/* Attendance Section */}
                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <SubHeader>Attendance</SubHeader>
                        <Typography variant="caption" display="block" sx={{ mb: 1 }}>View Stats</Typography>
                        <Box sx={{ width: '70%', mx: 'auto' }}>
                            <Doughnut data={childrenData} /> {/* Replace with actual attendance data */}
                        </Box>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                            {totalAttendance}/{attendanceGoal}
                        </Typography>
                    </StyledPaper>
                </Grid>

                {/* Upcoming Events Section */}
                <Grid item xs={12} md={6}>
                    <StyledPaper>
                        <SubHeader>Upcoming Events</SubHeader>
                        <EventList>
                            {eventData.map((event, idx) => (
                                <EventItem key={idx}>
                                    <span>Event {idx + 1} - {event} days left </span>
                                </EventItem>
                            ))}
                        </EventList>
                    </StyledPaper>
                </Grid>
            </Grid>
        </Container>
    );
};

// Styled Components and Helper Functions
const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const SubHeader = styled.h4`
  font-size: 1.15rem;
  margin-bottom: 16px;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EventItem = styled.li`
  font-size: 1rem;
  margin-bottom: 8px;
`;

const OverviewStat = ({ label, value, color }) => (
    <Grid item xs={4}>
        <Typography variant="body2" sx={{ color }}>
            {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
    </Grid>
);

const FinanceStat = ({ label, value }) => (
    <Box sx={{ mb: 2 }}>
        <Typography variant="body2" sx={{ color: 'gray' }}>
            {label}
        </Typography>
        <Typography variant="h6">{value}</Typography>
    </Box>
);

export default AdminHomePage;
