import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  IconButton,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import bgpic from "../assets/community8.jpg";
import { LightBlueButton } from "../components/buttonStyles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const defaultTheme = createTheme();

const LoginPage = ({ role }) => {
  const navigate = useNavigate();

//   const navigateHandler = (buttonClicked) => {
//     if (buttonClicked === "RegisterAdmin") {
//       navigate("/Adminregister");
//     }
//   };

  const dispatch = useDispatch();

  const { currentRole } = useSelector((state) => state.user);

  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [frontdeskNameError, setfrontdeskNameError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (role === "Frontdesk") {
      const frontdeskName = event.target.frontdeskName.value;
      const password = event.target.password.value;

      if (!frontdeskName || !password) {
        if (!frontdeskName) setfrontdeskNameError(true);
        if (!password) setPasswordError(true);
        return;
      }
      const fields = { frontdeskName, password };
      setLoader(true);
      dispatch((fields, role));
    } else {
      const email = event.target.email.value;
      const password = event.target.password.value;

      if (!email || !password) {
        if (!email) setEmailError(true);
        if (!password) setPasswordError(true);
        return;
      }

      const fields = { email, password };
      setLoader(true);
      dispatch((fields, role));
    }
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
    if (name === "frontdeskName") setfrontdeskNameError(false);
  };

  useEffect(() => {
    if (currentRole === "Admin") {
      navigate("/Admin/dashboard");
    } else {
      if (currentRole === "Frontdesk") {
        navigate("/FrontDesK/dashboard");
      }
    }
  }, [currentRole, navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          backgroundImage: `url(${bgpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        {/* Centered Form */}
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{
            height: "auto",
            padding: "2rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: "#2c2143" }}>
              {role} Login
            </Typography>
            <Typography variant="subtitle1">
              Welcome back! Please enter your details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2, width: "100%" }}
            >
              {role === "Frontdesk" ? (
                <>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="frontdeskName"
                    label="Enter your name"
                    name="frontdeskName"
                    autoComplete="name"
                    autoFocus
                    error={frontdeskNameError}
                    helperText={frontdeskNameError && "Name is required"}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Enter your email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={emailError}
                  helperText={emailError && "Email is required"}
                  onChange={handleInputChange}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={toggle ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                error={passwordError}
                helperText={passwordError && "Password is required"}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setToggle(!toggle)}>
                        {toggle ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Grid
                container
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <StyledLink href="#">Forgot password?</StyledLink>
              </Grid>
              <LightBlueButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {loader ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Login"
                )}
              </LightBlueButton>
              {role === "Admin" && (
                <Grid container>
                  <Grid>Don't have an account?</Grid>
                  <Grid item sx={{ ml: 2 }}>
                    <StyledLink to="/Adminregister"   > 
                
                      
                      Sign up
                    </StyledLink>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginPage;

const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #1a5276;
`;
