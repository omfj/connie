import Image from "next/image";
import Link from "next/link";

import type { Bedrift, Linjeforening } from "@/data";

export const Browse = ({
  data,
  className,
}: {
  data: Array<Bedrift | Linjeforening>;
  className?: string;
}) => {
  return (
    <div className={`grid w-full grid-cols-2 gap-4 ${className}`}>
      {data.map((d) => {
        return (
          <div
            key={d.name}
            className="flex flex-col justify-between rounded-2xl border border-gray-500 bg-offwhite p-4"
          >
            <div>
              <div className="grid grid-cols-12">
                <div className="col-span-3 flex size-20 items-center justify-center overflow-hidden rounded-full border border-gray-500">
                  <Image
                    src={`/${
                      d.type === "bedrift" ? "bedrifter" : "linjeforeninger"
                    }/${d.id}.${d.id === "echo" ? "webp" : "png"}`}
                    width={100}
                    height={100}
                    alt={d.name}
                    className="w-full scale-75 object-fill"
                  />
                </div>
                <div className="col-span-9">
                  <h3 className="font-serif text-2xl font-medium">{d.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    {d.sectors.map((s, i) => (
                      <span key={s} className="capitalize">
                        {s}
                        {i === d.sectors.length - 1 ? "" : ","}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    {d.locations.map((l, i) => (
                      <span key={l}>
                        {l}
                        {i === d.locations.length - 1 ? "" : ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="max-w-[600px] py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis tenetur
                nesciunt perferendis quam veniam, saepe dolores suscipit? A consectetur ducimus
                similique distinctio nam ab!
              </p>
            </div>
            <div>
              <Link
                href={`/${d.type === "bedrift" ? "bedrift" : "linjeforening"}/dashboard`}
                className="primary-button"
              >
                Ta kontakt
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
