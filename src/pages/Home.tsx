import { useState } from "react";
import CoverPage from "@/components/CoverPage";
import CalendarView from "@/components/CalendarView";

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);

  if (!showCalendar) {
    return <CoverPage onEnter={() => setShowCalendar(true)} />;
  }

  return <CalendarView />;
}
