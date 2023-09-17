import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { CssBaseline, Drawer, useScrollTrigger } from '@mui/material'
import logo from '@images/common/logoD-white.png'
import HeaderDrawer from '@components/layouts/header/headerDrawer'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

let currentPath = ''

const HeaderApp = () => {
	const [state, setState] = React.useState(false)
	const location = useLocation()

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return
		}
		setState(open)
	}

	const triggerStyle = {
		backgroundColor: useScrollTrigger() ? 'rgba(0,0,0,0.9)' : 'rgb(14,24,77,0)',
		boxShadow: useScrollTrigger() ? '5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important' : undefined,
		minHeight: '80px',
		borderBottom: '1px solid rgba(200, 200, 200, 0.75)'
	}

	useEffect(() => {
		if (currentPath === location.pathname) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}

		currentPath = location.pathname
	}, [location])

	return (
		<header style={{ position: 'absolute', width: 0, height: 0 }} className="top">
			<React.Fragment>
				<CssBaseline />
				<AppBar elevation={useScrollTrigger() ? 24 : 0} style={triggerStyle}>
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
							<MenuIcon style={{ fontSize: '40px' }} />
						</IconButton>
						<Drawer open={state} onClose={toggleDrawer(false)} disableScrollLock={true}>
							<HeaderDrawer toggleDrawer={toggleDrawer} />
						</Drawer>
						<Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: 'center' }}>
							<Link to="/">
								<img src={logo} alt="dd" style={{width:'150px'}}/>
							</Link>
						</Typography>
						<div style={{ width: '64px' }}></div>
					</Toolbar>
				</AppBar>
				<Toolbar />
			</React.Fragment>
		</header>
	)
}
export default HeaderApp
