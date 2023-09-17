import { Divider, Grid, List, ListItem, ListItemText } from '@mui/material'
import bus0 from '@images/menu/business8.jpg'
import bus1 from '@images/menu/business9.jpg'
import bus2 from '@images/menu/business12.jpg'
import bus3 from '@images/menu/business7.jpg'
import bus4 from '@images/menu/business11.jpg'
import Transition from '@components/ui/transition/transition'
import TransitionFade from '@components/ui/transition/transitionFade'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getViewSize } from '@utils/functions'

export const BusinessDetail = () => {
	const index0 = useRef<HTMLDivElement>(null)
	const index1 = useRef<HTMLDivElement>(null)
	const index2 = useRef<HTMLDivElement>(null)
	const index3 = useRef<HTMLDivElement>(null)
	const index4 = useRef<HTMLDivElement>(null)
	const scrollOp: {} = {
		behavior: 'smooth',
		block: 'center'
	}
	const location = useLocation()

	useEffect(() => {
		const search = location.search.split('?')[1]
		const params = new URLSearchParams(search)
		const keywords = params.get('index')
		switch (keywords) {
			case '0':
				index0.current?.scrollIntoView(scrollOp)
				break
			case '1':
				index1.current?.scrollIntoView(scrollOp)
				break
			case '2':
				index2.current?.scrollIntoView(scrollOp)
				break
			case '3':
				index3.current?.scrollIntoView(scrollOp)
				break
			case '4':
				index4.current?.scrollIntoView(scrollOp)
		}
	}, [])

	return (
		<>
			{getViewSize() == 'lg' ? (
				<Grid container spacing={6} className="intro-detail-pc">
					<Grid item lg={6} className="intro-img-pc">
						<div ref={index0}>
							<BusinessImg index={0} threshold={-1} direction={'right'} />
						</div>
					</Grid>
					<Grid item lg={6} className="intro-text-right">
						<BusinessText index={0} threshold={-1} direction={'left'} />
					</Grid>
					<Grid item lg={6} className="intro-text-left">
						<div ref={index1}>
							<BusinessText index={1} threshold={3} direction={'right'} />
						</div>
					</Grid>
					<Grid item lg={6} className="intro-img-pc">
						<BusinessImg index={1} threshold={3} direction={'left'} />
					</Grid>
					<Grid item lg={6} className="intro-img-pc">
						<div ref={index2}>
							<BusinessImg index={2} threshold={7} direction={'right'} />
						</div>
					</Grid>
					<Grid item lg={6} className="intro-text-right">
						<BusinessText index={2} threshold={7} direction={'left'} />
					</Grid>
					<Grid item lg={6} className="intro-text-left">
						<div ref={index3}>
							<BusinessText index={3} threshold={13} direction={'right'} />
						</div>
					</Grid>
					<Grid item lg={6} className="intro-img-pc">
						<BusinessImg index={3} threshold={13} direction={'left'} />
					</Grid>
					<Grid item lg={6} className="intro-img-pc">
						<div ref={index4}>
							<BusinessImg index={4} threshold={17} direction={'right'} />
						</div>
					</Grid>
					<Grid item lg={6} className="intro-text-right">
						<BusinessText index={4} threshold={17} direction={'left'} />
					</Grid>
				</Grid>
			) : (
				<Grid container spacing={1} className="intro-detail-app">
					<Grid item md={12}>
						<div ref={index0}>
							<BusinessImg index={0} threshold={-1} direction={'right'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={0} threshold={-1} direction={'left'} />
					</Grid>
					<Grid item md={12}>
						<div ref={index1}>
							<BusinessImg index={1} threshold={5} direction={'left'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={1} threshold={5} direction={'right'} />
					</Grid>
					<Grid item md={12}>
						<div ref={index2}>
							<BusinessImg index={2} threshold={9} direction={'right'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={2} threshold={9} direction={'left'} />
					</Grid>
					<Grid item md={12}>
						<div ref={index3}>
							<BusinessImg index={3} threshold={13} direction={'left'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={3} threshold={13} direction={'right'} />
					</Grid>
					<Grid item md={12}>
						<div ref={index4}>
							<BusinessImg index={4} threshold={20} direction={'right'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={4} threshold={20} direction={'left'} />
					</Grid>
				</Grid>
			)}
		</>
	)
}

export const BusinessText = (props: { index: number; threshold: number; direction: 'left' | 'right' | 'up' | 'down' | undefined }) => {
	let description: string[] = []
	const title = [
		'01 설계 및 기술개발',
		'02 통합감시 및 계측제어시스템',
		'03 Smart Water 관제시스템 유지관리',
		'04 SI 사업(GIS, Mobile 등)',
		'05 빅데이터 / AI 시스템'
	]
	switch (props.index) {
		case 0:
			description = [
				'국가 유역수도 통합센터 구축 설계',
				'원격감시제어시스템 설계',
				'SI 개발기획(관망관리, 스마트 하수)',
				'프로토콜 아날라이저 기능을 갖는 스마트 RTU 제품개발',
				'E_STOP 시스템 솔루션 개발',
				'상수도 관망관리 솔루션 개발 등'
			]
			break
		case 1:
			description = [
				'국가 및 유역수도지원 시스템',
				'통합시스템(상수통합시스템, 하수통합시스템)',
				'수운영 시스템',
				'상수관망 최적관리시스템',
				'TMS(수질 TMS, 하수관거 모니터링)',
				'물관리자동화 TMTC 시스템',
				'원방감시 제어시스템 (SCADA)',
				'정수장 디지털 트윈 시스템구축 등'
			]
			break
		case 2:
			description = [
				'4대강 보 수자원 ICT 시스템 유지관리',
				'수도ICT 점검정비(한강유역,금강유역)',
				'지방상수도 현대화사업 유지관리 시스템 등'
			]
			break
		case 3:
			description = [
				'SMART CITY, SMART WATER CITY 구현',
				'오염원 관리시스템',
				'지하시설물(상-하수도 등) 시설물 정보 관리시스템',
				'토지보상정보시스템',
				'Mobile 기반 조사정보 시스템',
				'주택 안전관리 및 빈집정보시스템',
				'스마트 안전 및 하자 관리시스템 등'
			]
			break
		case 4:
			description = [
				'HPE EZMERAL DATA FABRIC (빅데이터 플랫폼)',
				'HPE EZMERAL ML OPS(AI플랫폼)',
				'HPE EZMERAL기반 빅데이터+AI 시스템 개발',
				'기술지원 및 자문 등'
			]
	}

	return (
		<Transition threshold={props.threshold} direction={props.direction}>
			<TransitionFade threshold={props.threshold}>
				<div>
					<strong>{title[props.index]}</strong>
					<div id="hrDiv">
						<Divider />
					</div>
					<List component="div">
						{description.map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemText>{'* ' + text}</ListItemText>
							</ListItem>
						))}
					</List>
				</div>
			</TransitionFade>
		</Transition>
	)
}

const BusinessImg = (props: { index: number; threshold: number; direction: 'left' | 'right' | 'up' | 'down' | undefined }) => {
	let image
	switch (props.index) {
		case 0:
			image = bus0
			break
		case 1:
			image = bus1
			break
		case 2:
			image = bus2
			break
		case 3:
			image = bus3
			break
		case 4:
			image = bus4
	}

	return (
		<Transition threshold={props.threshold} direction={props.direction}>
			<TransitionFade threshold={props.threshold}>
				<div className={`intro-detail-${props.direction}`}>
					<img src={image} alt="dd" />
				</div>
			</TransitionFade>
		</Transition>
	)
}
