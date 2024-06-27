import React from 'react';
import { Box, CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemIcon, ListItemText, Grid, Card, CardContent } from '@mui/material';
import { Home, AccountCircle, Settings, Mail, BarChart } from '@mui/icons-material';

const drawerWidth = 240;

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, bgcolor: 'background.paper', color: 'text.primary' }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: 'background.default',
                        color: 'text.primary'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {['Домой', 'Профиль', 'Настройки', 'Сообщения', 'Аналитика'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 ? <Home /> :
                                    index === 1 ? <AccountCircle /> :
                                        index === 2 ? <Settings /> :
                                            index === 3 ? <Mail /> :
                                                <BarChart />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Chart 1</Typography>
                                <Typography>Chart goes here...</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Chart 2</Typography>
                                <Typography>Chart goes here...</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Widget 1</Typography>
                                <Typography>Content goes here...</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Widget 2</Typography>
                                <Typography>Content goes here...</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Widget 3</Typography>
                                <Typography>Content goes here...</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Widget 4</Typography>
                                <Typography>Content goes here...</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
