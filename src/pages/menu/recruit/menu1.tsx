import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-recruit.png'
import subTileMobile from '@images/menu/bg-recruit-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import recruit from '@images/menu/recruit.png'
import { Button } from '@mui/material'
import { alert } from '@utils/alert'
import { ALERT } from '@common/const'
import { $FileDownLoad } from '@utils/request'
import file from '@data/download/recruitFile.doc'

const Menu1 = () => {
	const [check, setCheck] = React.useState(false)
	const menulist = MenuListbar(PATH.RECRUIT00)

	const style: {} = {
		width: '100%',
		minHeight: '800px',
		textAlign: 'center'
	}
	const callEndFunc = () => {
		setCheck(true)
	}

	const handleClick = (event: React.MouseEvent) => {
		alert.confirm({
			type: ALERT.CONFIRM,
			text: '입사지원서를\n 저장 하시겠습니까?\n\n',
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad(file, '입사지원서', 'doc')
			}
		})
	}

	const subTitleTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						채<span>용안내</span>
					</p>
					<p className="menu_title_p2">진취적이고 활기찬 인재를 모집합니다.</p>
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
					<div className="contain" style={{ display: 'grid', overflow: 'hidden' }}>
						<img src={recruit} alt="recruit" className="recruit-img" />
						<Button
							id="recruitFile"
							onClick={handleClick}
							variant="contained"
							sx={{ width: '200px', height: '70px', borderRadius: '30px', margin: '0 auto', fontSize: '17px', fontWeight: 'bold' }}
						>
							입사지원서 다운로드
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu1
