import * as React from 'react'
import { useState, useEffect } from 'react'
import { BUSINESS, COMPANY, CUSTOMER, MENU, PATH, PRCENTER, RECRUIT, RESEARCH } from '@common/domain'
import useClasses from '@utils/useClasses'
import { Box, Tab, Tabs } from '@mui/material'
import TabPanel from '@components/ui/panel/panel'
import { SubMenuDiv } from '@components/ui/button'
import { Link, useLocation, useNavigate } from 'react-router-dom'

let currentPath = ''

const HeaderPc = (props: { status: boolean }) => {
	const [value, setValue] = useState(MENU.BLANK)
	const [subValue, setSubValue] = useState(0)
	const navigate = useNavigate()
	const location = useLocation()

	const menuPath: string[] = [PATH.COMPANY00, PATH.BUSINESS00, PATH.RESEARCH00, PATH.PRCENTER00, PATH.RECRUIT00, PATH.CUSTOMER00]

	useEffect(() => {
		if (currentPath === location.pathname) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}

		currentPath = location.pathname
	}, [location])

	const handleOver = (event: React.MouseEvent) => {
		const value = Number(event.currentTarget.id.split('-')[2])

		setValue(value)
		event.stopPropagation()
	}

	const subHandleOver = (event: React.MouseEvent) => {
		const value = Number(event.currentTarget.id.split('-')[2])

		setSubValue(value)
		event.stopPropagation()
	}

	const handleLeave = (event: React.MouseEvent) => {
		setValue(MENU.BLANK)
		event.stopPropagation()
	}

	const handleClick = (event: React.MouseEvent) => {
		const value = Number(event.currentTarget.id.split('-')[2])

		navigate(menuPath[value])
		event.stopPropagation()
	}

	const tabProps = (menuIdx: number, targetIdx: number, menuName: string) => {
		const style: React.CSSProperties =
			targetIdx === menuIdx ? classes.activeTab : props.status ? classes.customStyleOnTab : classes.customStyleOnTab2
		const span: React.ReactNode = <span style={style}>{menuName}</span>

		return {
			id: `menu-tab-${menuIdx}`,
			'aria-controls': `menu-tabpanel-${menuIdx}`,
			onMouseEnter: handleOver,
			onClick: handleClick,
			label: span
		}
	}

	const subTabProps = (menuIdx: number, targetIdx: number, menuName: string, href: string, index: number) => {
		const style: React.CSSProperties = targetIdx === menuIdx ? classes.activeTab : classes.customStyleOnTab2
		const span: React.ReactNode = (
			<Link to={menuPath[index] + href}>
				{' '}
				<span style={style}>{menuName}</span>
			</Link>
		)

		return {
			id: `menu-subTab-${menuIdx}`,
			'aria-controls': `menu-subTabpanel-${menuIdx}`,
			onMouseEnter: subHandleOver,
			label: span
		}
	}

	const defaultTab = {
		fontSize: '1.2rem',
		outline: 'none',
		fontFamily: 'Noto Sans KR',
		width: '100%',
		fontWeight: '800px'
	}

	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#fff' }, defaultTab),
		customStyleOnTab2: Object.assign({ color: '#000' }, defaultTab),
		activeTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0, right: 0 }, defaultTab),
		subActiveTab: Object.assign({ color: '#5094e9', fontWeight: 'bold', border: 0, right: 0 }, defaultTab),
		sX: {
			width: '100%',
			margin: '0 0 40',
			borderBottom: 1,
			borderColor: '#d5d5d5'
		},
		sp: {
			width: '100%',
			flexGrow: '1!important',
			webkitBoxFlex: '1!important',
			msFlexPositive: '1!important'
		},
		img: {
			width: '190px'
		},
		spacer: {
			width: '100%'
		},
		hidden: {
			display: 'none'
		}
	})

	const classes = useClasses(useStyles)
	return (
		<header onMouseLeave={handleLeave}>
			{/* 메인메뉴 */}
			<div id="headerTopWrap" className="top">
				<Link to="/">
					{/*<img style={classes.img} src={logoWhite} alt="로고" />*/}
				</Link>
				<Box sx={classes.activeTab}>
					<Tabs variant="fullWidth" value={value} TabIndicatorProps={{ style: classes.hidden }}>
						<Tab {...tabProps(MENU.COMPANY, value, '회사소개')} />
						<Tab {...tabProps(MENU.BUSINESS, value, '사업분야')} />
						<Tab {...tabProps(MENU.RESEARCH, value, '연구개발')} />
						<Tab {...tabProps(MENU.PRCENTER, value, '홍보센터')} />
						<Tab {...tabProps(MENU.RECRUIT, value, '인재채용')} />
						<Tab {...tabProps(MENU.CUSTOMER, value, '고객지원')} />
						<Tab
							id={`menu-tab-${value}`}
							style={{ visibility: 'hidden', width: 0, height: 0, maxWidth: 0, maxHeight: 0, minWidth: 0, minHeight: 0, padding: 1 }}
						/>
					</Tabs>
				</Box>
			</div>
			{/* 서브메뉴 */}
			{/* ======================================================================================================== */}
			<TabPanel index={MENU.COMPANY} value={value}>
				<SubMenuDiv>
					<Tabs variant="fullWidth" value={0} TabIndicatorProps={{ style: classes.hidden }}>
						<Tab {...subTabProps(COMPANY.INTRO, subValue, 'CEO 인사말 및 회사소개', '', MENU.COMPANY)} />
						<Tab {...subTabProps(COMPANY.ORGANIZATION, subValue, '조직도', '/organization', MENU.COMPANY)} />
						<Tab {...subTabProps(COMPANY.CERTIFICATE, subValue, '면허등록현황', '/certificate', MENU.COMPANY)} />
						<Tab {...subTabProps(COMPANY.PATENT, subValue, '특허 및 수상실적', '/patent', MENU.COMPANY)} />
						<Tab {...subTabProps(COMPANY.LOCATION, subValue, '오시는길', '/location', MENU.COMPANY)} />
					</Tabs>
				</SubMenuDiv>
			</TabPanel>
			<TabPanel index={MENU.BUSINESS} value={value}>
				<SubMenuDiv>
					<Tabs variant="fullWidth" value={0} TabIndicatorProps={{ style: classes.hidden }}>
						<Tab {...subTabProps(BUSINESS.BUSINESS, subValue, '사업분야', '', MENU.BUSINESS)} />
						<Tab {...subTabProps(BUSINESS.HISTORY, subValue, '사업실적', '/history', MENU.BUSINESS)} />
					</Tabs>
				</SubMenuDiv>
			</TabPanel>
			<TabPanel index={MENU.RESEARCH} value={value}>
				<SubMenuDiv>
					<Tabs variant="fullWidth" value={0} TabIndicatorProps={{ style: classes.hidden }}>
						<Tab {...subTabProps(RESEARCH.FIELD, subValue, '연구분야', '', MENU.RESEARCH)} />
						<Tab {...subTabProps(RESEARCH.HISTORY, subValue, '연구실적', '/history', MENU.RESEARCH)} />
						{/*<Tab {...subTabProps(RESEARCH.LIST, subValue, '산업재산권 현황', '/list', MENU.RESEARCH)} />*/}
					</Tabs>
				</SubMenuDiv>
			</TabPanel>
			<TabPanel index={MENU.PRCENTER} value={value}>
				<SubMenuDiv>
					<Tabs variant="fullWidth" value={0} TabIndicatorProps={{ style: classes.hidden }}>
						<Tab {...subTabProps(PRCENTER.NEWS, subValue, 'NEWS', '', MENU.PRCENTER)} />
						<Tab {...subTabProps(PRCENTER.FAQ, subValue, 'FAQ', '/faq', MENU.PRCENTER)} />
						<Tab {...subTabProps(PRCENTER.PR, subValue, 'PR 자료', '/pr', MENU.PRCENTER)} />
					</Tabs>
				</SubMenuDiv>
			</TabPanel>
			<TabPanel index={MENU.RECRUIT} value={value}>
				<SubMenuDiv>
					<Tabs variant="fullWidth" value={0} TabIndicatorProps={{ style: classes.hidden }}>
						<Tab {...subTabProps(RECRUIT.INFO, subValue, '채용안내', '', MENU.RECRUIT)} />
						<Tab {...subTabProps(RECRUIT.MENT, subValue, '채용공고', '/ment', MENU.RECRUIT)} />
					</Tabs>
				</SubMenuDiv>
			</TabPanel>
			<TabPanel index={MENU.CUSTOMER} value={value}>
				<SubMenuDiv>
					<Tabs variant="fullWidth" value={0} TabIndicatorProps={{ style: classes.hidden }}>
						<Tab {...subTabProps(CUSTOMER.AS, subValue, 'A/S접수', '', MENU.CUSTOMER)} />
						<Tab {...subTabProps(CUSTOMER.UTIL, subValue, '자료실', '/util', MENU.CUSTOMER)} />
					</Tabs>
				</SubMenuDiv>
			</TabPanel>
			{/* ======================================================================================================== */}
		</header>
	)
}
export default HeaderPc
