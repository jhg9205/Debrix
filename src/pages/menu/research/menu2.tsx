import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-research.png'
import subTileMobile from '@images/menu/bg-research-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import history from '@data/research.json'
import CustomTable from '@components/ui/table/table'

const Menu2 = () => {
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.RESEARCH01)

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
						연<span>구실적</span>
					</p>
					<p className="menu_title_p2">Industrial Total Solutions</p>
				</section>
			</div>
		</Transition>
	)

	return !check ? (
		<Layout>
			<div id="history2Layout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="history2Layout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					{/*컨텐츠 div*/}
					<div className="contain">
						<CustomTable data={history} menu={'history'} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
