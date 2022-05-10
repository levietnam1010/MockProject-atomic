import React, { useState } from "react";
import Nav from '../../molecules/Nav/Nav';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from '@mui/material/Divider';
import { Link as LinkRouter } from "react-router-dom";
import FooterLayout from '../../molecules/Footer/Footer';
import Footer from "../../molecules/Footer/Footer";

const theme = createTheme();

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');

    const validate = () => {
        let isValid = true;
        const patt = '/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/';
        if (email === '') {
            isValid = false;
            setErrEmail('Required');
        } else if (!(patt.test(email))) {
            isValid = false;
            setErrEmail('Invalid email');
        } else if (password === '') {
            isValid = false;
            setErrEmail('Required');
        } else {
            setErrEmail('');
        }

        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (validate()) {
            alert('ok');
            console.log({
                email: data.get('email'),
                password: data.get('password'),
            });
        }
    };

    return (
        <>
            <div className='container-fluid main-container'>
                <Nav></Nav>

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
                        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                // value={email}
                                autoComplete="email"
                                autoFocus
                                helperText={errEmail}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                // value={password}
                                autoComplete="current-password"
                                helperText={errPassword}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                sx={{ mt: 3, mb: 2 }}
                                type="submit"
                                fullWidth
                                variant="contained"
                            // onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <LinkRouter to="/signup">
                                        {"Don't have an account? Sign Up"}
                                    </LinkRouter>
                                </Grid>
                            </Grid>
                            <Divider
                                sx={{
                                    mt: 2
                                }}
                            >
                                <Typography sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                                    OR SIGN IN WITH
                                </Typography>
                            </Divider>
                            <Grid container
                                sx={{
                                    justifyContent: "center"
                                }}
                            >
                                <Grid item>
                                    <Button
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        <FacebookIcon />
                                    </Button>
                                    <Button
                                        type="submit"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        <GoogleIcon />
                                    </Button>
                                    <Button
                                        type="submit"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        <TwitterIcon />
                                    </Button>
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