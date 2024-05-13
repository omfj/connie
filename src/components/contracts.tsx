import Image from "next/image";
import Link from "next/link";

import type { Bedrift, Linjeforening } from "@/data";

export const Contracts = ({
  data,
  className,
}: {
  data: Array<Bedrift | Linjeforening>;
  className?: string;
}) => {
  return (
    <div className={`grid w-full grid-cols-1 gap-4 ${className}`}>
      {data.map((d) => {
        return (
          <div
            key={d.name}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-500 bg-offwhite p-4"
          >
            <div>
              <h3 className="text-balance font-serif text-2xl font-medium">
                Bedriftspresentasjon desember
              </h3>
              <h4 className="text-sm text-gray-500">Ingått: 20.10.2023</h4>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-1 flex size-20 items-center justify-center overflow-hidden rounded-full border border-gray-500">
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
              <div className="col-span-11">
                <h3 className="font-serif text-2xl font-medium">{d.name}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  {d.sectors.map((s, i) => (
                    <span key={s} className="capitalize">
                      {s}
                      {i === d.sectors.length - 1 ? "" : ","}
                    </span>
                  ))}
                </div>
                <p className="flex items-center gap-1 text-sm text-gray-500">{d.locations[0]}</p>
              </div>
            </div>
            <Link
              href={`/${d.type === "bedrift" ? "bedrift" : "linjeforening"}/dashboard`}
              className="primary-button w-fit"
            >
              Se kontrakt
            </Link>
          </div>
        );
      })}
    </div>
  );
};
