import BillboardSlider from '@/components/billboard-slider'
import { Navbar } from '@/components/navbar'
import { AnimatedPinDemo } from '@/components/PinTest'

export default function Home() {
	return (
	<div>
			<Navbar />
			<BillboardSlider/>
			<AnimatedPinDemo />
			<div>content</div>
			<div>footer</div>
		</div>
	)
}
