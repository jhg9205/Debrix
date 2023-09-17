import { MENU, MENU_NAME } from '@common/domain'
import { setHeaderInfo } from '@modules/reducer/layout'
import { Box, Tab, Tabs } from '@mui/material'
import useClasses from '@utils/useClasses'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const MenuList = () => {
	const getMenuIndex = () => {
		const pathname = location.pathname
		let idx: number = 0
		let name = pathname.indexOf('/', 1) > 0 ? pathname.substr(0, pathname.indexOf('/', 1)) : pathname
		let menudesc: ArrayString = []

		// switch (name) {
		// 	case MENU_NAME.INTRO:
		// 		idx = 0
		// 		menudesc = MENU_DESC.INTRO
		// 		break
		// 	case MENU_NAME.STATISTIC:
		// 		idx = 1
		// 		menudesc = MENU_DESC.STATISTIC
		// 		break
		// 	case MENU_NAME.CONDITION:
		// 		idx = 2
		// 		menudesc = MENU_DESC.INTRO1
		// 		break
		// }

		dispatch(setHeaderInfo(idx, menudesc))

		return idx
	}

	const dispatch = useDispatch()
	const [value, setValue] = useState(getMenuIndex())

	const tabProps = (index: number) => {
		return {
			id: `vertical-tab-${index}`,
			'aria-controls': `vertical-tabpanel-${index}`
		}
	}

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const defaultTab = {
		fontSize: '18px',
		lineHeight: '40px',
		width: '1035px'
	}

	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#fff', fontWeight: '500' }, defaultTab),
		activeTab: Object.assign({ color: '#b4f9ff', fontWeight: '600' }, defaultTab),
		indicator: {
			background: '#b4f9ff',
			left: 0,
			width: '10px',
			color: '#fff'
		},
		sxProps: {
			flexGrow: 1,
			bgcolor: '#5094e9',
			display: 'flex',
			height: '100%'
		}
	})

	const classes = useClasses(useStyles)

	return (
		<div className="lnb">
			<h1>
				<img src="/src/assets/images/common/logo2.png" alt="빈집정보시스템" />
			</h1>
			{/* <Box sx={classes.sxProps}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					TabIndicatorProps={{ style: classes.indicator }}
				>
					<Tab
						href="/intro"
						label={<span style={value === MENU.INTRO ? classes.activeTab : classes.customStyleOnTab}>업무소개</span>}
						{...tabProps(MENU.INTRO)}
					/>
					<Tab
						href="/statistic"
						label={<span style={value === MENU.STATISTIC ? classes.activeTab : classes.customStyleOnTab}>빈집통계</span>}
						{...tabProps(MENU.STATISTIC)}
					/>
					<Tab
						href="/intro/1"
						label={<span style={value === MENU.CONDITION ? classes.activeTab : classes.customStyleOnTab}>빈집실태조사</span>}
						{...tabProps(MENU.CONDITION)}
					/>
					<Tab
						href="/intro/2"
						label={
							<span style={value === MENU.CONDITION_RESULT ? classes.activeTab : classes.customStyleOnTab}>빈집실태조사 결과</span>
						}
						{...tabProps(MENU.CONDITION_RESULT)}
					/>
					<Tab
						label={<span style={value === MENU.REPAIRPLAN ? classes.activeTab : classes.customStyleOnTab}>빈집정비계획수립</span>}
						{...tabProps(MENU.REPAIRPLAN)}
					/>
					<Tab
						label={
							<span style={value === MENU.REPAIRPLAN_RESULT ? classes.activeTab : classes.customStyleOnTab}>
								빈집정비계획수립 결과
							</span>
						}
						{...tabProps(MENU.REPAIRPLAN_RESULT)}
					/>
					<Tab
						label={<span style={value === MENU.BUSINESS ? classes.activeTab : classes.customStyleOnTab}>사업지원</span>}
						{...tabProps(MENU.BUSINESS)}
					/>
				</Tabs>
			</Box> */}
		</div>
	)
}

export default MenuList
