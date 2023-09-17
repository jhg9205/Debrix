import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-research.png'
import subTileMobile from '@images/menu/bg-research-m.png'
import ready from '@images/menu/ready.jpg'

import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'

const Menu1 = () => {
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.RESEARCH00)

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
						연<span>구분야</span>
					</p>
					<p className="menu_title_p2">Industrial Total Solutions</p>
				</section>
			</div>
		</Transition>
	)

	return !check ? (
		<Layout>
			<div id="researchLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="researchLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					{/*컨텐츠 div*/}
					<div className="contain">
						<img src={ready} alt="ready" />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
