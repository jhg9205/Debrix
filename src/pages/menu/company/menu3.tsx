import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'

import subTileImg from '@images/menu/bg-company.png'
import subTileMobile from '@images/menu/bg-company-m.png'
import certificate01 from '@images/menu/6460a0a206b33da2f9ff4071f5116f8f_1643869149_97.jpg'
import certificate02 from '@images/menu/6460a0a206b33da2f9ff4071f5116f8f_1643869014_25.jpg'
import certificate03 from '@images/menu/6b39efa48a531becccf330a83ee281a0_1643166584_88.jpg'
import certificate04 from '@images/menu/6b39efa48a531becccf330a83ee281a0_1643166572_94.jpg'
import certificate05 from '@images/menu/6b39efa48a531becccf330a83ee281a0_1643166561_47.jpg'
import certificate06 from '@images/menu/6b39efa48a531becccf330a83ee281a0_1643166527_76.jpg'
import { useDispatch } from 'react-redux'
import { setPopupShow } from '@modules/reducer/layout'
import { getViewSize } from '@utils/functions'
import { PATH } from '@common/domain'
import MenuListbar from './menuListbar'

const Menu3 = () => {
	const [certificate, setCertificate] = React.useState(false)
	const dispatch = useDispatch()
	const menulist = MenuListbar(PATH.COMPANY02)
	const viewType = getViewSize()

	const style = {
		width: '100%',
		minHeight: '1000px'
	}

	const callEndFunc = () => {
		setCertificate(true)
	}

	const subTileTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						면허 <span>등록현황</span>
					</p>
					<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
				</section>
			</div>
		</Transition>
	)

	const itemData = [
		{
			key: '1',
			img: certificate01,
			title: '벤처기업확인서'
		},
		{
			key: '2',
			img: certificate02,
			title: '기업부설연구소인증서'
		},
		{
			key: '3',
			img: certificate03,
			title: '중소기업확인서'
		},
		{
			key: '4',
			img: certificate04,
			title: '사업자등록증'
		},
		{
			key: '5',
			img: certificate05,
			title: '정보통신공사업'
		},
		{
			key: '6',
			img: certificate06,
			title: '소프트웨어사업자'
		}
	]

	const onImageClick = (event: React.MouseEvent) => {
		const src = event.currentTarget.querySelector('img')?.src

		let width: string = ''

		switch (viewType) {
			case 'lg':
				width = '550px'
				break
			case 'md':
				width = '500px'
				break
			case 'sm':
				width = '450px'
				break
		}

		const popup = <img src={src} style={{ width: width, height: 'auto' }} />

		dispatch(setPopupShow(true, popup))
	}

	return !certificate ? (
		<Layout>
			<div id="certificateLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="certificateLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
					<div className="contain">
						<Transition threshold={-1} direction={'up'}>
							<div className="imagelist_warp">
								<ImageList cols={3} gap={20}>
									{itemData.map(item => (
										<ImageListItem onClick={onImageClick} key={item.key} style={{ border: '1px sold #ccc', cursor: 'pointer' }}>
											<FadeImg id="certificateFadeImgList" pc={`${item.img}`} delay={1500} isContent={true} />
											<ImageListItemBar title={item.title} position="bottom" />
										</ImageListItem>
									))}
								</ImageList>
							</div>
						</Transition>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu3
