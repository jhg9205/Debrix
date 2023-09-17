import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-prcenter.png'
import subTileMobile from '@images/menu/bg-prcenter-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import news from '@data/prcenter.json'
import CustomTable from '@components/ui/table/table'
import { useNavigate } from 'react-router-dom'

const Menu1 = () => {
	const navigate = useNavigate()
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.PRCENTER00)

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
						N<span>EWS</span>
					</p>
					<p className="menu_title_p2">주요 기념행사와 수행 이벤트 소식입니다.</p>
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
					<div className="contain">
						<CustomTable data={news} menu={'news'} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
