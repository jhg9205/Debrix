import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'

import subTileImg from '@images/menu/bg-company.png'
import subTileMobile from '@images/menu/bg-company-m.png'
import { Location } from '@pages/main/location'
import React from 'react'
import { PATH } from '@common/domain'
import MenuListbar from './menuListbar'

const Menu5 = () => {
	const [location, setLocation] = React.useState(false)
	const menulist = MenuListbar(PATH.COMPANY04)

	const style = {
		width: '100%',
		minHeight: '800px'
	}

	const callEndFunc = () => {
		setLocation(true)
	}

	const subTileTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						L<span>OCATION</span>
					</p>
					<p className="menu_title_p2">Industrial Total Solutions</p>
				</section>
			</div>
		</Transition>
	)

	return !location ? (
		<Layout>
			<div id="locationLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="locationLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
					<div className="contain">
						<Location isMenu={true} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu5
