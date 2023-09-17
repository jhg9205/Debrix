import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import React from 'react'
import { PATH } from '@common/domain'
import { useNavigate } from 'react-router-dom'

const MenuListbar = (type: string) => {
	const [menuType, setMenuType] = React.useState(type)
	const navigate = useNavigate()

	const handleChange = (event: React.MouseEvent<HTMLElement>, newMenuType: string) => {
		if (newMenuType != undefined) {
			setMenuType(newMenuType)
			navigate(newMenuType)
		}
	}

	return (
		<div id="menuListBar">
			<ToggleButtonGroup value={menuType} exclusive onChange={handleChange} aria-label="Platform">
				<ToggleButton value={PATH.RESEARCH00}>연구분야</ToggleButton>
				<ToggleButton value={PATH.RESEARCH01}>연구실적</ToggleButton>
				{/*<ToggleButton value={PATH.RESEARCH02}>산업재산권 현황</ToggleButton>*/}
			</ToggleButtonGroup>
		</div>
	)
}

export default MenuListbar
