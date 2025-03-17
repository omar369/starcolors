import BillboardSlider from '@/components/billboard-slider'
// import { AnimatedPinDemo } from '@/components/PinTest'
import AboutHome from '@/components/homepage/AboutHome'
import Beneficios from '@/components/homepage/Beneficios'
import ProductosHome from '@/components/homepage/ProductosHome'
import { Testimonios } from '@/components/homepage/Testimonios'
import Subscribe from '@/components/homepage/Subscribe'
import BlogHome from '@/components/homepage/BlogHome'
import Marcas from '@/components/homepage/Marcas'

export default function Home() {
	return (
	<div>
			<BillboardSlider/>
			<Beneficios />
			<AboutHome />
			<Marcas />
			<ProductosHome />
			<BlogHome/>
			<Subscribe/>
			<Testimonios/>
			{/* -COMPONENTES HECHOS
			<AnimatedPinDemo />
			 */}
			<div>footer</div>
		</div>
	)
}
