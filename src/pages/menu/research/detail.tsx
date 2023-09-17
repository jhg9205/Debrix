import { useParams } from 'react-router-dom'
import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import subTileImg from '@images/menu/bg-research.png'
import subTileMobile from '@images/menu/bg-research-m.png'
import MenuListbar from './menuListbar'
import { getIndex, getTableData } from '@common/global'
import DetailTable from '@components/ui/table/detailTable'

const ResearchDetail = () => {
	const { menu } = useParams()
	const { index } = useParams()
	const tbData = getTableData[menu!]
	const path = tbData.path
	const menuName = tbData.menuName
	const Index = Number(index)
	const bottomTitle = getIndex(tbData.dataList!, index)[0]
	const topTitle = getIndex(tbData.dataList!, index)[1]
	const dataIndex = tbData.dataList!.findIndex(i => i.seq == Index)
	const data = tbData.dataList![dataIndex] as DataDetail

	const style: {} = {
		width: '100%',
		minHeight: '500px',
		textAlign: 'center'
	}

	const subTitleTrans = (
		<div className="menu_title_p_fixed_warp">
			<section>
				{menu == 'history' ? (
					<p className="menu_title_p1">
						연<span>구실적</span>
					</p>
				) : (
					<p className="menu_title_p1">
						산<span>업재산권 현황</span>
					</p>
				)}
				<p className="menu_title_p2">Industrial Total Solutions</p>
			</section>
		</div>
	)

	return (
		<Layout>
			<div className="detailLayout">
				<FadeImg id="fadeImg" pc={subTileImg} mobile={subTileMobile} delay={-1} isContent={false} />
				{MenuListbar(path!)}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					<div className="contain">
						<DetailTable
							title={data.title}
							date={data.date}
							menu={'research'}
							subMenu={menuName!}
							content={data.content}
							preTitle={topTitle}
							nextTitle={bottomTitle}
							path={path!}
						></DetailTable>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default ResearchDetail
