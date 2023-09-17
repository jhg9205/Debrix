import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-recruit.png'
import subTileMobile from '@images/menu/bg-recruit-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import { Card, Grid } from '@mui/material'
import recruit0 from '@images/menu/recruit0.jpg'
import recruit1 from '@images/menu/recruit1.jpg'
import recruit2 from '@images/menu/recruit2.jpg'
import recruit3 from '@images/menu/recruit3.jpg'
import recruit4 from '@images/menu/recruit4.jpg'
import recruit5 from '@images/menu/recruit5.jpg'
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style'

const Menu3 = () => {
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.RECRUIT03)

	const data = [
		{ title: '퇴직연금제도', content: '퇴직급여 지급 재원을 금융회사에 적립하여 효율적으로 관리합니다.' },
		{ title: '경조사 유급휴가', content: '직원의 경조사(신혼여행, 장례식 등)에 휴가를 부여합니다.' },
		{ title: '(야근시)석식비, 교통비 제공', content: '부득이하게 야근을 할 경우 석식과 교통비를 지원합니다.' },
		{ title: '사무실 다과 제공', content: '직원을 위한 간식을 제공합니다.' },
		{
			title: '도서비 지원',
			content: '개발이나 자기계발에 필요한 도서 구입 시 도서비를 지원해 업무에 도움이 되도록 노력하고 있습니다.'
		},
		{ title: '자격증 수당 제공', content: '신규 자격증(기사, 산업기사) 취득시 축하금을 제공합니다.' }
	]
	const img = [recruit0, recruit1, recruit2, recruit3, recruit4, recruit5]

	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}
	const callEndFunc = () => {
		setCheck(true)
	}

	const subTitleTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						복<span>리후생</span>
					</p>
					<p className="menu_title_p2">투비콤의 복리후생을 소개합니다.</p>
				</section>
			</div>
		</Transition>
	)

	return !check ? (
		<Layout>
			<div id="listLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="listLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					{/*컨텐츠 div*/}
					<Grid container style={{ padding: '100px 0', width: '70%', margin: '0 auto' }} id="welfare">
						{data.map((cont, index) => (
							<Grid item lg={6} md={6} sm={12} key={index} style={{ padding: '30px' }}>
								<Card variant="outlined" style={{ height: '100%' }}>
									<div className="welfare-img">
										<img src={img[index]} alt="복리후생" style={{ verticalAlign: 'middle' }} />
									</div>
									<div style={{ textAlign: 'left' }}>
										<p style={{ fontSize: '20px', fontWeight: 'bold' }} className="welfare-title">
											{cont.title}
										</p>
										<p className="welfare-content">{cont.content}</p>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</Layout>
	)
}

export default Menu3
