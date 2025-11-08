import { Clock } from "lucide-react";

export default function TimezoneNotice() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm">
      <Clock className="h-4 w-4 text-primary" />
      <span className="text-foreground/90">
        <strong className="text-primary">All times are in Eastern Time (ET)</strong>
        {' '}— This calendar uses New York timezone for all dates and times
      </span>
    </div>
  );
}
