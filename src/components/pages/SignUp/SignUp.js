import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../../molecules/Footer/Footer';
import Nav from '../../molecules/Nav/Nav';
import { Link as LinkRouter } from 'react-router-dom';
import axios from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const REGISTER_URL = "/register";

export default function SignUp() {
    const [firstName, setFirstName] = React.useState('');
    const [errFirstName, setErrFirstName] = React.useState('');
    const [validFirstName, setValidFirstName] = React.useState(false);

    const [lastName, setLastName] = React.useState('');
    const [errLastName, setErrLastName] = React.useState('');
    const [validLastName, setValidLastName] = React.useState(false);


    const [email, setEmail] = React.useState('');
    const [errEmail, setErrEmail] = React.useState('');
    const [validEmail, setValidEmail] = React.useState(false);


    const [password, setPassword] = React.useState('');
    const [errPassword, setErrPassword] = React.useState('');
    const [validPassword, setValidPassword] = React.useState(false);


    const [success, setSuccess] = React.useState(false);

    const navigate = useNavigate();

    React.useEffect(() => {
        if (firstName === '') {
            setValidFirstName(false);
            setErrFirstName('This field is required');
        } else {
            setValidFirstName(true);
            setErrFirstName('');
        }
        console.log(firstName);
    }, [firstName]);

    React.useEffect(() => {
        if (lastName === '') {
            setValidLastName(false);
            setErrLastName('This field is required');
        } else {
            setValidLastName(true);
            setErrLastName('');
        }
        console.log(lastName);
    }, [lastName]);

    React.useEffect(() => {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (email === '') {
            setValidEmail(false);
            setErrEmail('This field is required');
        } else if (!(regexEmail.test(email))) {
            setValidEmail(false);
            setErrEmail('Email is not valid');
        } else {
            setValidEmail(true);
            setErrEmail('');
        }
        console.log(email);
    }, [email]);


    React.useEffect(() => {
        if (password === '') {
            setValidPassword(false);
            setErrPassword('This field is required');
        } else {
            setValidPassword(true);
            setErrPassword('');
        }
        console.log(password);
    }, [password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validFirstName && validLastName && validEmail && validPassword) {
            alert('Đăng ký thành công');
            navigate("/login");
        } else {
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
        } catch (error) {
            console.log(error);

        }

    };

    return (
        <>
            <div className='container-fluid main-container'>
                <Nav />
            </div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        onChange={(e) => setFirstName(e.currentTarget.value)}
                                        autoComplete="given-name"
                                        error
                                        helperText={errFirstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        onChange={(e) => setLastName(e.currentTarget.value)}
                                        error
                                        helperText={errLastName}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                        error
                                        helperText={errEmail}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={(e) => setPassword(e.currentTarget.value)}
                                        error
                                        helperText={errPassword}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end" sx={{ marginBottom: 5 }}>
                                <Grid item>
                                    <LinkRouter to="/login">
                                        Already have an account? Sign in
                                    </LinkRouter>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <Footer />
        </>
    );
}