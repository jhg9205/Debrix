import { useParams } from 'react-router-dom'
import Layout from '@components/layouts/layout'
import FadeImg from '@components/ui/effect/fadeImg'
import subTileImg from '@images/menu/bg-customer.png'
import subTileMobile from '@images/menu/bg-customer-m.png'
import MenuListbar from './menuListbar'
import { getIndex, getTableData } from '@common/global'
import DetailTable from '@components/ui/table/detailTable'

const CustomerDetail = () => {
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
				{menu == 'as' ? (
					<>
						<p className="menu_title_p1">
							A/S<span>접수</span>
						</p>
						<p className="menu_title_p2">Industrial Total Solutions</p>
					</>
				) : (
					<>
						<p className="menu_title_p1">
							자<span>료실</span>
						</p>
						<p className="menu_title_p2">다양한 자료들을 다운받으실 수 있습니다.</p>
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
							menu={'customer'}
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
export default CustomerDetail
