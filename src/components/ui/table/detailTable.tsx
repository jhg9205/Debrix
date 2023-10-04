import { Link, useNavigate, useParams } from 'react-router-dom'

import { Table, TableBody, TableContainer, TableFooter, TableHead } from '@mui/material'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import { isNone, makeFormatToday } from '@utils/functions'
import { VITE_APP_IMGS } from '@common/const'
import { DetailRecruit } from '@components/ui/table/detailRecruit'
import { compareDate } from '@common/global'

const DetailTable = (props: IDetailTableProps) => {
	const navigate = useNavigate()
	const { menu, index } = useParams()

	const none = '게시물이 없습니다.'
	const preTile = isNone(props.preTitle) ? none : props.preTitle
	const nextTitle = isNone(props.nextTitle) ? none : props.nextTitle

	const handleClick = (evt: React.MouseEvent) => {
		const id = evt.currentTarget.id

		let idx = 0
		let title = ''

		if (id == 'preTableRow') {
			++idx
			title = preTile
		} else {
			--idx
			title = nextTitle
		}

		return title.indexOf(none) ? navigate(`/Debrix/${props.menu}/detail/${menu}/${Number(index) + idx}`) : null
	}

	const imgsGroup = {
		width: '1000px',
		height: 'auto',
		overflow: 'hidden',
		margin: '0 auto',
		paddingBottom: '70px'
	}

	return (
		<>
			<TableContainer component={Paper} sx={{ width: '70%', margin: '0 auto' }}>
				<Table aria-label="simple table">
					<TableHead sx={{ borderBottom: '2px solid black' }}>
						<TableRow>
							<TableCell className="detail-header">{props.title}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell sx={{ fontSize: '0.95rem', fontWeight: 'normal' }}>
								{props.subMenu}
								{props.menu == 'recruit' ? (
									compareDate(props.recruit!.endDate) ? (
										<Button
											variant="contained"
											disabled
											style={{ color: 'white', float: 'right', padding: '10px 30px', backgroundColor: '#5778ff', fontSize: '1.2rem' }}
										>
											진행중
										</Button>
									) : (
										<Button
											variant="contained"
											disabled
											style={{ color: 'black', float: 'right', padding: '10px 30px', fontSize: '1.2rem' }}
										>
											마감
										</Button>
									)
								) : (
									<p style={{ float: 'right' }}>{props.date}</p>
								)}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.menu != 'recruit' ? (
							props.content!.map((content, index) => (
								<TableRow key={index}>
									<TableCell style={{ padding: '70px 100px' }}>
										{content.img != '' ? (
											<div style={imgsGroup} className="img-container">
												<img src={VITE_APP_IMGS + content.img} loading="lazy" style={{ width: '100%' }} alt="pr" />
											</div>
										) : (
											<></>
										)}
										<p className="detail-content">{content.text}</p>
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell>
									<DetailRecruit recruit={props.recruit!} title={props.title} />
								</TableCell>
							</TableRow>
						)}
					</TableBody>
					<TableFooter sx={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}>
						<TableRow id="preTableRow" hover onClick={handleClick} className={'cursor-pointer'}>
							<TableCell sx={{ display: 'flex' }}>
								<KeyboardArrowUpIcon fontSize="large" opacity={0.6} />
								<span className="detail-footer">{preTile}</span>
							</TableCell>
						</TableRow>
						<TableRow id="nextTableRow" hover onClick={handleClick} className={'cursor-pointer'}>
							<TableCell sx={{ display: 'flex' }}>
								<KeyboardArrowDownIcon fontSize="large" opacity={0.6} />
								<span className="detail-footer">{nextTitle}</span>
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
			<div className="detail-button">
				<Link to={props.path}>
					<Button variant="contained" endIcon={<MenuIcon />}>
						목차
					</Button>
				</Link>
			</div>
		</>
	)
}

export default DetailTable
