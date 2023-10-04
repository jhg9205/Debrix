import Layout from '@components/layouts/layout'

import { Location } from '@pages/main/location'
import { IntroCard } from '@pages/main/introCard'
import { Intro2 } from '@pages/main/intro2'
import { Contact } from '@pages/main/contact'
import videoD from '@images/main/FatSneakyIberiannase.mp4';
import HoverCard from "@pages/main/hoverCard";
import Skill from "@pages/main/skill";
import Social from "@pages/main/social";

const Main = () => {
	return (
		<Layout main={true}>
			<section className="intro2">
				<Intro2 />
			</section>
			<section className="intro-video">
				<video muted autoPlay loop>
					<source src={videoD} type="video/mp4"/>
				</video>
			</section>
			{/*<section>*/}
			{/*	<HoverCard/>*/}
			{/*</section>*/}
			<section className="intro-card">
				<IntroCard />
			</section>
			{/*<section>*/}
			{/*	<Social/>*/}
			{/*</section>*/}
			<section><Skill/></section>
			<section>
				<Location />
			</section>
			<section className="contact">
				<Contact />
			</section>
		</Layout>
	)
}

export default Main
