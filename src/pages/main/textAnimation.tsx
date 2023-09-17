import { useRef, useState } from 'react'

export const TextAnimation = ({
	speed,
	direction,
	children
}: {
	speed: number
	direction: 'right' | 'left'
	children: React.ReactNode
}) => {
	const [looperInstances, setLooperInstances] = useState(10)
	const outerRef = useRef<HTMLDivElement>(null)
	const innerRef = useRef<HTMLDivElement>(null)

	return (
		<div className="looper" ref={outerRef}>
			<div className="looper__innerList" ref={innerRef}>
				{[...Array(looperInstances)].map((_, ind) => (
					<div
						key={ind}
						className="looper__listInstance"
						style={{
							animationDuration: `${speed}s`,
							animationDirection: direction === 'right' ? 'reverse' : 'normal'
						}}
					>
						{children}
					</div>
				))}
			</div>
		</div>
	)
}
