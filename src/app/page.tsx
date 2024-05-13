import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Arrow from "@/assets/arrow.svg";
import Fig2 from "@/assets/figs/fig-2.webp";
import Fig9 from "@/assets/figs/fig-9.webp";
import Fig13 from "@/assets/figs/fig-13.webp";
import { linjeforeningLogos } from "@/assets/linjeforeningLogos/linjeForeningLogos";
import Slideshow from "@/components/Slideshow";
import { StudyCycle } from "@/components/study-cycle";
import { companyLogos } from "../assets/companyLogos/companyLogos";

export const metadata: Metadata = {
  title: "Connie",
};

export default function Home() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <div className="relative mx-auto w-full max-w-screen-md pb-32 pt-8">
        <h1
          className="max-w-92 mx-auto flex flex-col items-center justify-center
                        gap-2 overflow-hidden text-balance font-serif text-5xl font-medium"
        >
          <span>Finn nyutdannede</span>
          <span>
            <StudyCycle />
          </span>
          <span>til din bedrift</span>
        </h1>

        <div className="relative">
          <Image
            className="absolute right-12 top-0 -translate-y-[65%] md:right-24 lg:right-32"
            src={Fig2}
            width={75}
            height={75}
            alt="vc"
          />
          <p className="mx-auto max-w-screen-md text-balance py-8 text-center font-serif text-lg text-gray-700">
            Connie hjelper linjeforeninger og bedrifter med å finne hverandre. Vi har tjenester som
            gjør det enklere for linjeforeninger å finne bedrifter som vil samarbeide, og for
            bedrifter å finne linjeforeninger som passer til deres behov.
          </p>
        </div>

        <p className="mx-auto w-fit">
          <Link
            className="flex h-10 flex-row items-center justify-center gap-4 rounded-lg bg-primary px-4 font-medium text-white"
            href="/log-in"
          >
            Bli med <ArrowRight className="h-5 w-5" />
          </Link>
        </p>

        <Image
          src={Arrow}
          width={200}
          height={200}
          alt="arrow"
          className="absolute bottom-14 left-8 -z-10 rotate-[10deg] scale-75 md:left-20 md:scale-90 lg:bottom-16 lg:left-20 lg:scale-100"
        />
      </div>
      <div className="absolute left-0 right-0 top-0 -z-30 h-full bg-[url(/line-in-motion.svg)] bg-repeat"></div>
      <div className="absolute -left-[30%] -right-[30%] top-[530px] -z-20 h-[700px] rounded-t-[100%] bg-lightgray lg:-left-[10%] lg:-right-[10%]"></div>

      <div className="mx-auto flex max-w-screen-lg flex-col gap-14 md:gap-20">
        {/* @ts-expect-error Too lazy for this */}
        <Slideshow logos={linjeforeningLogos} />
        {/* @ts-expect-error Too lazy for this */}
        <Slideshow logos={companyLogos} dir="right" />
      </div>
      <div className="mt-24 flex flex-1 flex-col space-y-12 bg-lightgray px-8 pb-24">
        <div className="mx-auto flex max-w-screen-md items-center gap-8">
          <div className="w-2/3 lg:w-1/2">
            <h2 className="font-serif text-3xl font-medium">For studenter</h2>
            <p className="mx-auto text-balance py-8 text-lg text-gray-700">
              Vi tilbyr en innovativ plattform som forenkler prosessen med å finne
              samarbeidsmuligheter med bedrifter for linjeforeninger. Med våre tjenester kan
              studenter raskt og effektivt koble seg sammen med relevante bedrifter som ønsker å
              samarbeide.
            </p>
          </div>
          <div className="flex w-1/3 items-center justify-center lg:w-1/2">
            <Image src={Fig13} width={200} height={200} alt="vc stick man" />
          </div>
        </div>

        <div className="mx-auto flex max-w-screen-md items-center gap-8">
          <div className="flex w-1/3 items-center justify-center lg:w-1/2">
            <Image src={Fig9} width={200} height={200} alt="vc" />
          </div>
          <div className="ml-auto w-2/3 lg:w-1/2">
            <h2 className="font-serif text-3xl font-medium">For bedrifter</h2>
            <p className="mx-auto text-balance py-8 text-lg text-gray-700">
              Vår plattform tilbyr en unik mulighet for bedrifter å finne passende linjeforeninger å
              samarbeide med. Med våre tjenester kan bedrifter identifisere og nå ut til relevante
              studentorganisasjoner som matcher deres behov og interesser. Enten det er for å delta
              i arrangementer, tilby prosjektsamarbeid eller rekruttere talenter, vår plattform gir
              en effektiv måte for bedrifter å engasjere seg med en mangfoldig gruppe studenter og
              styrke sitt tilstedeværelse på campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
