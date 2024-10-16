import { Link, useNavigate, useParams } from "react-router-dom";
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
import userCredentials from "../userCredentials";

const defaultTheme = createTheme();

const LoginPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentRole } = useSelector((state) => state.user);
  const [toggle, setToggle] = useState(false);
  const [loader, setLoader] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [frontdeskNameError, setFrontdeskNameError] = useState(false);

  const handleLoginRedirect = () => {
    navigate(`/${role}Dashboard`); // Navigate on click to the selected role's dashboard
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let fields;

    if (role === "Frontdesk") {
      fields = { frontdeskName: event.target.frontdeskName.value, password: event.target.password.value };
      // Check hardcoded credentials
      if (
        fields.frontdeskName === userCredentials.frontdesk.frontdeskName &&
        fields.password === userCredentials.frontdesk.password
      ) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: userCredentials.frontdesk });
        handleLoginRedirect();
        return;
      }
    } else {
      fields = { email: event.target.email.value, password: event.target.password.value };
      // Check hardcoded credentials
      if (role === "Admin") {
        if (
          fields.email === userCredentials.admin.email &&
          fields.password === userCredentials.admin.password
        ) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: userCredentials.admin });
          handleLoginRedirect();
          return;
        }
      } else if (role === "Finance") {
        if (
          fields.email === userCredentials.finance.email &&
          fields.password === userCredentials.finance.password
        ) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: userCredentials.finance });
          handleLoginRedirect();
          return;
        }
      }
    }
    
    setLoader(true);
    alert("Invalid credentials. Please try again.");
    // try {
    //   const response = await fetch('https://api.mock.com/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(fields),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     // Dispatch login success action with user data
    //     dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    //     // Optionally store token or user info in local storage
    //     localStorage.setItem('token', data.token);
    //     handleLoginRedirect();
    //   } else {
    //     // Show error message to the user
    //     console.error(data.message);
    //     alert(data.message || "Login failed!"); // Simple alert for demonstration
    //   }
    // } catch (error) {
    //   console.error('Login failed:', error);
    //   alert("Login failed due to network error. Please try again."); // Show network error
    // } finally {
    //   setLoader(false);
    // }
  };

  const handleInputChange = (event) => {
    const { name } = event.target;
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
    if (name === "frontdeskName") setFrontdeskNameError(false);
  };

  useEffect(() => {
    if (currentRole === "Admin") {
      navigate("/AdminDashboard");
    } else if (currentRole === "Frontdesk") {
      navigate("/Frontdesk/dashboard");
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
            background: "rgba(255, 255, 255, 0.8)",
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
                <StyledLink to="#" onClick={() => alert("Password recovery not implemented.")}>
                  Forgot password?
                </StyledLink>

              </Grid>
              <LightBlueButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {loader ?
                  <CircularProgress size={24} color="inherit" /> : "Login"
                }
              </LightBlueButton>
              {role === "Admin" && (
                <Grid container sx={{ mt: 2 }}>
                  <Grid item>
                    Don't have an account?
                  </Grid>
                  <Grid item sx={{ ml: 1 }}>
                    <StyledLink to="/Adminregister">Sign up</StyledLink>
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