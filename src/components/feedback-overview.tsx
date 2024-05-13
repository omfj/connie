import { Feedback } from "@/app/bedrift/dashboard/data";
import { FeedbackPreview } from "./feedback-preview";

export function FeedbackOverview({ data }: { data: Array<Feedback> }) {
  return (
    <div className={`grid w-full grid-cols-1 gap-4`}>
      {data.map((d) => {
        return (
          <div
            key={d.eventDate.toISOString()}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-gray-500 bg-offwhite p-4"
          >
            <div>
              <h3 className="text-balance font-serif text-2xl font-medium">{data[0].eventTitle}</h3>
              <h4 className="text-sm text-gray-500">{data[0].eventDate.toDateString()}</h4>
            </div>
            <div className="flex justify-center">
              <FeedbackPreview {...data[0]} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
