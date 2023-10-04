import { useParams } from 'react-router-dom'
import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import subTileImg from '@images/menu/bg-prcenter.png'
import subTileMobile from '@images/menu/bg-prcenter-m.png'
import MenuListbar from './menuListbar'
import { getIndex, getTableData } from '@common/global'
import DetailTable from '@components/ui/table/detailTable'

const PrCenterDetail = () => {
	const { menu } = useParams()
	const { index } = useParams()
	const tbData = getTableData[menu!]
	const path = tbData.path
	const menuName = tbData.menuName
	const Index = Number(index)
	// const bottomTitle = getIndex(tbData.dataList!, index)[0]
	// const topTitle = getIndex(tbData.dataList!, index)[1]
	const bottomTitle = '게시물이 없습니다.'
	const topTitle = '게시물이 없습니다.'
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
				{menu == 'news' ? (
					<>
						<p className="menu_title_p1">
							N<span>EWS</span>
						</p>
						<p className="menu_title_p2">주요 기념행사와 수행 이벤트 소식입니다.</p>
					</>
				) : (
					<>
						<p className="menu_title_p1">
							Q<span>&A</span>
						</p>
						<p className="menu_title_p2">자주 문의하는 질문 유형입니다.</p>
					</>
				)}
			</section>
		</div>
	)

	return (
		<Layout>
			<div className="detailLayout">
				<FadeImg id="fadeImg" pc={subTileImg} delay={-1} mobile={subTileMobile} isContent={false} />
				{MenuListbar(path!)}
				<div className="menu_title_contain" style={style}>
					{subTitleTrans}
					<div className="contain">
						<DetailTable
							title={data.title}
							date={data.date}
							menu={'prcenter'}
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
export default PrCenterDetail
