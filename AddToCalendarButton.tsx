import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, Download } from "lucide-react";
import type { CalendarEvent } from "@/lib/investmentData";
import { generateICS, downloadICS, generateGoogleCalendarUrl } from "@/lib/calendarExport";
import { toast } from "sonner";

interface AddToCalendarButtonProps {
  event: CalendarEvent;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export default function AddToCalendarButton({ 
  event, 
  variant = "outline",
  size = "sm" 
}: AddToCalendarButtonProps) {
  const isIconButton = size === "icon";
  const [open, setOpen] = useState(false);

  const handleGoogleCalendar = () => {
    const url = generateGoogleCalendarUrl(event);
    window.open(url, '_blank');
    setOpen(false);
    toast.success("Opening Google Calendar...");
  };

  const handleDownloadICS = () => {
    const icsContent = generateICS(event);
    const filename = `${event.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
    downloadICS(icsContent, filename);
    setOpen(false);
    toast.success("Calendar file downloaded!");
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={isIconButton ? "" : "gap-2"}>
          <Calendar className="h-4 w-4" />
          {!isIconButton && "Add to Calendar"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover">
        <DropdownMenuItem onClick={handleGoogleCalendar} className="cursor-pointer">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.696 16.481c-1.11 1.11-2.617 1.722-4.241 1.722H9.517v-3.45h3.938c.524 0 1.023-.204 1.396-.577.374-.373.577-.872.577-1.396 0-1.09-.887-1.973-1.973-1.973H9.517V7.357h3.938c1.624 0 3.131.612 4.241 1.722 1.11 1.11 1.722 2.617 1.722 4.241s-.612 3.131-1.722 4.241z"/>
          </svg>
          Google Calendar
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownloadICS} className="cursor-pointer">
          <Download className="mr-2 h-4 w-4" />
          Apple Calendar / Outlook
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
