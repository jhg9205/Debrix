import { useParams } from 'react-router-dom'
import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import subTileImg from '@images/menu/bg-recruit.png'
import subTileMobile from '@images/menu/bg-recruit-m.png'
import MenuListbar from './menuListbar'
import { PATH } from '@common/domain'
import { getIndex, getTableData } from '@common/global'
import DetailTable from '@components/ui/table/detailTable'

const RecruitDetail = () => {
	const { index } = useParams()
	const tbData = getTableData['ment']
	const Index = Number(index)
	const bottomTitle = getIndex(tbData.dataList!, index)[0]
	const topTitle = getIndex(tbData.dataList!, index)[1]
	const dataIndex = tbData.dataList!.findIndex(i => i.seq == Index)
	const data = tbData.dataList[dataIndex] as RecruitDetail

	const style: {} = {
		width: '100%',
		minHeight: '500px',
		textAlign: 'center'
	}

	const subTitleTrans = (
		<div className="menu_title_p_fixed_warp">
			<section>
				<p className="menu_title_p1">
					채<span>용공고</span>
				</p>
				<p className="menu_title_p2">데브릭스와 함께 할 인재를 모집합니다.</p>
			</section>
		</div>
	)

	return (
		<Layout>
			<div className="detailLayout">
				<FadeImg id="fadeImg" pc={subTileImg} delay={-1} mobile={subTileMobile} isContent={false} />
				{MenuListbar(PATH.RECRUIT01)}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					<div className="contain">
						<DetailTable
							title={data.title}
							date={data.date}
							menu={'recruit'}
							subMenu={'채용공고'}
							recruit={data.recruit}
							preTitle={topTitle}
							nextTitle={bottomTitle}
							path={PATH.RECRUIT01}
						></DetailTable>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default RecruitDetail
