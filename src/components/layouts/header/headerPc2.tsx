import * as React from 'react'
import { useState, useEffect } from 'react'
import { PATH } from '@common/domain'
import useClasses from '@utils/useClasses'
import logoWhite from '@images/common/logoD-white.png'
import { Box } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'

let currentPath = ''

const HeaderPc2 = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const menuPath: string[] = [PATH.COMPANY00, PATH.BUSINESS00, PATH.PRCENTER00, PATH.RECRUIT00, PATH.CUSTOMER00]

	useEffect(() => {
		if (currentPath === location.pathname) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}

		currentPath = location.pathname
	}, [location])

	const defaultTab = {
		fontSize: '1.5rem',
		outline: 'none',
		fontFamily: 'Noto Sans KR',
		width: '100%',
		fontWeight: '800px'
	}
	const handleClick = (params: string) => {
		navigate(params)
	}
	const useStyles = (theme: any) => ({
		customStyleOnTab: Object.assign({ color: '#fff' }, defaultTab),
		customStyleOnTab2: Object.assign({ color: 'rgb(255,255,255)' }, defaultTab),
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
			width: '150px',
		},
		spacer: {
			width: '100%'
		},
		hidden: {
			display: 'none'
		}
	})

	const classes = useClasses(useStyles)

	const Menu = (props: { title: string; menu: string }) => {
		return (
			<li
				onClick={() => {
					handleClick(props.menu)
				}}
			>
				<p>{props.title}</p>
			</li>
		)
	}

	return (
		<header>
			{/* 메인메뉴 */}
			<div id="headerTopWrap" className="top header2" style={{ backgroundColor: 'rgba(255,255,255,0)' }}>
				<div className="logoBox">
					<Link to="/">
						<img style={classes.img} src={logoWhite} alt="로고" />
					</Link>
				</div>
				<Box sx={classes.activeTab}>
					<ul className="menu">
						<li>
							<Link to={menuPath[0]}>회사소개</Link>
							<ul className="submenu submenu1">
								<div></div>
								<Menu title="CEO 인사말 및 회사소개" menu={PATH.COMPANY00} />
								<Menu title="조직도" menu={PATH.COMPANY01} />
								<Menu title="오시는길" menu={PATH.COMPANY04} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[1]}>사업분야</Link>
							<ul className="submenu submenu2">
								<div></div>
								<Menu title="사업분야" menu={PATH.BUSINESS00} />
							</ul>
						</li>
						{/*<li>*/}
						{/*	<Link to={menuPath[2]}>연구분야</Link>*/}
						{/*	<ul className="submenu submenu3">*/}
						{/*		<div></div>*/}
						{/*		<Menu title="연구분야" menu={PATH.RESEARCH00} />*/}
						{/*		<Menu title="연구실적" menu={PATH.RESEARCH01} />*/}
						{/*		/!*<Menu title="산업재산권 현황" menu={PATH.RESEARCH02} />*!/*/}
						{/*	</ul>*/}
						{/*</li>*/}
						<li>
							<Link to={menuPath[2]}>홍보센터</Link>
							<ul className="submenu submenu4">
								<div></div>
								<Menu title="NEWS" menu={PATH.PRCENTER00} />
								<Menu title="FAQ" menu={PATH.PRCENTER01} />
								<Menu title="PR 자료" menu={PATH.PRCENTER02} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[3]}>인재채용</Link>
							<ul className="submenu submenu5">
								<div></div>
								<Menu title="채용안내" menu={PATH.RECRUIT00} />
								<Menu title="복리후생" menu={PATH.RECRUIT03} />
								<Menu title="채용공고" menu={PATH.RECRUIT01} />
							</ul>
						</li>
						<li>
							<Link to={menuPath[4]}>고객지원</Link>
							<ul className="submenu submenu6">
								<div></div>
								{/* <Menu title="A/S접수" menu={PATH.CUSTOMER00} /> */}
								<Menu title="자료실" menu={PATH.CUSTOMER01} />
							</ul>
						</li>
					</ul>
				</Box>
			</div>
		</header>
	)
}
export default HeaderPc2
