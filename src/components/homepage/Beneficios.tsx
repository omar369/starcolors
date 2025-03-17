import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Briefcase, LucideProps, Paintbrush, SwatchBook, Trophy } from "lucide-react";

export default function Beneficios() {
	interface Beneficio {
		name: string;
		descrip: string;
		Icon: React.ElementType<LucideProps>;
	}

	const beneficios: Beneficio[] = [
		{ name: "XX años de Experiencia", descrip: "años años muchos años", Icon: Trophy },
		{ name: "Asesoría de Primera", descrip: "asesorias", Icon: Briefcase },
		{ name: "Trabajos Profesionales", descrip: "trabajooop", Icon: Paintbrush },
		{ name: "Gran selección de colores", descrip: "gran selección de seroloc zero-lock zero-luck z-loc z-loq ZLOQ lucklesssezereoLOQ", Icon: SwatchBook },
	];

	return (
		<div className="w-full h-120 bg-slate-300 px-4 flex justify-around items-center">
			{beneficios.map((b, index) => { 
				const BenefIcon = b.Icon;
			return (
			<Card key={index} className="w-90 h-auto bg-slate-200 min-h-60 max-h-90 mx-4 p-4 items-center flex justify-center">
						<BenefIcon size={20}/>
				<CardHeader className="w-full text-center">
					<CardTitle>{b.name}</CardTitle>
					<CardDescription>{b.descrip}</CardDescription>
				</CardHeader>
			</Card>
			)
			})}
		</div>
	);
}

