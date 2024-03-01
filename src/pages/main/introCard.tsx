import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Collapse,
	Divider, Fab,
	Fade,
	IconButtonProps,
	styled,
	Tab,
	Tabs
} from '@mui/material'
import * as React from 'react'
import bus0 from '@images/menu/analyze.jpg'
import bus1 from '@images/menu/cloud.jpg'
import bus2 from '@images/menu/blockchain.jpg'
import bus3 from '@images/menu/business7.jpg'
import bus4 from '@images/menu/RnD.jpg'
import bus5 from '@images/menu/uiux.jpg'
import SI1 from "@images/main/SI1.jpg";
import SI2 from "@images/main/SI2.jpg";
import SI3 from "@images/main/SI3.jpg";
import SI4 from "@images/main/SI4.jpg";
import SI5 from "@images/main/SI5.jpg";
import SI6 from "@images/main/SI6.jpg";
import SI7 from "@images/main/SI7.jpg";
import SUCCESS from "@images/main/SUCCESS.jpg";
import SOLUTION1 from '@images/main/SOLUTION1.jpg'
import SOLUTION2 from '@images/main/SOLUTION2.jpg'
import SOLUTION3 from '@images/main/SOLUTION3.jpg'
import RnD1 from '@images/main/RND1.jpg'
import RnD2 from '@images/main/RND2.jpg'
import RnD3 from '@images/main/RND3.jpg'
import RnD4 from '@images/main/RND4.jpg'
import UIUX1 from "@images/main/UIUX1.jpg";
import UIUX2 from "@images/main/UIUX2.jpg";
import CircleIcon from '@mui/icons-material/Circle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import Button from '@mui/material/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import { BusinessText } from '@pages/menu/business/businessDetail'
import TransitionFade from '@components/ui/transition/transitionFade'
import Transition from '@components/ui/transition/transition'
import { Link, useNavigate } from 'react-router-dom'
import { getViewSize } from '@utils/functions'
import FullScreenDialog from "@pages/main/modal";
import {useState} from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {TransitionProps} from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import HeaderTop from "@components/layouts/header/headerTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	}
}

export const IntroCard = () => {
	let size = getViewSize()
	const style = {
		width: '100%',
		minHeight: '100px'
	}
	const title = [
		'SI(시스템통합)',
		'AI분석 플랫폼(HPE)',
		'빅데이터 플랫폼(HPE)',
		'스마트 안전보건관리 솔루션',
		'UI/UX(DSO)',
		'R&D'
	]
	const [value, setValue] = React.useState(0)
	const [swiper, setSwiper]: any = React.useState()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
		swiper.slideTo(newValue)
	}
	return (
		<TransitionFade threshold={10} time={1000}>
			<>
				<div className="menu_title_contain" style={style}>
					<Transition threshold={-1} direction={'up'}>
						<div className="menu_title_p_fixed_warp">
							<p className="menu_title_p1">BUSINESS</p>
							<Divider sx={{ backgroundColor: '#fdd947', width: '200px', height:'5px', margin:'0 auto 30px auto' }} className='menu_title_divider'/>
						</div>
					</Transition>
				</div>
				<div style={{ width: '60%', margin: '0 auto' }}>
					<Box sx={{ width: '100%', textAlign: 'center' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
								{title.map((text, index) =>
									size == 'lg' ? (
										<Tab key={text} label={text} {...a11yProps(index)} />
									) : (
										<Tab key={text} icon={<CircleIcon style={{ fontSize: '10px' }} />} {...a11yProps(index)} />
									)
								)}
							</Tabs>
						</Box>
					</Box>
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						initialSlide={2}
						centeredSlides={true}
						slidesPerView={size == 'sm' ? 1 : 3}
						autoplay={{ delay: 2000 }}
						onSlideChange={index => setValue(index.activeIndex)}
						onSwiper={swiper => {
							setSwiper(swiper)
						}}
						spaceBetween={10}
					>
						{title.map((text, index) => (
							<SwiperSlide key={text}>
								<IntroSubCard index={index} title={title[index]} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</>
		</TransitionFade>
	)
}

const IntroSubCard = (props: { index: number; title: string }) => {
	let image
	let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
	const [checked, setChecked] = React.useState(false)
	const [expanded, setExpanded] = React.useState(false)
	const navigate = useNavigate()
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true)
	};

	const handleClose = () => {
		setOpen(false);
	};

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100
	})

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#modal_bar')
		if (anchor) {
			anchor.scrollIntoView({
				block: 'center',
				behavior: 'smooth'
			})
		}
	}
	const handleChange = () => {
		setChecked(prev => !prev)
	}
	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const ExpandMore = styled((props: IconButtonProps) => {
		const { ...other } = props
		return <IconButton {...other} />
	})(({ theme }) => ({
		transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	}))

	switch (props.index) {
		case 0:
			image = bus3
			img1 = SI1
			img2 = SI2
			img3 = SI3
			img4 = SI4
			img5 = SI5
			img6 = SI6
			img7 = SI7
			img8 = SUCCESS
			break
		case 1:
			image = bus1
			img1 = SI1
			break
		case 2:
			image = bus2
			img1 = SI1
			break
		case 3:
			image = bus0
			img1 = SI1
			break
		case 4:
			image = bus5
			img1 = SI1
			img2 = SI1
			break
		case 5:
			image = bus4
			img1 = UIUX1
			img2 = UIUX2
	}

	return (
		<>
		<Card sx={{ maxWidth: 345, margin: '30px auto' }} raised={true}>
			<Box sx={{ position: 'relative' }}>
				<CardMedia component="img" height="400" image={image} onMouseOver={handleChange} />
				<Fade in={checked} mountOnEnter unmountOnExit>
					<div className="intro-card-hover" onMouseLeave={handleChange}>
						<p>{props.title}</p>
						<Button className="intro-card-btn" onClick={handleClickOpen}>
							상세보기
						</Button>
					</div>
				</Fade>
			</Box>
			<CardActions disableSpacing>
				<Button
					size="medium"
					color="inherit"
					onClick={()=>navigate(`/business?index=${props.index}`)}
				>
					더보기
				</Button>
				<ExpandMore onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<BusinessText index={0} threshold={0} direction={'up'} indexMain={props.index}/>
				</CardContent>
			</Collapse>
		</Card>
			<Dialog
				// fullScreen
				maxWidth='xl'
				open={open}
				onClose={handleClose}
				TransitionComponent={TransitionCustom}
				className='dialog'
				scroll='paper'
			>
				<AppBar sx={{ position: 'relative', backgroundColor:'rgba(44, 44, 44, 0.9)' }} id='modal_bar'>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 3, flex: 1 }} variant="h5" component="div">
							{props.title}
						</Typography>
					</Toolbar>
				</AppBar>
				{props.index == 0 ?
					<>
						<img src={SI1} alt='img1'/>
						<img src={SI2} alt='img2'/>
						<img src={SI3} alt='img3'/>
						<img src={SI4} alt='img4'/>
						<img src={SI7} alt='img5'/>
						<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
					</>
					:
					props.index == 1 ?
						<>
							<img src={SOLUTION2} alt='img1'/>
							<img src={SI6} alt='img5'/>
							<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
						</>
						:
						props.index == 2 ?
							<>
								<img src={SOLUTION1} alt='img1'/>
								<img src={SI5} alt='img5'/>
								<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
							</>
							:
							props.index == 3 ?
								<>
									<img src={SOLUTION3} alt='img1'/>
									<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
								</>
								:
								props.index == 4 ?
									<>
										<img src={UIUX1} alt='img1'/>
										<img src={UIUX2} alt='img2'/>
										<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
									</>
									:
									<>
										<img src={RnD1} alt='img1'/>
										<img src={RnD2} alt='img2'/>
										<img src={RnD3} alt='img3'/>
										<img src={RnD4} alt='img4'/>
										<img src={SUCCESS} alt='img5' style={{width:'100%', padding:'0'}} onClick={handleClose}/>
									</>
				}
				<Fade in={trigger}>
					<Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 30, right: 30 }}>
						<Fab size="large" aria-label="scroll back to top">
							<KeyboardArrowUpIcon />
						</Fab>
					</Box>
				</Fade>
			</Dialog>
		</>
	)
}
const TransitionCustom = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});
