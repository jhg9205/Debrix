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
				<ToggleButton value={PATH.RECRUIT00}>채용안내</ToggleButton>
				<ToggleButton value={PATH.RECRUIT03}>복리후생</ToggleButton>
				<ToggleButton value={PATH.RECRUIT01}>채용공고</ToggleButton>
			</ToggleButtonGroup>
		</div>
	)
}

export default MenuListbar
