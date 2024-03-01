import * as React from 'react'
import { Box, Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import BusinessIcon from '@mui/icons-material/Business'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import SummarizeIcon from '@mui/icons-material/Summarize'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import EditRoadIcon from '@mui/icons-material/EditRoad'
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf'
import BiotechIcon from '@mui/icons-material/Biotech'
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import BadgeIcon from '@mui/icons-material/Badge'
import HelpIcon from '@mui/icons-material/Help'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {Link, useNavigate} from 'react-router-dom'
import { PATH } from '@common/domain'

const HeaderDrawer = ({ toggleDrawer }: any) => {
	const navigate = useNavigate()
	const [intro, setIntro] = React.useState(false)
	const [business, setBusiness] = React.useState(false)
	const [research, setResearch] = React.useState(false)
	const [pr, setPr] = React.useState(false)
	const [employ, setEmploy] = React.useState(false)
	const [help, setHelp] = React.useState(false)
	const companyLink = [PATH.COMPANY00, PATH.COMPANY04]
	const businessLink = [PATH.BUSINESS00, PATH.BUSINESS01]
	const researchLink = [PATH.RESEARCH00, PATH.RESEARCH01]
	const prCenterLink = [PATH.PRCENTER00, PATH.PRCENTER01, PATH.PRCENTER02]
	const recruitLink = [PATH.RECRUIT00, PATH.RECRUIT03, PATH.RECRUIT01]
	const customerLink = [PATH.CUSTOMER01]
	return (
		<Box sx={{ width: 200 }} role="presentation" onKeyDown={toggleDrawer(false)}>
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Menu
					</ListSubheader>
				}
			>
				<Divider />
				<ListItemButton onClick={() => setIntro(!intro)}>
					<ListItemIcon>
						<BusinessIcon />
					</ListItemIcon>
					<ListItemText primary="회사소개" />
					{intro ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={intro} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['회사소개', '오시는길'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={companyLink[index]}>
									<ListItemIcon>
										{index === 0 ? (
											<RecordVoiceOverIcon />
										) : index === 1 ? (
											<PeopleAltIcon />
										) : index === 2 ? (
											<SummarizeIcon />
										) : index === 3 ? (
											<EmojiEventsIcon />
										) : (
											<EditRoadIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setBusiness(!business)}>
					<ListItemIcon>
						<EnergySavingsLeafIcon />
					</ListItemIcon>
					<ListItemText primary="사업분야" />
					{business ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={business} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItem disablePadding>
							<ListItemButton sx={{pl:4}} component={"button"} onClick={()=>navigate(`/business?index=${0}`)}>
								<ListItemIcon>
									<RecordVoiceOverIcon/>
								</ListItemIcon>
								<ListItemText primary={'SI(시스템통합)'}/>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton sx={{pl:4}} component={"button"} onClick={()=>navigate(`/business?index=${1}`)}>
								<ListItemIcon>
									<RecordVoiceOverIcon/>
								</ListItemIcon>
								<ListItemText primary={'Solution'}/>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton sx={{pl:4}} component={"button"} onClick={()=>navigate(`/business?index=${4}`)}>
								<ListItemIcon>
									<RecordVoiceOverIcon/>
								</ListItemIcon>
								<ListItemText primary={'UI/UX'}/>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton sx={{pl:4}} component={"button"} onClick={()=>navigate(`/business?index=${5}`)}>
								<ListItemIcon>
									<RecordVoiceOverIcon/>
								</ListItemIcon>
								<ListItemText primary={'R&D'}/>
							</ListItemButton>
						</ListItem>
					</List>
				</Collapse>
				<ListItemButton onClick={() => setResearch(!research)}>
					<ListItemIcon>
						<EnergySavingsLeafIcon />
					</ListItemIcon>
					<ListItemText primary="면허/특허" />
					{research ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={research} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['면허현황','특허현황'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={researchLink[index]}>
									<ListItemIcon>{index === 0 ? <BiotechIcon /> : index === 1 ? <EmojiEventsIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Collapse>
				<Divider />
				<ListItemButton onClick={() => setPr(!pr)}>
					<ListItemIcon>
						<InterpreterModeIcon />
					</ListItemIcon>
					<ListItemText primary="홍보센터" />
					{pr ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={pr} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['News', 'FAQ', 'PR자료'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={prCenterLink[index]}>
									<ListItemIcon>
										{index === 0 ? <NewspaperIcon /> : index === 1 ? <QuestionAnswerIcon /> : <SummarizeIcon />}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setEmploy(!employ)}>
					<ListItemIcon>
						<GroupAddIcon />
					</ListItemIcon>
					<ListItemText primary="인재채용" />
					{employ ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={employ} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['채용안내', '복리후생', '채용공고'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={recruitLink[index]}>
									<ListItemIcon>{index % 2 === 0 ? <BadgeIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
				<ListItemButton onClick={() => setHelp(!help)}>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText primary="고객지원" />
					{help ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={help} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{['자료실'].map((text, index) => (
							<ListItem key={text} disablePadding>
								<ListItemButton sx={{ pl: 4 }} component={Link} to={customerLink[index]}>
									<ListItemIcon>{index % 2 === 0 ? <HeadphonesIcon /> : <SummarizeIcon />}</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
						<Divider />
					</List>
				</Collapse>
			</List>
		</Box>
	)
}
export default HeaderDrawer
