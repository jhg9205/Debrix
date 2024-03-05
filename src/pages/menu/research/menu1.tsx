import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-research.png'
import subTileMobile from '@images/menu/bg-research-m.png'
import REQ1_1 from '@images/menu/REQ1_1.png'
import REQ1_2 from '@images/menu/REQ1_2.png'
import REQ2_1 from '@images/menu/REQ2_1.png'
import REQ2_2 from '@images/menu/REQ2_2.png'
import REQ3 from '@images/menu/REQ3.png'
import REQ4 from '@images/menu/REQ4.png'

import React, {useState} from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import {Box, Fab, Fade, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {useDispatch} from "react-redux";
import {getViewSize} from "@utils/functions";
import {setPopupShow} from "@modules/reducer/layout";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
const title = [
	'사업자등록증',
	'소프트웨어사업자확인서',
	'중소기업확인서',
	'벤처기업확인서',
]
const Menu1 = () => {
	const [patent, setPatent] = React.useState(false)
	const [open, setOpen] = React.useState(false);
	const [titleCon, setTitleCon] = useState("")
	const [temp, setTemp] = useState(0);
	const dispatch = useDispatch()
	const menulist = MenuListbar(PATH.RESEARCH00)
	const viewType = getViewSize()

	const style = {
		width: '100%',
		minHeight: '800px'
	}

	const callEndFunc = () => {
		setPatent(true)
	}
	const handleClickOpen = (num:number) => {
		setTemp(num)
		setTitleCon(title[num])
		setOpen(true)
	};
	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#modal_bar')
		if (anchor) {
			anchor.scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			})
		}
	}
	const handleClose = () => {
		setOpen(false);
	};
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100
	})

	const itemData = [
		{
			key: '0',
			img: REQ1_2,
			title: '사업자 등록증'
		},
		{
			key: '1',
			img: REQ2_1,
			title: '소프트웨어사업자확인서'
		},
		{
			key: '2',
			img: REQ3,
			title: '중소기업확인서'
		},
		{
			key: '3',
			img: REQ4,
			title: '벤처기업확인서'
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
				width = '350px'
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
						면<span>허현황</span>
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

export default Menu1
const TransitionCustom = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});