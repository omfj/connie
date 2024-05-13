import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";

export default function Slideshow({
  logos,
  dir = "left",
}: {
  logos: Array<StaticImageData>;
  dir?: "right" | "left";
}) {
  const marqueeDivs: string = "flex items-center gap-16 mr-16 h-full";
  return (
    <Marquee direction={dir} gradient gradientColor="var(--lightgray)" pauseOnHover>
      <div className={marqueeDivs}>
        {logos.map((img) => (
          <div key={String(img)}>
            <Image src={img} alt="lol" height={1000} width={1000} className="h-14 w-auto md:h-20" />
          </div>
        ))}
        <div>
          <p className="text-lg font-medium md:text-2xl">Er du neste...?</p>
        </div>
      </div>
    </Marquee>
  );
}
