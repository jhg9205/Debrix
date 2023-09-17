import { PATH } from './domain'

import ctData from '@data/customer.json'
import pcData from '@data/prcenter.json'
import rcData from '@data/recruit.json'
import rsData from '@data/research.json'
import { makeFormatToday } from '@utils/functions'

/**
 * <PRE>
 * 1. Name : getTableData
 * 2. Comment   : 테이블 상세페이지 정보가져오기
 * 3. Author    : CIK
 * <PRE>
 */
export const getTableData: KeyValueObjType = {
	['as']: {
		menuName: 'A/S접수',
		dataList: ctData['as'],
		path: PATH.CUSTOMER00
	},
	['util']: {
		menuName: '자료실',
		dataList: ctData['util'],
		path: PATH.CUSTOMER01
	},
	['news']: {
		menuName: 'NEWS',
		dataList: pcData['news'],
		path: PATH.PRCENTER00
	},
	['faq']: {
		menuName: 'FAQ',
		dataList: pcData['faq'],
		path: PATH.PRCENTER01
	},
	['ment']: {
		menuName: 'Q&A',
		dataList: rcData['ment'],
		path: PATH.PRCENTER01
	},
	['history']: {
		menuName: '연구실적',
		dataList: rsData['history'],
		path: PATH.RESEARCH01
	},
	['list']: {
		menuName: '산업재산권 현황',
		dataList: rsData['list'],
		path: PATH.RESEARCH02
	}
}

/**
 * <PRE>
 * 1. Name : numCommas
 * 2. Comment   : 테이블 데이터 Index 찾기
 * 3. Author    : JSH
 * <PRE>
 */
export const getIndex = (dataList: DataDetail[] | RecruitDetail[], index: string | undefined) => {
	let bottomTitle = ''
	let topTitle = ''
	const Index = Number(index) //seq 번호 index
	const dataIndex = dataList!.findIndex(i => i.seq == Index) // 배열 index

	if (dataList![dataIndex - 1] == undefined) {
		bottomTitle = dataList![dataIndex + 1].title
	} else if (dataList![dataIndex + 1] == undefined) {
		topTitle = dataList![dataIndex - 1].title
	} else {
		topTitle = dataList![dataIndex - 1].title
		bottomTitle = dataList![dataIndex + 1].title
	}

	return [bottomTitle, topTitle]
}

/**
 * <PRE>
 * 1. Name : compareDate
 * 2. Comment   : 날짜 비교 함수
 * 3. Author    : JSH
 * <PRE>
 */
export const compareDate = (date: string) => {
	const now = new Date(makeFormatToday().full)
	const endDate = new Date(date)
	return (
		now < endDate ||
		(now.getFullYear() === endDate.getFullYear() && now.getMonth() === endDate.getMonth() && now.getDate() === endDate.getDate())
	)
}
