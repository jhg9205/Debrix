import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-business.png'
import subTileMobile from '@images/menu/bg-business-m.png'
import React from 'react'
import { BusinessDetail } from '@pages/menu/business/businessDetail'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'

const Menu1 = () => {
	const [businessInfo, setBusinessInfo] = React.useState(false)
	const menulist = MenuListbar(PATH.BUSINESS00)

	const style = {
		width: '100%',
		minHeight: '1000px'
	}

	const callEndFunc = () => {
		setBusinessInfo(true)
	}

	const subTitleTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						사<span>업분야</span>
					</p>
					<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
				</section>
			</div>
		</Transition>
	)

	return !businessInfo ? (
		<Layout>
			<div id="businessLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="businessLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					<section className="intro-detail">
						<BusinessDetail />
					</section>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
