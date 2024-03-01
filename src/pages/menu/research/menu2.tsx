import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-research.png'
import subTileMobile from '@images/menu/bg-research-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import ready from '@images/menu/ready.jpg'
import history from '@data/research.json'
import CustomTable from '@components/ui/table/table'
import {useDispatch} from "react-redux";
import {getViewSize} from "@utils/functions";
import RES1 from "@images/menu/RES1.png";
import RES2 from "@images/menu/RES2.png";
import RES3 from "@images/menu/RES3.png";
import {setPopupShow} from "@modules/reducer/layout";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";

const Menu2 = () => {
	const [patent, setPatent] = React.useState(false)
	const dispatch = useDispatch()
	const menulist = MenuListbar(PATH.RESEARCH01)
	const viewType = getViewSize()

	const style = {
		width: '100%',
		minHeight: '800px'
	}

	const callEndFunc = () => {
		setPatent(true)
	}


	const itemData = [
		{
			key: '1',
			img: RES1,
			title: '크롤링 기반 학습 영상 제공방법'
		},
		{
			key: '2',
			img: RES2,
			title: '인공지능 기반의 학습 콘텐츠 자동 생성 및 제공방법'
		},
		{
			key: '3',
			img: RES3,
			title: '생성형 인공지능 기반 학습 커리큘럼 생성방법'
		}
	]

	const onImageClick = (event: React.MouseEvent) => {
		const src = event.currentTarget.querySelector('img')?.src

		let width: string = ''

		switch (viewType) {
			case 'lg':
				width = '500px'
				break
			case 'md':
				width = '450px'
				break
			case 'sm':
				width = '400px'
				break
		}

		const popup = <img src={src} style={{ width: width, height: 'auto' }} />

		dispatch(setPopupShow(true, popup))
	}

	const subTitleTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						특<span>허현황</span>
					</p>
					<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
				</section>
			</div>
		</Transition>
	)

	return !patent ? (
		<Layout>
			<div id="patentLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="patentLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					<div className="contain">
						<Transition threshold={-1} direction={'up'}>
							<div className="imagelist_warp">
								<ImageList cols={3} gap={20}>
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

export default Menu2
