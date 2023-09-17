import HeaderPc from '@components/layouts/header/haderPc'
import HeaderApp from '@components/layouts/header/headerApp'
import { Hidden } from '@mui/material'
import HeaderPc2 from '@components/layouts/header/headerPc2'

const Header = (props: { status: boolean }) => {
	return (
		<>
			<Hidden lgDown>
				{/*<HeaderPc status={props.status} />*/}
				<HeaderPc2 />
			</Hidden>
			<Hidden lgUp>
				<HeaderApp />
			</Hidden>
		</>
	)
}
export default Header
