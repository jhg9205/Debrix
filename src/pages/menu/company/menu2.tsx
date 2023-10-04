import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import React from 'react'

import subTileImg from '@images/menu/bg-company.png'
import subTileMobile from '@images/menu/bg-company-m.png'
import organizationImg from '@images/menu/organization.jpg'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'

const Menu2 = () => {
	const [organization, setOrganization] = React.useState(false)

	const menulist = MenuListbar(PATH.COMPANY01)
	const style = {
		width: '100%',
		minHeight: '1000px',
		minWidth: '100%'
	}

	const callEndFunc = () => {
		setOrganization(true)
	}

	const subTileTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						ORGANIZATION <span>CHART</span>
					</p>
					<p className="menu_title_p2">Sustainable Operation & Robust Framework.</p>
				</section>
			</div>
		</Transition>
	)

	return !organization ? (
		<Layout>
			<div id="organizationLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="organizationLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
					<div className="contain">
						<Transition threshold={-1} direction={'up'}>
							<div className="organization_img">
								<FadeImg pc={organizationImg} delay={1500} isContent={true} />
							</div>
						</Transition>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
