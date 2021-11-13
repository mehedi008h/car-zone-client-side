import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import AddProduct from './Admin/AddProduct/AddProduct';
import useAuth from '../../hooks/useAuth';
import AdminRouter from '../Login/AdminRouter/AdminRouter';
import './Dashboard.css';
import ManageOrders from './Admin/ManageOrders/ManageOrders';
import MyOrder from './User/MyOrder/MyOrder';
import AddReview from './User/AddReview/AddReview';
import DashboardHome from './DashboardHome';
import Paymant from './User/Payment/Paymant';
import ManageProducts from './Admin/ManageProducts/ManageProducts';
import avater from '../../image/user.png';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar />
            <Divider /> */}
            <div className="text-center mt-5">
                {
                    user.photoURL ? <img className="nav-img" src={user.photoURL} alt="" /> :
                        <img className="nav-img" src={avater} alt="" />
                }

            </div>
            <div className="sidebar-link">
                <Link to={"/explore"} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Explore</Link>
                {admin && <Link to={`${url}/makeAdmin`} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Make Admin</Link>}
                {admin && <Link to={`${url}/addProduct`} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Add Product</Link>}
                {admin && <Link to={`${url}/manageProduct`} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Manage Product</Link>}
                {admin && <Link to={`${url}/manageOrder`} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Manage All Order</Link>}
                {!admin && <Link to={`${url}/pay`} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Pay</Link>}
                {!admin && <Link to={`${url}/myOrder`} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>My Order</Link>}
                {!admin && <Link to={`${url}/addReview`} className="link-item"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Add Review</Link>}
                <button onClick={logOut} className="btn-logout"><FontAwesomeIcon icon={faGoogle} className="me-4"></FontAwesomeIcon>Logout</button>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRouter path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRouter>
                    <AdminRouter path={`${path}/manageOrder`}>
                        <ManageOrders></ManageOrders>
                    </AdminRouter>
                    <AdminRouter path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRouter>
                    <AdminRouter path={`${path}/manageProduct`}>
                        <ManageProducts></ManageProducts>
                    </AdminRouter>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Paymant></Paymant>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;