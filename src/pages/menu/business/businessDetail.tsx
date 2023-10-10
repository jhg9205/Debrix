import {Box, Divider, Fab, Fade, Grid, IconButtonProps, List, ListItem, ListItemText, styled} from '@mui/material'
import bus0 from '@images/menu/analyze.jpg'
import bus1 from '@images/menu/RnD.jpg'
import bus2 from '@images/menu/uiux2.jpg'
import bus3 from '@images/menu/business7.jpg'
import bus4 from '@images/menu/business11.jpg'
import bus5 from '@images/menu/uiux.jpg'
import Transition from '@components/ui/transition/transition'
import TransitionFade from '@components/ui/transition/transitionFade'
import {useEffect, useRef, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { getViewSize } from '@utils/functions'
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import FAB1 from "@images/main/FAB1.jpg";
import SI1 from "@images/main/SI1.jpg";
import SI2 from "@images/main/SI2.jpg";
import SI3 from "@images/main/SI3.jpg";
import SI4 from "@images/main/SI4.jpg";
import SI5 from "@images/main/SI5.jpg";
import SI6 from "@images/main/SI6.jpg";
import SI7 from "@images/main/SI7.jpg";
import SUCCESS from "@images/main/SUCCESS.jpg";
import SOLUTION1 from '@images/main/SOLUTION1.jpg'
import SOLUTION2 from '@images/main/SOLUTION2.jpg'
import SOLUTION3 from '@images/main/SOLUTION3.jpg'
import UIUX1 from "@images/main/UIUX1.jpg";
import UIUX2 from "@images/main/UIUX2.jpg";
import RND1 from "@images/main/RND1.jpg"
import RND2 from "@images/main/RND2.jpg"
import RND3 from "@images/main/RND3.jpg"
import RND4 from "@images/main/RND4.jpg"

export const BusinessDetail = () => {
	const title = [
		'01. SI(시스템통합)',
		'02. Solution',
		'03. UI/UX',
		'04. R&D',
		// '05 RPA(지능형 업무자동화 솔루션)',
		// '06 UI/UX(DSO)'
	]
	let image
	const [titleCon, setTitleCon] = useState("")
	const [temp, setTemp] = useState(0);
	let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
	const [open, setOpen] = React.useState(false);
	const [expanded, setExpanded] = React.useState(false)
	const index0 = useRef<HTMLDivElement>(null)
	const index1 = useRef<HTMLDivElement>(null)
	const index2 = useRef<HTMLDivElement>(null)
	const index3 = useRef<HTMLDivElement>(null)
	const index4 = useRef<HTMLDivElement>(null)
	const index5 = useRef<HTMLDivElement>(null)
	const scrollOp: {} = {
		behavior: 'smooth',
		block: 'center'
	}
	const location = useLocation()
	const handleClickOpen = (num:number) => {
		setTemp(num)
		setTitleCon(title[num])
		setOpen(true)
	};
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#modal_bar')
		if (anchor) {
			anchor.scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			})
		}
	}
	const handleClose = () => {
		setOpen(false);
	};
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100
	})
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
				index1.current?.scrollIntoView(scrollOp)
				break
			case '3':
				index1.current?.scrollIntoView(scrollOp)
				break
			case '4':
				index2.current?.scrollIntoView(scrollOp)
				break
			case '5':
				index3.current?.scrollIntoView(scrollOp)
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
						<button
							className="btn10"
							onClick={()=>handleClickOpen(0)}
						>
							VIEW MORE
						</button>
					</Grid>
					<Grid item lg={6} className="intro-text-left">
						<div ref={index1}>
							<BusinessText index={1} threshold={3} direction={'right'} />
							<button
								className="btn10"
								onClick={()=>handleClickOpen(1)}
							>
								VIEW MORE
							</button>
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
						<button
							className="btn10"
							onClick={()=>handleClickOpen(2)}
						>
							VIEW MORE
						</button>
					</Grid>
					<Grid item lg={6} className="intro-text-left">
						<div ref={index3}>
							<BusinessText index={3} threshold={13} direction={'right'} />
							<button
								className="btn10"
								onClick={()=>handleClickOpen(3)}
							>
								VIEW MORE
							</button>
						</div>
					</Grid>
					<Grid item lg={6} className="intro-img-pc">
						<BusinessImg index={3} threshold={13} direction={'left'} />
					</Grid>
					{/*<Grid item lg={6} className="intro-img-pc">*/}
					{/*	<div ref={index4}>*/}
					{/*		<BusinessImg index={4} threshold={17} direction={'right'} />*/}
					{/*	</div>*/}
					{/*</Grid>*/}
					{/*<Grid item lg={6} className="intro-text-right">*/}
					{/*	<BusinessText index={4} threshold={17} direction={'left'} />*/}
					{/*	<button*/}
					{/*		className="btn10"*/}
					{/*		onClick={()=>handleClickOpen(4)}*/}
					{/*	>*/}
					{/*		VIEW MORE*/}
					{/*	</button>*/}
					{/*</Grid>*/}
					{/*<Grid item lg={6} className="intro-text-left">*/}
					{/*	<div ref={index5}>*/}
					{/*		<BusinessText index={5} threshold={20} direction={'right'} />*/}
					{/*		<button*/}
					{/*			className="btn10"*/}
					{/*			onClick={()=>handleClickOpen(5)}*/}
					{/*		>*/}
					{/*			VIEW MORE*/}
					{/*		</button>*/}
					{/*	</div>*/}
					{/*</Grid>*/}
					{/*<Grid item lg={6} className="intro-img-pc">*/}
					{/*	<BusinessImg index={5} threshold={20} direction={'left'} />*/}
					{/*</Grid>*/}
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
						<button
							className="btn10"
							onClick={()=>handleClickOpen(0)}
						>
							VIEW MORE
						</button>
					</Grid>
					<Grid item md={12}>
						<div ref={index1}>
							<BusinessImg index={1} threshold={5} direction={'left'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={1} threshold={5} direction={'right'} />
						<button
							className="btn10"
							onClick={()=>handleClickOpen(1)}
						>
							VIEW MORE
						</button>
					</Grid>
					<Grid item md={12}>
						<div ref={index2}>
							<BusinessImg index={2} threshold={9} direction={'right'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={2} threshold={9} direction={'left'} />
						<button
							className="btn10"
							onClick={()=>handleClickOpen(2)}
						>
							VIEW MORE
						</button>
					</Grid>
					<Grid item md={12}>
						<div ref={index3}>
							<BusinessImg index={3} threshold={13} direction={'left'} />
						</div>
					</Grid>
					<Grid item md={12} className="intro-text-app">
						<BusinessText index={3} threshold={13} direction={'right'} />
						<button
							className="btn10"
							onClick={()=>handleClickOpen(3)}
						>
							VIEW MORE
						</button>
					</Grid>
					{/*<Grid item md={12}>*/}
					{/*	<div ref={index4}>*/}
					{/*		<BusinessImg index={4} threshold={20} direction={'right'} />*/}
					{/*	</div>*/}
					{/*</Grid>*/}
					{/*<Grid item md={12} className="intro-text-app">*/}
					{/*	<BusinessText index={4} threshold={20} direction={'left'} />*/}
					{/*	<button*/}
					{/*		className="btn10"*/}
					{/*		onClick={()=>handleClickOpen(4)}*/}
					{/*	>*/}
					{/*		VIEW MORE*/}
					{/*	</button>*/}
					{/*</Grid>*/}
					{/*<Grid item md={12}>*/}
					{/*	<div ref={index5}>*/}
					{/*		<BusinessImg index={5} threshold={20} direction={'right'} />*/}
					{/*	</div>*/}
					{/*</Grid>*/}
					{/*<Grid item md={12} className="intro-text-app">*/}
					{/*	<BusinessText index={5} threshold={20} direction={'left'} />*/}
					{/*	<button*/}
					{/*		className="btn10"*/}
					{/*		onClick={()=>handleClickOpen(5)}*/}
					{/*	>*/}
					{/*		VIEW MORE*/}
					{/*	</button>*/}
					{/*</Grid>*/}
				</Grid>
			)}
			<Dialog
				// fullScreen
				open={open}
				maxWidth='xl'
				onClose={handleClose}
				TransitionComponent={TransitionCustom}
				className='dialog'
				scroll='paper'
			>
				<AppBar sx={{ position: 'relative', backgroundColor:'rgba(44, 44, 44, 0.9)' }} id='modal_bar'>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 3, flex: 1 }} variant="h5" component="div">
							{titleCon}
						</Typography>
					</Toolbar>
				</AppBar>
				{temp == 0 ?
					<>
						<img src={SI1} alt='img1'/>
						<img src={SI2} alt='img2'/>
						<img src={SI3} alt='img3'/>
						<img src={SI4} alt='img4'/>
						<img src={SI5} alt='img5'/>
						<img src={SI6} alt='img5'/>
						<img src={SI7} alt='img5'/>
						<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
					</>
						:
						temp == 1 ?
					<>
						<img src={SOLUTION1} alt='img1'/>
						<img src={SOLUTION2} alt='img1'/>
						<img src={SOLUTION3} alt='img1'/>
						<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
					</>
						:
						temp == 2 ?
					<>
						<img src={UIUX1} alt='img1'/>
						<img src={UIUX2} alt='img1'/>
						<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
					</>
						:
						// temp == 3 ?
					<>
						<img src={RND1} alt='img1'/>
						<img src={RND2} alt='img2'/>
						<img src={RND3} alt='img3'/>
						<img src={RND4} alt='img4'/>
						<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
					</>
					// 	:
					// 	temp == 4 ?
					// <>
					// 	<img src={RPA1} alt='img1'/>
					// 	<img src={RPA2} alt='img2'/>
					// </>
					// 	:
					// <>
					// 	<img src={UIUX1} alt='img1'/>
					// 	<img src={UIUX2} alt='img2'/>
					// </>
				}
				<Fade in={trigger}>
					<Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 30, right: 30 }}>
						<Fab size="large" aria-label="scroll back to top">
							<KeyboardArrowUpIcon />
						</Fab>
					</Box>
				</Fade>
			</Dialog>
		</>
	)
}

export const BusinessText = (props: { index: number ; threshold: number; direction: 'left' | 'right' | 'up' | 'down' | undefined; indexMain?:number }) => {
	let description: string[] = []
	let descriptionMain: string[] = []
	const title = [
		'01. SI(시스템통합)',
		'02. Solution',
		'03. UI/UX',
		'04. R&D',
		// '05 RPA(지능형 업무자동화 솔루션)',
		// '06 UI/UX(DSO)'
	]
	const titleMain = [
		'01. SI(시스템통합)',
		'02. AI분석 플랫폼(HPE)',
		'03. 빅데이터 플랫폼(HPE)',
		'04. 스마트 안전보건관리 솔루션',
		'05. UI/UX(DSO)',
		'06. R&D'
	]
	switch (props.index) {
		case 0:
			description = [
				'*  4차 산업 분야의 융복합 기술을 적용한 GIS 토지정보, 상하수도, 물관리 분야의 시스템 통합',
				'*  최신 ICT 기술을 적용한 "보상정보 관리시스템"',
				'*  GIS, ICT 기반 "공유재산관리 정보시스템","모바일 시설물관리 시스템',
				'*  물환경 관리를 위한 "비점오염원관리 정보 시스템"'
			]
			break
		case 1:
			description = [
				'*  HPE Ezmeral Big-Data 플랫폼/AI 플랫폼 (HPE EZMERAL Data Fabric)',
				'*  HPE Ezmeral AI 플랫폼 (HPE EZMERAL ML OPS Platform)',
				'*  스마트 안전보건관리 솔루션'
			]
			break
		case 2:
			description = [
				'*  DSO(DEBRIX conSulting Organization for standardization)',
				'*  통합프로세스 Map + 통합프로세스 방법론 + 통합프로세스 템플릿',
				'*  시스템 개발 전 과정에 필요한 프로세스 정의',
				'*  기획, 디자인, 개발의 협업 체계를 구축'
			]
			break
		case 3:
			description = [
				'*  크롤링과 AI(GPT) 모델 기반의 학습 콘텐츠 자동 생성 및 제공',
				'*  고객 및 영업 진행과 진단, 현황과 통계기능 제공(BridgeWorks)',
				'*  광고 노출 없는 콘텐츠 목록 제공'
			]
		// 	break
		// case 4:
		// 	description = [
		// 		'국내 최초 순수 국산 RPA 솔루션',
		// 		'스케줄링, 실행 관리, 실시간 모니터링 등 효율적인 로봇 관리 환경 제공',
		// 		'간편하고 직관적인 로봇 개발 환경 제공',
		// 		'업무를 수행하는 로봇이며 이미지 인식, UI 객체 인식, 문자 인식(OCR), 딥러닝 기술 연계',
		// 		'선정 업무에 대한 프로세스 분석 및 개선 사항 도출',
		// 		'AI 플랫폼 운영, AI 서비스 모델 개선/개발, AI Client 관리, 유지 보수 및 확산 전략 등 제시'
		// 	]
		// 	break
		// case 5:
		// 	description = [
		// 		'DSO(DEBRIX conSulting Organization for standardization)',
		// 		'통합프로세스 Map + 통합프로세스 방법론 + 통합프로세스 템플릿',
		// 		'시스템 개발 전 과정에 필요한 프로세스를 정의',
		// 		'기획, 디자인, 개발의 협업 체계를 구축'
		// 	]
	}
	switch (props.indexMain) {
		case 0:
			descriptionMain = [
				'*  4차 산업 분야의 융복합 기술을 적용한 GIS 토지정보, 상하수도, 물관리 분야의 시스템 통합',
				'*  최신 ICT 기술을 적용한 "보상정보 관리시스템"',
				'*  GIS, ICT 기반 "공유재산관리 정보시스템","모바일 시설물관리 시스템',
				'*  물환경 관리를 위한 "비점오염원관리 정보 시스템"'
			]
			break
		case 1:
			descriptionMain = [
				'*  HPE Ezmeral AI 플랫폼 (HPE EZMERAL ML OPS Platform)',
				'*  대용량 분산 데이터 처리 기술 제공',
				'*  상용 AI 분석 플랫폼의 성과분석',
				'*  Hadoop 및 관련 공개소프트웨어 기술 지원',
				'*  Ezmeral ML Ops, Container Platform'
			]
			break
		case 2:
			descriptionMain = [
				'*  HPE Ezmeral Big-Data 플랫폼/AI 플랫폼 (HPE EZMERAL Data Fabric)',
				'*  대용량 분산 데이터 처리 기술 제공',
				'*  빅데이터 시스템의 성과분석',
				'*  Ezmeral Data Fabric Platform, Container Platform'
			]
			break
		case 3:
			descriptionMain = [
				'*  안전보건 목표와 경영방침 설정 & 전담조직 및 예산 편성',
				'*  안전보건코칭 시스템 & 조치결과 이메일 or 문자발송',
				'*  보고서 생성기능 및 개선 조치 결과 등록과 모니터링 관리 솔루션',
				'*  종사자 의견청취 관리 솔루션'
			]
			break
		case 4:
			descriptionMain = [
				'*  DSO(DEBRIX conSulting Organization for standardization)',
				'*  통합프로세스 Map + 통합프로세스 방법론 + 통합프로세스 템플릿',
				'*  시스템 개발 전 과정에 필요한 프로세스 정의',
				'*  기획, 디자인, 개발의 협업 체계를 구축'
			]
			break
		case 5:
			descriptionMain = [
				'*  크롤링과 AI(GPT) 모델 기반의 학습 콘텐츠 자동 생성 및 제공',
				'*  고객 및 영업 진행과 진단, 현황과 통계기능 제공(BridgeWorks)',
				'*  광고 노출 없는 콘텐츠 목록 제공'
			]
	}

	return (
		<Transition threshold={props.threshold} direction={props.direction}>
			<TransitionFade threshold={props.threshold}>
				<div>
					<strong>{props.indexMain == undefined ? title[props.index] : titleMain[props.indexMain]}</strong>
					<div id="hrDiv">
						<Divider/>
					</div>
					{
						props.indexMain == undefined ?
							<List component="div">
								{description.map((text, index) => (
									<ListItem key={text} disablePadding>
										<ListItemText>{text}</ListItemText>
									</ListItem>
								))}
							</List>
							:
							<List component="div">
								{descriptionMain.map((text, index) => (
									<ListItem key={text} disablePadding>
										<ListItemText>{text}</ListItemText>
									</ListItem>
								))}
							</List>
					}
				</div>
			</TransitionFade>
		</Transition>
	)
}

const BusinessImg = (props: { index: number; threshold: number; direction: 'left' | 'right' | 'up' | 'down' | undefined }) => {
	let image
	switch (props.index) {
		case 0:
			image = bus3
			break
		case 1:
			image = bus0
			break
		case 2:
			image = bus5
			break
		case 3:
			image = bus1
		// 	break
		// case 4:
		// 	image = bus4
		// 	break
		// case 5:
		// 	image = bus5
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

const TransitionCustom = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});