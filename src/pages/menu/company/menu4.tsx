import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import React from 'react'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'

import subTileImg from '@images/menu/bg-company.png'
import subTileMobile from '@images/menu/bg-company-m.png'
import patent01 from '@images/menu/6460a0a206b33da2f9ff4071f5116f8f_1643869557_8.jpg'
import patent02 from '@images/menu/6460a0a206b33da2f9ff4071f5116f8f_1643869518_31.jpg'
import { setPopupShow } from '@modules/reducer/layout'
import { useDispatch } from 'react-redux'
import { getViewSize } from '@utils/functions'
import { PATH } from '@common/domain'
import MenuListbar from './menuListbar'

const Menu4 = () => {
	const [patent, setPatent] = React.useState(false)
	const dispatch = useDispatch()
	const menulist = MenuListbar(PATH.COMPANY03)
	const viewType = getViewSize()

	const style = {
		width: '100%',
		minHeight: '800px'
	}

	const callEndFunc = () => {
		setPatent(true)
	}

	const subTileTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						특허 <span>수상실적</span>
					</p>
					<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
				</section>
			</div>
		</Transition>
	)

	const itemData = [
		{
			key: '1',
			img: patent01,
			title: '특허_제10-2337711호'
		},
		{
			key: '2',
			img: patent02,
			title: '특허_제10-0504210호'
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

	return !patent ? (
		<Layout>
			<div id="patentLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="patentLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
					<div className="contain">
						<Transition threshold={-1} direction={'up'}>
							<div className="imagelist_warp">
								<ImageList cols={2} gap={20}>
									{itemData.map(item => (
										<ImageListItem key={item.key} style={{ border: '1px sold #ccc', cursor: 'pointer' }} onClick={onImageClick}>
											<FadeImg id="patentImgList" pc={`${item.img}`} delay={1500} isContent={true} />
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

export default Menu4
