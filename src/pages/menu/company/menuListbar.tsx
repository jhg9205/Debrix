import { ToggleButtonGroup, ToggleButton, Tabs, Tab } from '@mui/material'
import React from 'react'
import { PATH } from '@common/domain'
import { useNavigate } from 'react-router-dom'

const MenuListbar = (type: string) => {
	const [menuType, setMenuType] = React.useState(type)
	const navigate = useNavigate()

	const handleChange = (event: React.SyntheticEvent, newMenuType: string) => {
		if (newMenuType != undefined) {
			setMenuType(newMenuType)
			navigate(newMenuType)
		}
	}

	return (
		<div id="menuListBar">
			<Tabs
				value={menuType}
				onChange={handleChange}
				variant="scrollable"
				scrollButtons
				allowScrollButtonsMobile
				aria-label="scrollable force tabs example"
			>
				<Tab value={PATH.COMPANY00} label="CEO 인사말 및 회사소개" />
				<Tab value={PATH.COMPANY01} label="조직도" />
				<Tab value={PATH.COMPANY04} label="오시는길" />
			</Tabs>
		</div>
	)
}

export default MenuListbar
