import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Download } from "lucide-react";
import type { CalendarEvent } from "@/lib/investmentData";
import { generateMultipleICS, downloadICS } from "@/lib/calendarExport";
import { toast } from "sonner";

interface BulkExportButtonProps {
  events: CalendarEvent[];
  label?: string;
}

export default function BulkExportButton({ events, label = "Export All" }: BulkExportButtonProps) {
  const handleExportAll = () => {
    if (events.length === 0) {
      toast.error("No events to export");
      return;
    }

    const icsContent = generateMultipleICS(events);
    const filename = `investment_calendar_${events.length}_events.ics`;
    downloadICS(icsContent, filename);
    toast.success(`Exported ${events.length} events to calendar file!`);
  };

  const handleExportByCategory = (category: string) => {
    const filteredEvents = events.filter(event => event.category === category);
    
    if (filteredEvents.length === 0) {
      toast.error(`No ${category} events to export`);
      return;
    }

    const icsContent = generateMultipleICS(filteredEvents);
    const filename = `investment_calendar_${category}_${filteredEvents.length}_events.ics`;
    downloadICS(icsContent, filename);
    toast.success(`Exported ${filteredEvents.length} ${category} events!`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          {label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-popover">
        <DropdownMenuItem onClick={handleExportAll} className="cursor-pointer">
          <Download className="mr-2 h-4 w-4" />
          Export All Events ({events.length})
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleExportByCategory('fomc')} className="cursor-pointer">
          Export FOMC Meetings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExportByCategory('economic')} className="cursor-pointer">
          Export Economic Data
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExportByCategory('earnings')} className="cursor-pointer">
          Export Earnings Reports
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExportByCategory('risk')} className="cursor-pointer">
          Export Risk Alerts
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
