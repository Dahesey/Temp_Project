import React from 'react';
import { Grid, Paper, Box, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import BISHOP from '../assets/BISHOP.jpg'; 
import LOGO from "../assets/Logo.jpg";
import BackgroundImage from '../assets/community7.avif'; 

const ChooseUser = () => {
  const navigate = useNavigate();

  const navigateHandler = (user) => {
    if (user === "Admin") {
      navigate('/LoginPage'); 
    } else if (user === "Frontdesk") {
      navigate('/loginpage/Frontdesklogin'); 
    } else if (user === "Finance") {
      navigate('/loginpage/Financelogin'); 
    }
  };



  return (
    <StyledBackground>
      <StyledContainer>
        <Container>
          <Logo src={LOGO} alt="Logo" />
          <Grid container spacing={4}>
            {/* Left Side for Image */}
            <Grid item xs={12} md={6}>
              <ImageSection>
                {/* <img src={BISHOP} alt="example" /> */}
              </ImageSection>
            </Grid>

            {/* Right Side for Cards */}
            <Grid item xs={12} md={6}>
              <StackedCards container spacing={7} justifyContent="center">
                {/* Horizontal layout for cards */}
                <Grid item xs={12} sm={4}> {/* Adjusted size to create space for horizontal layout */}
                  <StyledPaper elevation={3} onClick={() => navigateHandler("Admin")}>
                    <Box mb={2}>
                      <AccountCircle fontSize="large" />
                    </Box>
                    <StyledTypography>Admin</StyledTypography>
                    <StyledText>
                      Login as administrator to access the dashboard and manage the system
                    </StyledText>
                  </StyledPaper>
                </Grid>

                <Grid item xs={12} sm={4}> {/* Adjusted size to create space for horizontal layout */}
                  <StyledPaper elevation={3} onClick={() => navigateHandler("Frontdesk")}>
                    <Box mb={2}>
                      <AccountCircle fontSize="large" />
                    </Box>
                    <StyledTypography>Front Desk</StyledTypography>
                    <StyledText>
                      Login as front desk to check in members and manage attendance
                    </StyledText>
                  </StyledPaper>
                </Grid>

                <Grid item xs={12} sm={4}> {/* Adjusted size to create space for horizontal layout */}
                  <StyledPaper elevation={3} onClick={() => navigateHandler("Finance")}>
                    <Box mb={2}>
                      <AccountCircle fontSize="large" />
                    </Box>
                    <StyledTypography>Finance</StyledTypography>
                    <StyledText>
                      Login as finance personnel to manage all financial aspects of the system
                    </StyledText>
                  </StyledPaper>
                </Grid>
              </StackedCards>
            </Grid>
          </Grid>
        </Container>
      </StyledContainer>
    </StyledBackground>
  );
};

export default ChooseUser;

// Styled components
const Logo = styled.img`
  position: absolute; 
  top: 20px; 
  left: 20px; 
  width: 100px; 
  height: auto; 
`;

const StyledBackground = styled.div`
  background: url(${BackgroundImage}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8); /* Add a white transparent overlay */
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const StackedCards = styled(Grid)`
  display: flex;
  flex-direction: row; /* Changed to row for horizontal layout */
  align-items: flex-start; /* Align cards to the start */
  justify-content: center; /* Center the cards */
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  width: 100%;
  max-width: 300px;

  &:hover {
    background-color: #00796b;
    color: black;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
  color: black;
`;

const StyledText = styled.p`
  color: black;
  margin: 0;
`;
