"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !m-0 font-bold  text-base text-slate-100">
           Pintura Acrílica 7 años 
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Vin R Exterior Pro 
            </span>
          </div>
					<Image src={"/cubetas/etiqR.png"} alt="etiq" width={100} height={100} className="w-full h-full "/>
        </div>
      </PinContainer>
    </div>
  );
}

