import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { orange } from "@mui/material/colors";

function Footer() {
    return (
        <Footer>
            <Box
                sx={{
                    backgroundColor: orange[100],
                }
                }>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{
                                borderBottom: 1,
                            }}>
                                Help
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Contact</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Support</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Privacy</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{
                                borderBottom: 1,
                            }}>
                                Account
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Login</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Register</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{
                                borderBottom: 1,
                            }}>
                                Message
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Backup</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">History</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">Roll</Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{
                        textAlign: 'center',
                        paddingTop: {
                            xs: 5,
                            sm: 10,
                        },
                        paddingBottom: {
                            xs: 5,
                            sm: 10,
                        },
                    }}>
                        Copyright: Team 4
                    </Box>
                </Container>
            </Box>
        </Footer>
    );
}

export default Footer;