import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, Pagination, TableHead } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { makeFormatToday } from '@utils/functions'
import { compareDate } from '@common/global'

export default function BasicTable(props: { data: any; menu: string }) {
	const data = props.data[props.menu]
	const navigate = useNavigate()
	const [page, setPage] = React.useState(0)
	const [rowsPerPage, setRowsPerPage] = React.useState(10)

	const handleRowClick = (index: number) => {
		switch (props.menu) {
			case 'history':
			case 'list':
				// 연구개발 테이블
				navigate(`/Debrix/research/detail/${props.menu}/${index}`)
				break
			case 'news':
			case 'qa':
				// 홍보센터 테이블
				navigate(`/Debrix/prcenter/detail/${props.menu}/${index}`)
				break
			case 'info':
			case 'ment':
				// 인재채용 테이블
				navigate(`/Debrix/recruit/detail/${props.menu}/${index}`)
				break
			case 'as':
			case 'util':
				// 고객지원 테이블
				navigate(`/Debrix/customer/detail/${props.menu}/${index}`)
				break
		}
	}

	const bodyCellStyle = { fontSize: '1.05rem', padding: '10px 10px 10px 7px' }
	const headerCellStyle = { fontSize: '1.1rem', fontWeight: 'bold', padding: '13px' }

	return (
		<TableContainer component={Paper} sx={{ width: '75%', margin: '0 auto' }}>
			<Table aria-label="simple table">
				<TableHead sx={{ borderTop: '1px solid black', backgroundColor: 'rgba(229, 229, 229, 0.5)' }}>
					<TableRow>
						<TableCell sx={{ ...headerCellStyle, width: '5%' }} align="center">
							No
						</TableCell>
						<TableCell sx={headerCellStyle} align="center">
							제목
						</TableCell>
						<TableCell sx={{ ...headerCellStyle, width: '10%' }} align="center">
							{props.menu != 'ment' ? '작성시간' : '채용기간'}
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map(
						(rowData: any, index: number) => (
							<TableRow
								hover
								id="tbBodyRowGlobalList"
								key={rowData.seq}
								onClick={() => {
									handleRowClick(rowData.seq)
								}}
								sx={{ cursor: 'pointer' }}
							>
								<TableCell sx={bodyCellStyle} align="center">
									{rowData.seq}
								</TableCell>
								<TableCell sx={bodyCellStyle} align="left">
									{rowData.title}
								</TableCell>
								<TableCell sx={bodyCellStyle} align="center">
									{props.menu != 'ment' ? (
										rowData.date
									) : compareDate(rowData.recruit.endDate) ? (
										<p style={{ lineHeight: '0.8' }}>~ {rowData.recruit.endDate}</p>
									) : (
										<Button variant="contained" disabled style={{ color: 'black' }}>
											마감
										</Button>
									)}
								</TableCell>
							</TableRow>
						)
					)}
				</TableBody>
			</Table>
			<Pagination
				count={parseInt((data.length / 10).toString()) + 1}
				color="primary"
				onChange={(event, value) => setPage(value - 1)}
				page={page + 1}
				sx={{ display: 'flex' }}
				showFirstButton
				showLastButton
			/>
		</TableContainer>
	)
}
