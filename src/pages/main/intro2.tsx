import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import {Divider, Grid } from '@mui/material'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollCount } from '@modules/hooks'
import Transition from '@components/ui/transition/transition'
export const Intro2 = () => {
	const navigate = useNavigate()
	const countItem1 = useScrollCount(785, 600, 1500, 0, 800)
	const countItem2 = useScrollCount(987, 600, 1500, 0, 800)
	const countItem3 = useScrollCount(350, 200, 1500, 0, 800)
	const countItem4 = useScrollCount(166, 1, 1500, 0, 800)
	return (
		<>
			<Transition threshold={4} direction={'up'}>
				<div>
					<Grid container className="intro-content">
						<Grid item lg={6} sx={{ margin: '0 auto' }}>
							<div className="menu_title_p_fixed_warp">
								<p className="menu_title_p1">ABOUT US</p>
								<Divider sx={{ backgroundColor: '#fdd947', width: '200px', height:'5px', margin:'0 auto 30px auto' }} className='menu_title_divider'/>
								<div>
									<span style={{display:'inline-block', fontSize:'18px', width:'300px', lineHeight:'27px', marginBottom:'20px'}}>
									강력한 프레임워크를 통해
									데브릭스는 고객의 비지니스 확장에
									최적화된 기술을 제공합니다.
									</span>
								</div>
								<div>
									<span style={{fontSize:'14px', width:'300px', display:'inline-block'}}>
										미래의 가능성을 키울 수 있는 혁신적인 솔루션으로,비즈니스의 빠른 성장과 확장을 지원합니다.
									</span>
								</div>
								<div>
									<button
										className="btn10"
										onClick={() => {
											navigate('/company')
										}}
									>
										OUR SERVICES
									</button>
								</div>
							</div>
						</Grid>
						<Grid item lg={6}>
							<Grid container spacing={10}>
								<Grid item lg={6} sx={{width:'100%'}}>
									<EmojiFlagsIcon color='disabled'/>
									<p className='sub_title'>SI/SM</p>
									<p className='sub_cont'>고객사가 필요로 하는 IT 컨설팅, 기획, 개발, 구축, 운영 서비스를 통합적으로 제공합니다.</p>
								</Grid>
								<Grid item lg={6} sx={{width:'100%'}}>
									<HistoryToggleOffIcon color='disabled'/>
									<p className='sub_title'>UI/UX CONSULTING / DEVELOPMENT</p>
									<p className='sub_cont'>고객사가 필요로 하는 IT 컨설팅, 기획, 개발, 구축, 운영 서비스를 통합적으로 제공합니다.</p>
								</Grid>
								<Grid item lg={6} sx={{width:'100%'}}>
									<FavoriteBorderIcon color='disabled'/>
									<p className='sub_title'>WEB DEVELOPMENT</p>
									<p className='sub_cont'>고객사가 필요로 하는 IT 컨설팅, 기획, 개발, 구축, 운영 서비스를 통합적으로 제공합니다.</p>
								</Grid>
								<Grid item lg={6}  sx={{width:'100%'}}>
									<VoiceChatIcon color='disabled'/>
									<p className='sub_title'>AI/BIGDATA SOLUTION R&D</p>
									<p className='sub_cont'>고객사가 필요로 하는 IT 컨설팅, 기획, 개발, 구축, 운영 서비스를 통합적으로 제공합니다.</p>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Divider style={{marginLeft:'calc(-50vw + 50%)', width:'100vw'}}/>
					<div className="intro-count">
						<div className="intro-count-box" style={{borderRight:'1px solid rgba(0, 0, 0, .1)'}}>
							<span {...countItem1} className="intro-count-num" />
							<p className="intro-count-title">HAPPY CLIENTS</p>
						</div>
						<div className="intro-count-box" style={{borderRight:'1px solid rgba(0, 0, 0, .1)'}}>
							<span {...countItem2} className="intro-count-num" />
							<p className="intro-count-title">PROJECT COMPLETE</p>
						</div>
						<div className="intro-count-box" style={{borderRight:'1px solid rgba(0, 0, 0, .1)'}}>
							<p {...countItem3} className="intro-count-num" />
							<p className="intro-count-title">DESIGN TEMPLATE</p>
						</div>
						<div className="intro-count-box">
							<p {...countItem4} className="intro-count-num" />
							<p className="intro-count-title">PROJECT</p>
						</div>
					</div>
				</div>
			</Transition>
		</>
	)
}
