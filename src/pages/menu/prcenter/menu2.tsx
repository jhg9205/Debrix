import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import Transition from '@components/ui/transition/transition'
import subTileImg from '@images/menu/bg-prcenter.png'
import subTileMobile from '@images/menu/bg-prcenter-m.png'
import React from 'react'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import qa from '@data/prcenter.json'
import Accordion from '@mui/material/Accordion'
import { AccordionDetails, AccordionSummary, Pagination, TableHead } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'

const Menu2 = () => {
	const [check, setCheck] = React.useState(false)
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(15)
	const [expanded, setExpanded] = React.useState<string | false>('')

	const menulist = MenuListbar(PATH.PRCENTER01)
	const data = qa.faq
	const style: {} = {
		width: '100%',
		minHeight: '1000px',
		textAlign: 'center'
	}

	const callEndFunc = () => {
		setCheck(true)
	}
	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false)
	}

	const subTitleTrans = (
		<Transition threshold={-1} direction={'up'} isEndListener={true} callFunc={callEndFunc} time={1500}>
			<div className="menu_title_p_fixed_warp">
				<section>
					<p className="menu_title_p1">
						F<span>AQ</span>
					</p>
					<p className="menu_title_p2">자주 문의하는 질문 유형입니다.</p>
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
						<TableContainer component={Paper} sx={{ width: '80%', margin: '0 auto' }}>
							<Table aria-label="simple table" id="accodionTable">
								<TableBody>
									{(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(
										(rowData: any, index: number) => (
											<TableRow id="tbBodyRowGlobalList" key={index}>
												<TableCell className="accodion">
													<Accordion
														style={{ boxShadow: 'none' }}
														expanded={expanded === `panel${index + 1}`}
														onChange={handleChange(`panel${index + 1}`)}
													>
														<AccordionSummary
															expandIcon={<ExpandMoreIcon style={{ fontSize: '2.5rem' }} />}
															aria-controls={`panel${index + 1}a-content`}
															id={`panel${index + 1}a-header`}
														>
															<span style={{ color: '#d3d3d3' }}>Q.</span>
															<p style={{ padding: '10px 0' }}>{rowData.title}</p>
														</AccordionSummary>
														<AccordionDetails
															style={{ display: 'flex', height: '100%', borderTop: '1px solid black', padding: '20px' }}
														>
															<div style={{ textAlign: 'center' }}>
																<p style={{ fontSize: '30px', fontWeight: '500', padding: '20px' }}>A.</p>
															</div>
															<div>
																{rowData.content.map((content: { img: string; text: string }, index: number) => (
																	<div key={index}>
																		<p style={{ fontSize: '18px', padding: '5px 0', textAlign: 'left' }}>{content.text}</p>
																		{content.img != '' ? (
																			<img src={content.img} loading="lazy" style={{ width: '80%' }} alt="pr" />
																		) : (
																			<></>
																		)}
																	</div>
																))}
															</div>
														</AccordionDetails>
													</Accordion>
												</TableCell>
											</TableRow>
										)
									)}
								</TableBody>
							</Table>
							<Pagination
								count={parseInt((data.length / 15).toString()) + 1}
								color="primary"
								onChange={(event, value) => setPage(value - 1)}
								page={page + 1}
								sx={{ display: 'flex' }}
								showFirstButton
								showLastButton
							/>
						</TableContainer>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Menu2
