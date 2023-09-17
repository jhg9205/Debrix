import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import React from 'react'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'

import subTileImg from '@images/menu/bg-business.png'
import subTileMobile from '@images/menu/bg-business-m.png'
import { getViewSize } from '@utils/functions'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'

import businessJson from '../../../assets/data/business.json'

const Menu2 = () => {
	const [history, setHistory] = React.useState(false)
	const menulist = MenuListbar(PATH.BUSINESS01)

	const style = {
		width: '100%',
		minHeight: '1000px'
	}

	const viewType = getViewSize()

	const callEndFunc = () => {
		setHistory(true)
	}

	const subTileTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						사<span>업실적</span>
					</p>
					<p className="menu_title_p2">Industrial Total Solutions</p>
				</section>
			</div>
		</Transition>
	)

	const timelineItem = (
		key: string,
		content: string,
		typography: string[],
		color?: 'secondary' | 'inherit' | 'grey' | 'primary' | 'error' | 'info' | 'success' | 'warning' | any
	) => (
		<TimelineItem key={key}>
			<TimelineSeparator>
				<TimelineDot color={color} />
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				{content}
				{typography.map((value: string, index: number) => (
					<Typography key={key + index}>- {value}</Typography>
				))}
			</TimelineContent>
		</TimelineItem>
	)

	return !history ? (
		<Layout>
			<div id="historyLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
				</div>
			</div>
		</Layout>
	) : (
		<Layout>
			<div id="historyLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} isContent={false} />
				{menulist}
				<div className="menu_title_contain" style={style}>
					{subTileTrans}
					<div className="contain">
						<Timeline
							position={viewType == 'sm' ? 'right' : 'alternate'}
							nonce={undefined}
							onResize={undefined}
							onResizeCapture={undefined}
						>
							<Transition threshold={-1} direction={'up'}>
								<>
									<p className="timeline_year">
										<span>20</span>23<span>년도</span>
									</p>
									{businessJson['2023'].map(data => timelineItem(data.seq, data.content, data.typography, data.color))}
									<p className="timeline_year pt-75">
										<span>20</span>22<span>년도</span>
									</p>
									{businessJson['2022'].map(data => timelineItem(data.seq, data.content, data.typography, data.color))}
									<p className="timeline_year pt-75">
										<span>20</span>21<span>년도</span>
									</p>
									{businessJson['2021'].map(data => timelineItem(data.seq, data.content, data.typography, data.color))}
									<p className="timeline_year pt-75">
										<span>20</span>20<span>년도</span>
									</p>
									{businessJson['2020'].map(data => timelineItem(data.seq, data.content, data.typography, data.color))}
									<p className="timeline_year pt-75">
										<span>20</span>19<span>년도</span>
									</p>
									{businessJson['2019'].map(data => timelineItem(data.seq, data.content, data.typography, data.color))}
								</>
							</Transition>
						</Timeline>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
