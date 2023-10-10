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
import Organize from '@images/common/organize.jpg'

const Menu1 = () => {
	const [ceo, setCeo] = React.useState(false)

	const style = {
		width: '100%',
		minHeight: '800px',
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
						About <span>DEBRIX</span>
					</p>
					<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
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
													데브릭스는 SI사업을 통한 최적화된 시스템 및 Big-Data/AI플랫폼, 안전보건관리솔루션, UI/UX를 제공하는 ICT 전문기업입니다.
													<br />
													<br />
													4차 산업 분야의 다양한 융복합 기술을 기반으로 GIS, 토지정보, 공공 서비스 및 상하수도, 물관리 분야의 시스템 통합 전문 기업이며,
													<br />
													<br />
													대용량 데이터관리 역량을 바탕으로 빅데이터 시스템 마스터 플랜 수립, 빅데이터 인프라 아키텍처 설계, 빅데이터 거버넌스 및 분석 컨설팅을 주 사업 영역으로 제공하고 있습니다.
													<br />
													<br />
													또한 적극적인 R&D 를 통해 최신 ICT기술을 적용한 신규 솔루션 및 서비스 제공을 위한 지속적인 활동을 하고, 차별화된 고객 서비스 제공을 위해 항상 노력하고 고민하는 기업으로 발전해 가고자 합니다.
													<br />
													<br />
													감사합니다.
												</p>
												<span className="ceo_sign">데브릭스 임직원 일동</span>
											</div>
										</div>
									</Fade>
								</Grid>
							</Grid>
						</Transition>
					</div>
						<Transition threshold={4} direction={'up'}>
								<Grid container>
									<Grid item lg={6} md={12} style={{backgroundColor:'#2A323F', width:'100%', padding:'30px'}} className='introOrganize'>
										<p className="company_desc_p ">
											<span className="title">회사명</span>
											<span className="desc">주식회사 데브릭스</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">설립일</span>
											<span className="desc">2023년 3월 23일</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">대표이사</span>
											<span className="desc">유 희 남</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">매출액</span>
											<span className="desc">30억원 (2023년 연결 기준)</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">사업영역</span>
											<span className="desc">소프트웨어 개발, 공급 및 유지보수<br/>시스템 통합 자문 및 구축 관련 서비스 용역</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">임직원수</span>
											<span className="desc">18명 (2023년 7월 기준)</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">연구개발<br/>/기술인력</span>
											<span className="desc">5명 (2023년 7월 기준)</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">위치</span>
											<span className="desc">서울특별시 강남구 강남대로94길 67, 3층(역삼동, 도연빌딩)</span>
										</p>
										<p className="company_desc_p ">
											<span className="title">대표전화</span>
											<span className="desc">02-553-2023</span>
										</p>
									</Grid>
									<Grid item lg={6} md={12} style={{backgroundColor:'#2A323F', width:'100%'}}>
										<img className='organize' src={Organize} alt='dd'/>
									</Grid>
								</Grid>
						</Transition>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
