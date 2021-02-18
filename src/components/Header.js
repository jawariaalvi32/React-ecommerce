import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import '../App.css';
import LoginSignup from './login/Login';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    
  }));
function Header() {
    const classes = useStyles();
    return (
    //     <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //         <Link to="/" className="link">STORE</Link>
    //       </IconButton>
    //       <Typography variant="h6" className={classes.title}>
    //         <Link to="/products/category">Products</Link>
    //       </Typography>
    //       <Link to="#"><LoginSignup/></Link>        
    //     </Toolbar>
    //   </AppBar>
    // </div>
    <div className="container nav-box">
			<div className="row justify-content-between align-items-center">
				<div className="logo col-md-3">
					<Link to="/">
            LOGO
						{/* <img src={logo} alt="logo" className="img-fluid logo" /> */}
					</Link>
				</div>
				<div className="items col-md-5 ">
					<ul className="nav justify-content-end">
						<li className="shopping-cart">
							<Link to="/cart">
								{/* <FaShoppingCart className="cart" />{' '}
								<span>
									<strong>{cartQuantity.length}</strong>
								</span> */}
							</Link>
						</li>
						{/* <li>
							{loginInfo.displayName ? (
								<Link to="/user-info" className="user">
									{loginInfo.displayName}
								</Link>
							) : (
								<Link to="/login">Login</Link>
							)}
						</li>
						<li>
							{loginInfo.email ? (
								<Link to="/" onClick={signedOut}>
									Logout
								</Link>
							) : (
								<Link to="/signup">Sign up</Link>
							)}
						</li> */}
					</ul>
				</div>
			</div>
		</div>
    )
}

export default Header
