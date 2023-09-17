import { MENU } from '@common/domain'
import TabPanel from '@components/ui/panel/panel'
import Menu1 from './menu1'
import Menu2 from './menu2'

const Main = () => {
	// debugger
	const a = window.location.href

	const value = Number(a.split('business/')[1])

	return (
		<>
			<TabPanel index={0} value={value}>
				<Menu1 />
			</TabPanel>
			<TabPanel index={1} value={value}>
				<Menu2 />
			</TabPanel>
		</>
	)
}

export default Main
