import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import bgpic from "../../assets/community8.jpg";
import { LightBlueButton } from "../../components/buttonStyles";
import { registerUser } from "../../redux/userRelated/userHandle";
import styled from "styled-components";

const defaultTheme = createTheme();

const AdminRegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, currentUser, response, error, currentRole } = useSelector(
    (state) => state.user
  );

  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const [loader, setLoader] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setconfirmPasswordError] = useState(false);
  const [adminFirstNameError, setAdminFirstNameError] = useState(false);
  const [adminLastNameError, setAdminLastNameError] = useState(false);
  const [churchNameError, setchurchNameError] = useState(false);
  const role = "Admin";

  const handleSubmit = (event) => {
    event.preventDefault();

    const adminFirstName = event.target.adminFirstName.value;
    const adminLastName = event.target.adminLastName.value;
    const churchName = event.target.churchName.value;
    const email = event.target.email.value;
    const contact = event.target.contact.value;
    const gender = event.target.gender.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (
      !adminFirstName ||
      !adminLastName ||
      !churchName ||
      !email ||
      !contact ||
      !password ||
      !gender ||
      !confirmPassword
    ) {
      if (!adminFirstName) setAdminFirstNameError(true);
      if (!adminLastName) setAdminLastNameError(true);
      if (!churchName) setchurchNameError(true);
      if (!email) setEmailError(true);
      if (!contact) setContactError(true);
      if (!gender) setGenderError(true);
      if (!password) setPasswordError(true);
      if (!confirmPassword) setconfirmPasswordError(true);

      return;
    }

    const fields = {
      adminFirstName,
      adminLastName,
      email,
      contact,
      gender,
      password,
      confirmPassword,
      role,
      churchName,
    };
    setLoader(true);
    dispatch(registerUser(fields, role));
  };

  const handleInputChange = (event) => {
    const { name } = event.target; // Changed this line to destructure 'name'
    if (name === "email") setEmailError(false);
    if (name === "password") setPasswordError(false);
    if (name === "confirmPassword") setconfirmPasswordError(false);
    if (name === "contact") setContactError(false);
    if (name === "gender") setGenderError(false);
    if (name === "adminFirstName") setAdminFirstNameError(false);
    if (name === "adminLastName") setAdminLastNameError(false);
    if (name === "churchName") setchurchNameError(false);
  };

  useEffect(() => {
    if (
      status === "success" ||
      (currentUser !== null && currentRole === "Admin")
    ) {
      navigate("/Admin/dashboard");
    } else if (status === "failed") {
      setLoader(false);
    } else if (status === "error") {
      console.log(error);
    }
  }, [status, currentUser, currentRole, navigate, error, response]);

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
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            background: "rgba(255, 255, 255, 0.8)",
            // backgroundColor: "rgba(255, 255, 255, 0.50)",
            // backdropFilter: "blur(10px)",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: "#2f284b" }}>
              Admin Register
            </Typography>
            <Typography variant="h7" align="center">
              Create your own church management system by registering as an
              admin.
              <br />
              You will be able to add front desk and finance personnel and
              manage the system.
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="adminFirstName"
                    label="Enter your first name"
                    name="adminFirstName"
                    autoComplete="name"
                    autoFocus
                    error={adminFirstNameError}
                    helperText={adminFirstNameError && "First Name is required"}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="adminLastName"
                    label="Enter your last name"
                    name="adminLastName"
                    autoComplete="name"
                    error={adminLastNameError}
                    helperText={adminLastNameError && "Last Name is required"}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="gender"
                    label="Select your gender"
                    name="gender"
                    select
                    error={genderError}
                    helperText={genderError && "Gender selection is required"}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="churchName"
                    label="Create your church name"
                    name="churchName"
                    autoComplete="off"
                    error={churchNameError}
                    helperText={churchNameError && "Church name is required"}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Enter your email"
                    name="email"
                    autoComplete="email"
                    error={emailError}
                    helperText={emailError && "Email is required"}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="contact"
                    label="Enter your contact number"
                    name="contact"
                    autoComplete="tel"
                    error={contactError}
                    helperText={contactError && "Contact number is required"}
                    onChange={handleInputChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={togglePassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    error={passwordError}
                    helperText={passwordError && "Password is required"}
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setTogglePassword(!togglePassword)}
                          >
                            {togglePassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={toggleConfirmPassword ? "text" : "password"} // Use the toggleConfirmPassword state
                    id="confirmPassword"
                    autoComplete="current-password"
                    error={confirmPasswordError}
                    helperText={
                      confirmPasswordError && "Confirm Password is required"
                    }
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setToggleConfirmPassword(!toggleConfirmPassword)
                            }
                          >
                            {toggleConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <FormControlLabel
                control={
                  <Checkbox
                    value="agree"
                    color="primary"
                    required
                    name="agree"
                  />
                }
                label="I agree to the terms and conditions"
              />
              <LightBlueButton
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "100%",
                  backgroundColor: "#3e8e41",
                  "&:hover": {
                    backgroundColor: "#1b5e20",
                  },
                }}
              >
                {loader ? <CircularProgress size={24} /> : "Register"}
              </LightBlueButton>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <StyledLink to="/Adminlogin">
                    Already have an account? Log in
                  </StyledLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default AdminRegisterPage;


const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #1a5276;
`;
