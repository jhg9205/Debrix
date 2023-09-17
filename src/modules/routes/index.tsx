import { Routes, Route, Outlet } from 'react-router-dom'

import '@css/contents.css'
import '@css/common.css'
import '@css/common.scss'
import '@css/main.scss'
import '@css/menu.scss'

import { PATH } from '@common/domain'
import Main from '@pages/main'
import Error from '@pages/error'

import PrivateRoute from './private'
import Intro from '@pages/menu/company/menu1'
import Organization from '@pages/menu/company/menu2'
import Certificate from '@pages/menu/company/menu3'
import Patent from '@pages/menu/company/menu4'
import Location from '@pages/menu/company/menu5'

import Business from '@pages/menu/business/menu1'
import History from '@pages/menu/business/menu2'

import Research from '@pages/menu/research/menu1'
import History2 from '@pages/menu/research/menu2'
import List from '@pages/menu/research/menu3'
import ResearchDetail from '@pages/menu/research/detail'

import News from '@pages/menu/prcenter/menu1'
import QA from '@pages/menu/prcenter/menu2'
import PR from '@pages/menu/prcenter/menu3'
import PrCenterDetail from '@pages/menu/prcenter/detail'

import Info from '@pages/menu/recruit/menu1'
import Ment from '@pages/menu/recruit/menu2'
import Welfare from '@pages/menu/recruit/menu3'
import RecruitDetail from '@pages/menu/recruit/detail'

import AS from '@pages/menu/customer/menu1'
import Util from '@pages/menu/customer/menu2'
import CustomerDetail from '@pages/menu/customer/detail'

const Router = () => {
	return (
		<>
			<Routes>
				{/* <Route path={PATH.LOGIN} element={<Login />} /> */}
				<Route path={PATH.MAIN} element={<Main />} />

				<Route path={PATH.COMPANY00} element={<Intro />} />
				<Route path={PATH.COMPANY01} element={<Organization />} />
				<Route path={PATH.COMPANY02} element={<Certificate />} />
				<Route path={PATH.COMPANY03} element={<Patent />} />
				<Route path={PATH.COMPANY04} element={<Location />} />

				<Route path={PATH.BUSINESS00} element={<Business />} />
				<Route path={PATH.BUSINESS01} element={<History />} />

				<Route path={PATH.RESEARCH00} element={<Research />} />
				<Route path={PATH.RESEARCH01} element={<History2 />} />
				<Route path={PATH.RESEARCH02} element={<List />} />
				<Route path={PATH.RESEARCH03} element={<ResearchDetail />} />

				<Route path={PATH.PRCENTER00} element={<News />} />
				<Route path={PATH.PRCENTER01} element={<QA />} />
				<Route path={PATH.PRCENTER02} element={<PR />} />
				<Route path={PATH.PRCENTER03} element={<PrCenterDetail />} />

				<Route path={PATH.RECRUIT00} element={<Info />} />
				<Route path={PATH.RECRUIT01} element={<Ment />} />
				<Route path={PATH.RECRUIT03} element={<Welfare />} />
				<Route path={PATH.RECRUIT02} element={<RecruitDetail />} />

				<Route path={PATH.CUSTOMER00} element={<AS />} />
				<Route path={PATH.CUSTOMER01} element={<Util />} />
				<Route path={PATH.CUSTOMER02} element={<CustomerDetail />} />

				<Route element={<PrivateRoute authentication={true} />}>
					{/* <Route path={PATH.MAP} element={<Map />} />
					<Route path={PATH.INTRO} element={<Menu />}>
						<Route path={PATH.INTRO1} element={<Menu1 />} />
						<Route path={PATH.INTRO2} element={<Menu2 />} />
					</Route>
					<Route path={PATH.STATISTIC} element={<Menu />} /> */}
				</Route>

				<Route path={PATH.ERROR} element={<Error />} />
			</Routes>
		</>
	)
}

export default Router
