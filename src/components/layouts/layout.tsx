import Footer from './footer'
import Header from './header'

import '@css/layout.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { RootState } from '@modules/reducer'
import { useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'

import Popup from '@components/ui/popup'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/swiper-bundle.css'

import HeaderTop from './header/headerTop'
import { Button, Fab, Fade, Slide } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Transition from '@components/ui/transition/transition'
import TransitionFade from '@components/ui/transition/transitionFade'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

const Layout = (props: { children: React.ReactNode; main?: boolean }) => {
	const navigate = useNavigate()
	const indexView = useRef<HTMLDivElement>(null)
	const isPopup: boolean = useSelector((state: RootState) => state.layOutReducer.isPopup)
	const el: React.ReactNode = useSelector((state: RootState) => state.layOutReducer.children)

	let [scroll, setScroll] = useState(false)

	useEffect(() => {
		indexView.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		})
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll) //clean up
		}
	}, [])

	const handleScroll = () => {
		const top = document.querySelector('.container .top') as HTMLDivElement

		if (window.scrollY > 50) {
			top.style.backgroundColor = 'rgba(0,0,0,0.9)'
			setScroll(true)
		} else {
			top.style.backgroundColor = 'rgba(255,255,255,0)'
			setScroll(false)
		}
	}
	//swiper 후 slide
	const SwiperEvent = () => {
		const swiper = useSwiperSlide()

		return swiper.isActive ? (
			<Transition threshold={-1} direction={'up'} time={3000}>
				<TransitionFade threshold={-1}>
					<div className="slider-text-pc">
						<p>SUSTAINABLE</p>
						<p>OPERATION &</p>
						<p>ROBUST</p>
						<p>FRAMEWORK.</p>
						<div style={{height:'10px',width:'30%', backgroundColor:'#fdd947'}}></div>
						<p className="last-p">SYSTEM INTERGRATION BUSSINESS</p>
						<p className="last-p">UX/UI DEVELOPMENT CONSULTING</p>
						<p className="last-p">WEB DEVELOPMENT</p>
						<p className="last-p">SERVICE PLATFORM</p>
						<Button
							id="recruitFile"
							variant="contained"
							sx={{
								width: '150px',
								height: '50px',
								borderRadius: '10px',
								margin: '50px 30px 30px 0',
								fontSize: '17px',
								fontWeight: 'bold',
								float: 'left',
								backgroundColor:'#fdd947'
							}}
							onClick={() => {
								navigate('/company')
							}}
						>
							About us
						</Button>
					</div>
				</TransitionFade>
			</Transition>
		) : (
			<></>
		)
	}

	return (
		<div id="wrap">
			{/* <MenuList /> */}
			<div className="container">
				<div id="back-to-top-anchor" />
				<div id="img-container" ref={indexView}>
					<Header status={scroll} />
					<Swiper
						style={props.main ? { paddingTop: '0px' } : { display: 'none' }}
						loop={true}
						modules={[Navigation, Pagination, Autoplay, EffectFade]}
						spaceBetween={1}
						effect="fade"
						speed={2000}
						slidesPerView={1}
						navigation={{ prevEl: '.prev-swiper', nextEl: '.next-swiper' }}
						pagination={{ clickable: true }}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
					>
						<SwiperSlide>
							<div id="slider1" className="slider-img">
								<SwiperEvent />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div id="slider2" className="slider-img">
								<SwiperEvent />
							</div>
						</SwiperSlide>
						<button className="prev-swiper swiper-button-prev swiper-btn"></button>
						<div id="mouse-scroll" style={!scroll ? { visibility: 'visible' } : { visibility: 'hidden' }}>
							<div className="mouse">
								<div className="mouse-in"></div>
							</div>
						</div>
						<button className="next-swiper swiper-button-next swiper-btn"></button>
					</Swiper>
				</div>
				<main style={props.main ? {} : { marginTop: '0px' }}>
					<div className="contents">
						<div>{props.children}</div>
					</div>
				</main>
				<Footer />
			</div>
			<HeaderTop {...props}>
				<Fab size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</HeaderTop>
			<Popup id="popupWrap" open={isPopup} styleType={0}>
				<>{el}</>
			</Popup>
		</div>
	)
}

export default Layout
