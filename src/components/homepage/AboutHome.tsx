import { Button } from "@/components/ui/button";

export default function AboutHome() {
	return (
		<div className="bg-slate-200 grid grid-rows-3 min-h-80 max-h-120 flex justify-center items-center text-balance px-24 text-center">
			<div className="row-span-2">
				<h1 className="font-bold my-4">Sobre nosotros</h1>
				<p>
					En Starcolors llevamos 30 años transformando espacios en Querétaro con
					calidad y pasión. Ofrecemos servicios integrales de pintura e
					impermeabilización que combinan tradición y tecnología. Nuestro
					compromiso trasciende el arte del color, impulsando la capacitación y
					el desarrollo local. Descubre cómo cada trazo fortalece nuestra
					comunidad y construye un futuro prometedor.
				</p>
			</div>
			<div className="mb-8">
				<Button>¡Conócenos!</Button>
			</div>
		</div>
	);
}
