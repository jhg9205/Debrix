import React from 'react'
import { Button, Divider } from '@mui/material'
import { alert } from '@utils/alert'
import { ALERT, VITE_APP_IMGS } from '@common/const'
import { $FileDownLoad } from '@utils/request'
import file from '@data/download/recruitFile.doc'

export const DetailRecruit = (props: {
	recruit: {
		text: { recruit1: string[]; recruit2: string[]; recruit3: string[] }
		img: string
		startDate: string
		endDate: string
	}
	title: string
}) => {
	const textData = props.recruit.text

	const handleClick = (event: React.MouseEvent) => {
		alert.confirm({
			type: ALERT.CONFIRM,
			text: '입사지원서를\n 저장 하시겠습니까?\n\n',
			confirmText: '확인',
			confirmCall: () => {
				$FileDownLoad(file, '입사지원서', 'doc')
			}
		})
	}

	return (
		<div className="recruit-detail-container">
			<div className="recruit-detail-title">
				<h1>{props.title}</h1>
				<Divider />
			</div>
			<div className="recruit-detail-subTitle">
				<h3>자격요건</h3>
				{textData.recruit1.map((text, index) => (
					<p key={index}>⦁ {text}</p>
				))}
			</div>
			<div className="recruit-detail-subTitle">
				<h3>우대사항</h3>
				{textData.recruit2.map((text, index) => (
					<p key={index}>⦁ {text}</p>
				))}
			</div>
			<div className="recruit-detail-subTitle">
				<h3>근무조건</h3>
				{textData.recruit3.map((text, index) => (
					<p key={index}>⦁ {text}</p>
				))}
			</div>
			<div className="recruit-detail-subTitle">
				<h3>채용절차</h3>
				<div className="recruit-detail-img">
					<img src={VITE_APP_IMGS + props.recruit.img} alt="채용절차" />
				</div>
			</div>
			<div className="recruit-detail-subTitle">
				<h3>기타사항</h3>
				<p>✓ 고용형태는 정규직입니다</p>
				<p>✓ 국가 유공자, 장애인 등 취업보호대상자는 관계 법령에 따라 우대합니다</p>
				<p>✓ 해외 여행에 결격사유가 없어야 하며 남성은 군필 혹은 면제자여야 합니다</p>
				<p>✓ 지원서에 기재된 내용 중 허위 사실이 발견될 경우 채용이 취소될 수 있습니다</p>
			</div>
			<div style={{ fontSize: '15px', textAlign: 'center', fontWeight: '500', color: '#7f7f7f' }}>
				<p>본 채용에 관한 문의 사항은</p>
				<p>경영지원팀 메일(tobecom@naver.com)로 부탁 드립니다.</p>
			</div>
			<Button
				id="recruitFile"
				onClick={handleClick}
				variant="contained"
				sx={{
					width: '200px',
					height: '70px',
					borderRadius: '30px',
					fontSize: '17px',
					fontWeight: 'bold',
					display: 'flex',
					margin: '50px auto 0 auto'
				}}
			>
				입사지원서 다운로드
			</Button>
		</div>
	)
}
