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
import bus0 from '@images/menu/business8.jpg'
import bus1 from '@images/menu/business9.jpg'
import bus2 from '@images/menu/business12.jpg'
import bus3 from '@images/menu/business7.jpg'
import bus4 from '@images/menu/business11.jpg'
import HPEimg1 from '@images/main/HPEimg1.jpg'
import HPEimg2 from '@images/main/HPEimg2.jpg'
import HPEimg3 from '@images/main/HPEimg3.jpg'
import HPEimg4 from '@images/main/HPEimg4.jpg'
import HPEimg5 from '@images/main/HPEimg5.jpg'
import HPEimg6 from '@images/main/HPEimg6.jpg'
import HPEimg7 from '@images/main/HPEimg7.jpg'
import HPEimg8 from '@images/main/HPEimg8.jpg'
import HPEimg9 from '@images/main/HPEimg9.jpg'
import HPEimg10 from '@images/main/HPEimg10.jpg'
import HPEimg11 from '@images/main/HPEimg11.jpg'
import HPEimg12 from '@images/main/HPEimg12.jpg'
import HPEimg13 from '@images/main/HPEimg13.jpg'
import HPEimg14 from '@images/main/HPEimg14.jpg'
import HPEimg15 from '@images/main/HPEimg15.jpg'
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
		'AI분석 플랫폼(HPE)',
		'빅데이터 플랫폼(HPE)',
		'SI 사업(GIS, Mobile 등)',
		'스마트 안전보건관리 솔루션',
		'RPA(지능형 업무자동화 솔루션)'
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
		// navigate(`/business?index=${props.index}`)
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
			image = bus0
			img1 = HPEimg1
			img2 = HPEimg2
			img3 = HPEimg3
			img4 = HPEimg4
			img5 = HPEimg5
			img6 = HPEimg6
			img7 = HPEimg7
			img8 = HPEimg8
			img9 = HPEimg9
			img10 = HPEimg10
			img11 = HPEimg11
			img12 = HPEimg12
			img13 = HPEimg13
			img14 = HPEimg14
			img15 = HPEimg15
			break
		case 1:
			image = bus1
			break
		case 2:
			image = bus2
			break
		case 3:
			image = bus3
			break
		case 4:
			image = bus4
			break
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
					onClick={handleClickOpen}
				>
					더보기
				</Button>
				<ExpandMore onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<BusinessText index={props.index} threshold={0} direction={'up'} />
				</CardContent>
			</Collapse>
		</Card>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={TransitionCustom}
				className='dialog'
			>
				<AppBar sx={{ position: 'relative', backgroundColor:'black' }} id='modal_bar'>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleClose}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 3, flex: 1 }} variant="h4" component="div">
							{props.title}
						</Typography>
					</Toolbar>
				</AppBar>
				<img src={img1} alt='img1'/>
				<img src={img2} alt='img2'/>
				<img src={img3} alt='img3'/>
				<img src={img4} alt='img4'/>
				<img src={img5} alt='img5'/>
				<img src={img6} alt='img5'/>
				<img src={img7} alt='img5'/>
				<img src={img8} alt='img5'/>
				<img src={img9} alt='img5'/>
				<img src={img10} alt='img5'/>
				<img src={img11} alt='img5'/>
				<img src={img12} alt='img5'/>
				<img src={img13} alt='img5'/>
				<img src={img14} alt='img5'/>
				<img src={img15} alt='img5'/>
				<Fade in={trigger}>
					<Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 30, right: 30 }}>
						<Fab size="small" aria-label="scroll back to top">
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
	return <Slide direction="up" ref={ref} {...props} />;
});
