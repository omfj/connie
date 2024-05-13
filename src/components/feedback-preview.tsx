import Image, { StaticImageData } from "next/image";

import { Feedback } from "@/app/bedrift/dashboard/data";

export function FeedbackPreview({ eventDate, eventTitle, graph, numberOfParticipants }: Feedback) {
  return (
    <div className="flex rounded-lg border p-6">
      <div>
        <Image src={graph} alt="graph" height={300}></Image>
        <p>Vurdering:</p>
        <div className="flex justify-evenly">
          <div className="mr-8">1/4</div>
          <div className="mr-8">2/4</div>
          <div className="mr-8">3/4</div>
          <div className="mr-8">4/4</div>
        </div>
        <div className="m-2 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-teal-500"> </div>
            <p>Datateknologi</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-sky-300"></div>
            <p>Data science</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-fuchsia-500"></div>
            <p>Datasikkerhet</p>
          </div>
          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-purple-700"></div>
            <p>IMØ</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-3xl border bg-lightgray">
          <p> Antall deltakere</p>
          <div className="text-3xl font-extrabold ">{numberOfParticipants}</div>
        </div>
        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-3xl border bg-lightgray">
          <p> Dukket ikke opp:</p>
          <div className="text-3xl font-extrabold ">4</div>
        </div>
      </div>
    </div>
  );
}
