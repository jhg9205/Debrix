import Transition from '@components/ui/transition/transition'
import { Button, Divider } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export const Contact = () => {
	const navigate = useNavigate()
	return (
		<div className="contact-content">
			<Transition threshold={10} direction={'up'}>
				<>
					<div className="menu_title_p_fixed_warp">
						<p className="menu_title_p1">Let’s find out how to work together</p>
						<Divider sx={{ margin: '20px auto', backgroundColor: 'white', width: '200px' }} />
						<p>
							Ready to start your project? If you want to know the contact information for each business area, please click the button
							Contact us anytime
						</p>
					</div>
					<Button
						id="recruitFile"
						variant="contained"
						sx={{
							width: '150px',
							height: '50px',
							borderRadius: '30px',
							margin: '40px auto',
							fontSize: '17px',
							fontWeight: 'bold',
							backgroundColor:'black'
						}}
						onClick={() => {
							navigate('/Debrix/business')
						}}
					>
						Contact
					</Button>
				</>
			</Transition>
		</div>
	)
}
