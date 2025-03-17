"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface SlideData {
	title: string;
	description: string;
	image: string;
}

const initialSlides: SlideData[] = [
	{
		title: "Productos",
		description: "Entra a nuestro catálogo interactivo.",
		image: "/billboard/1.webp",
	},
	{
		title: "Servicios",
		description: "Contamos con servicios de aplicación y otros.",
		image: "/billboard/2.webp",
	},
	{
		title: "Sobre Nosotros",
		description: "Conoce sobre nuestra misión, visión y compromiso social.",
		image: "/billboard/3.webp",
	},
	{
		title: "Portafolio",
		description:
			"Entra a conocer sobre nuestra trayectoria con demostraciones de trabajos previos.",
		image: "/billboard/4.webp",
	},
	{
		title: "Contacto",
		description:
			"Comunícate con nosotros por cualquier medio, te brindamos atención personalizada.",
		image: "/billboard/rendr_1.png",
	},
];

export default function BillboardSlider() {
	// Estado para mantener el listado de  (se reordenará)
	const [slides, setSlides] = useState<SlideData[]>(initialSlides);

	// Referencias para el contenedor del carrusel y la tarjeta activa (slide actual)
	const carouselRef = useRef<HTMLDivElement>(null);
	const slideRef = useRef<HTMLDivElement>(null);
	const [slideWidth, setSlideWidth] = useState(0);
	const [animateNext, setAnimateNext] = useState(false);

	// Al montar o actualizar (por ejemplo, al reordenar) medimos el ancho de la primera tarjeta
	useEffect(() => {
		if (slideRef.current) {
			setSlideWidth(slideRef.current.offsetWidth);
		}
	}, [slides]);

	useGSAP(() => {
		if (animateNext && carouselRef.current && slideRef.current) {
			const tl = gsap.timeline({
				onComplete: () => {
					// Reordenamos el array: movemos el primer slide al final.
					setSlides((prevSlides) => {
						const newSlides = [...prevSlides];
						const firstSlide = newSlides.shift();
						if (firstSlide) {
							newSlides.push(firstSlide);
						}
						return newSlides;
					});
					// En el siguiente frame, reseteamos la posición del contenedor y restablecemos scale/opacity
					requestAnimationFrame(() => {
						gsap.set(carouselRef.current, { x: 0 });
						gsap.set(slideRef.current, { scale: 1, opacity: 1 });
					});
					setAnimateNext(false);
				},
			});
			// Animamos el contenedor: se desplaza en x (hacia la izquierda)
			tl.to(
				carouselRef.current,
				{ x: -slideWidth, duration: 1, ease: "power2.out" },
				0,
			)
				// Simultáneamente, animamos el slide activo: reducimos su scale y opacidad
				.to(
					slideRef.current,
					{ scale: 0.9, opacity: 0.5, duration: 1, ease: "power2.out" },
					0,
				);
		}
	}, [animateNext, slideWidth]);

	// Función para avanzar: anima el contenedor y al finalizar reordena el array
	const handleNext = () => {
		if (!carouselRef.current) return;
		gsap.to(carouselRef.current, {
			x: -slideWidth,
			duration: 1,
			ease: "power2.out",
			onComplete: () => {
				setSlides((prevSlides) => {
					const newSlides = [...prevSlides];
					const firstSlide = newSlides.shift(); // Quita la primera
					if (firstSlide) {
						newSlides.push(firstSlide); // La agrega al final
					}
					return newSlides;
				});
				// Reiniciamos la posición en el siguiente frame para evitar glitches
				requestAnimationFrame(() => {
					gsap.set(carouselRef.current, { x: 0 });
				});
			},
		});
	};

	// Función para retroceder: reordena el array en sentido inverso y luego anima el contenedor
	const handlePrev = () => {
		if (!carouselRef.current) return;
		setSlides((prevSlides) => {
			const newSlides = [...prevSlides];
			const lastSlide = newSlides.pop();
			if (lastSlide) {
				newSlides.unshift(lastSlide);
			}
			return newSlides;
		});
		gsap.set(carouselRef.current, { x: -slideWidth });
		gsap.to(carouselRef.current, {
			x: 0,
			duration: 1,
			ease: "power2.out",
		});
	};
	return (
		<div className="relative w-screen h-180 bg-gray-900 overflow-hidden text-white">
			{/* 
      En mobile el contenedor ocupa el 100% y en md se usa un ancho calculado.
      Aquí, para 5 slides, se usa: calc(33% * 5) = 165% aproximadamente.
    */}
			<div
				ref={carouselRef}
				className="flex h-full items-center w-[calc(100%*5)] md:w-[calc(33%*5)]"
			>
				{slides.map((slide, idx) => {
					// Se sigue usando la lógica de activo según idx (ajusta si es necesario)
					return (
						<div
							key={idx}
							ref={idx === 1 ? slideRef : null}
							// En mobile cada tarjeta ocupa w-full; en md, w-1/5 (20% del contenedor)
							className={'w-full md:w-1/5 px-8 relative flex items-center scale-100 opacity-80'}
						>
							<div className="relative w-full h-120">
								<Image
									src={slide.image}
									alt={`Slide ${idx}`}
									fill
									className="object-cover opacity-90"
									priority={idx === 1}
								/>
							</div>
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
								<h2 className="text-3xl md:text-5xl font-bold mb-4">
									{slide.title}
								</h2>
								<button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
									{slide.description}
								</button>
							</div>
						</div>
					);
				})}
			</div>
			{/* Controles */}
			<div className="absolute bottom-6 left-0 w-full px-8 flex items-center justify-between">
				<div className="flex items-center space-x-8">
					<span className="text-sm">
						{`01 / ${slides.length < 10 ? `0${slides.length}` : slides.length}`}
					</span>
					<div className="flex items-center space-x-4">
						<button
							onClick={handlePrev}
							className="p-2 hover:scale-125 transition-transform"
						>
							&larr;
						</button>
						<button
							onClick={handleNext}
							className="p-2 hover:scale-125 transition-transform"
						>
							&rarr;
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
