import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'

import subTileImg from '@images/menu/bg-company.png'
import subTileMobile from '@images/menu/bg-company-m.png'
import introImg from '@images/common/img-intro2.png'
import React from 'react'
import { Fade, Grid } from '@mui/material'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'

const Menu1 = () => {
	const [ceo, setCeo] = React.useState(false)

	const style = {
		width: '100%',
		minHeight: '1000px',
		minWidth: '100%'
	}

	const callEndFunc = () => {
		setCeo(true)
	}

	const menulist = MenuListbar(PATH.COMPANY00)

	const subTileTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_warp">
				<section>
					<p className="menu_title_p1">
						CEO'S <span>GREETINGS</span>
					</p>
					<p className="menu_title_p2">Industrial Total Solutions</p>
				</section>
			</div>
		</Transition>
	)

	return !ceo ? (
		<Layout>
			<div id="companyLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="companyLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
					<div className="contain">
						<Transition threshold={-1} direction={'up'}>
							<Grid container spacing={0}>
								<Grid item lg={6} md={12}>
									<div className="ceo_img">
										<FadeImg pc={introImg} delay={1500} isContent={true} />
									</div>
								</Grid>
								<Grid item lg={6} md={12}>
									<Fade in={true} timeout={1500}>
										<div className="ceo_area">
											<div className="ceo_tit">
												안녕하십니까!
												<br />
												<span className="pointer">DEBRIX</span>를 방문해주셔서 감사합니다.
											</div>
											<div className="ceo_txt">
												<p>
													데브릭스는 SI사업을 통한 최적화된 시스템 및 Big-Data/AI플랫폼, RPA, 안전보건관리솔루션, UI/UX를 제공하는 ICT전문 기업입니다.
													<br />
													<br />
													4차 산업 분야의 다양한 융복합 기술을 기반으로 GIS, 토지정보, 공공 서비스 및 상하수도, 물관리 분야의 시스템 통합
													전문 ICT기업입니다.<br />
													<br />
													DEBRIX는 대용량 데이터관리 역량을 바탕으로 빅데이터 시스템 마스터 플랜 수립, 빅데이터 인프라 아키텍처 설계,
													빅데이터 거버넌스 및 분석 컨설팅을 주 사업 영역으로 제공하고 있습니다.
													<br />
													<br />
													또한 상용 플랫폼 구축을 지향하며, 분석업무의 전체 End-To-End 운영 절차를 끊김없이 팀간 협력하여 진행하고 자동화할 수 있는
													기능과 Repository를 제공합니다.
													<br />
													<br />
													감사합니다.
												</p>
												<span className="ceo_sign">주식회사 데브릭스 임직원 일동</span>
											</div>
										</div>
									</Fade>
								</Grid>
							</Grid>
						</Transition>
					</div>
					<div style={{ paddingBottom: '20px', display: 'inline-grid' }} className="company_info">
						<Transition threshold={4} direction={'up'}>
							<section>
								<Grid container spacing={0}>
									<Grid item lg={6} md={12}>
										<p className="company_desc_p ">
											<span className="title">사명</span>
											<span className="desc">주식회사 데브릭스 ( TOBECOM Co., Ltd. )</span>
										</p>
									</Grid>
									<Grid item lg={6} md={12}>
										<p className="company_desc_p ">
											<span className="title">대표이사</span>
											<span className="desc">유 희 남</span>
										</p>
									</Grid>
								</Grid>
							</section>
						</Transition>
						<Transition threshold={5} direction={'up'}>
							<section>
								<Grid container spacing={0}>
									<Grid item lg={6} md={12}>
										<p className="company_desc_p ">
											<span className="title">설립연도</span>
											<span className="desc">2023년 9월 1일</span>
										</p>
									</Grid>
									<Grid item lg={6} md={12}>
										<p className="company_desc_p ">
											<span className="title">위치</span>
											<span className="desc">서울특별시 강남구 강남대로94길 67 3층(역삼동, 도연빌딩)</span>
										</p>
									</Grid>
								</Grid>
							</section>
						</Transition>
						<Transition threshold={6} direction={'up'}>
							<section>
								<Grid container spacing={0}>
									<Grid item lg={6} md={12}>
										<p className="company_desc_p ">
											<span className="title">연락처</span>
											<span className="desc">Tel : 02-553-2023 / Fax : 02-553-2023</span>
										</p>
									</Grid>
									<Grid item lg={6} md={12}>
										<p className="company_desc_p ">
											<span className="title lh">사업영역</span>
											<span className="desc">
												SI 시스템통합사업
												<span>대용량 빅데이터 관리 플랫폼 사업</span>
												<span>AI 분석 플랫폼 사업</span>
												<span>스마트 안전보건관리 솔루션</span>
												<span>RPA(지능형 업무 자동화 솔루션)</span>
											</span>
										</p>
									</Grid>
								</Grid>
							</section>
						</Transition>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
