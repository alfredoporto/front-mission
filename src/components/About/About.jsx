import React from "react";
import myself from '../../images/io.jpg';
import { CardMedia, Divider, Grid, Typography } from '@material-ui/core';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AiFillLinkedin, AiFillGitlab, AiFillInstagram, AiFillMail } from 'react-icons/ai';

import useStyles from './styles';
import MirHeader from "../Shared/MirHeader";


function About() {
    const classes = useStyles();

    return (
        <Grid >
            <Grid>
                <MirHeader headers={{ title: "Make It Real", subheader: "Maker" }} />
            </Grid>

            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item xs={12} sm={4} justify="center">
                    <CardMedia className={classes.cardMedia}
                        sx={{ maxWidth: 200 }}
                        component="img"
                        height="auto"
                        image={myself}
                        alt=""
                    />
                    <Typography variant="caption" display="block" align="center">
                        Before covid was a thing
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={8}>

                    <Typography variant="h3" align="left" className={classes.typographyTitle}>
                        Alfredo Portocarrero
                    </Typography>

                    <Typography variant="h5" style={{ paddingBottom: '2rem' }}>
                        Software Engineer
                    </Typography>

                    <Typography paragraph>
                        <Typography variant="h6">About me</Typography>
                        <Typography variant="body1" color="textSecondary" >
                            My name is Alfredo Portocarrero and I am a software engineer; I've worked in both backend and frontend having Java as his go-to language, working with sql and no-sql databases like PostgreSQL, Oracle, Apache Cassandra and so on, and various frameworks such as Spring Boot, Hibernate, Angular for software on promise and cloud.
                            I always try to keep in mind the maintainability and extensibility as directives for building software.
                        </Typography>
                        <br />
                        <Typography variant="body1" color="textSecondary" >
                            In the last couple of months, I've learned many things and the most interesting ones have been:
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemText secondary="React.js following along side with a new way of thinking when creating UI components"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText secondary="Best practices for working in teams with git"></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText secondary="How the DOM works, the browser engine and best uses cases for when to use NodeJS"></ListItemText>
                            </ListItem>
                        </List>

                        <Typography variant="body1" color="textSecondary" gutterBottom style={{ paddingTop: '1rem' }}>
                            In my free time I love to go to the gym, play videogames and walk my dogs :)
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: '1rem' }}>
                            Feel free to contact me at:
                        </Typography>
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding component="a" href="mailto:benalfred42@gmail.com" >
                                        <ListItemIcon>
                                            <AiFillMail size="2rem" />
                                        </ListItemIcon>
                                        <ListItemText primary="Mail" />
                                    </ListItem>
                                    <ListItem disablePadding component="a" href="https://linkedin.com/in/alfredo-portocarrero">
                                        <ListItemIcon>
                                            <AiFillLinkedin size="2rem" />
                                        </ListItemIcon>
                                        <ListItemText primary="Linkedin" />
                                    </ListItem>
                                    <ListItem disablePadding component="a" href="https://gitlab.com/alfredoporto">
                                        <ListItemIcon>
                                            <AiFillGitlab size="2rem" />
                                        </ListItemIcon>
                                        <ListItemText primary="Gitlab" />
                                    </ListItem>
                                    <ListItem disablePadding component="a" href="https://www.instagram.com/alfredoporto.4/" >
                                        <ListItemIcon>
                                            <AiFillInstagram size="2rem" />
                                        </ListItemIcon>
                                        <ListItemText primary="Instagram" />
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>

                        <Divider />

                    </Typography>

                </Grid>
            </Grid>


        </Grid>

    );
}

export default About;