import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Filter, X } from "lucide-react";
import { allEvents, monthlyQuotes, type CalendarEvent } from "@/lib/investmentData";
import SearchBar from "@/components/SearchBar";
import AddToCalendarButton from "@/components/AddToCalendarButton";
import BulkExportButton from "@/components/BulkExportButton";
import ExpandableEventCard from "@/components/ExpandableEventCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const categoryColors = {
  fomc: "bg-primary/20 text-primary border-primary/40",
  economic: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  earnings: "bg-green-500/20 text-green-400 border-green-500/40",
  risk: "bg-red-500/20 text-red-400 border-red-500/40",
};

const categoryLabels = {
  fomc: "FOMC",
  economic: "Economic Data",
  earnings: "Earnings",
  risk: "Risk Alert",
};

export default function CalendarView() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (category: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(category)) {
      newFilters.delete(category);
    } else {
      newFilters.add(category);
    }
    setActiveFilters(newFilters);
  };

  const filteredEvents = useMemo(() => {
    let events = allEvents;
    
    // Apply category filters
    if (activeFilters.size > 0) {
      events = events.filter(event => activeFilters.has(event.category));
    }
    
    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      events = events.filter(event => 
        event.title.toLowerCase().includes(query) ||
        event.description?.toLowerCase().includes(query)
      );
    }
    
    return events;
  }, [activeFilters, searchQuery]);

  const monthEvents = useMemo(() => {
    return filteredEvents.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === currentMonth;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [currentMonth, filteredEvents]);

  const getDaysInMonth = (month: number) => {
    return new Date(2025, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number) => {
    return new Date(2025, month, 1).getDay();
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % 12);
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + 12) % 12);
  };

  const getEventsForDay = (day: number) => {
    const dateStr = `2025-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return monthEvents.filter(event => event.date === dateStr);
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">2025 Investment Calendar</h1>
              <p className="text-sm text-muted-foreground mt-1">Jenna Ryan CFA | Alpha Wealth Capital</p>
            </div>
            <div className="flex items-center gap-3 no-print">
              <div className="w-64">
                <SearchBar onSearch={setSearchQuery} />
              </div>
              <BulkExportButton events={monthEvents} label="Export Month" />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters {activeFilters.size > 0 && `(${activeFilters.size})`}
              </Button>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2 no-print">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <Badge
                  key={key}
                  variant={activeFilters.has(key) ? "default" : "outline"}
                  className={`cursor-pointer ${activeFilters.has(key) ? categoryColors[key as keyof typeof categoryColors] : ''}`}
                  onClick={() => toggleFilter(key)}
                >
                  {label}
                  {activeFilters.has(key) && <X className="ml-1 h-3 w-3" />}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="container py-8">
        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-4xl font-bold text-primary">{MONTHS[currentMonth]} 2025</h2>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Monthly Quote */}
        <Card className="p-6 mb-8 bg-card border-primary/20">
          <p className="text-lg italic text-center text-foreground/90">
            {monthlyQuotes[currentMonth + 1 as keyof typeof monthlyQuotes]}
          </p>
        </Card>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-8">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
          
          {emptyDays.map((i) => (
            <div key={`empty-${i}`} className="aspect-square"></div>
          ))}
          
          {days.map((day) => {
            const dayEvents = getEventsForDay(day);
            return (
              <Card
                key={day}
                className={`aspect-square p-2 ${dayEvents.length > 0 ? 'bg-card/80 border-primary/30' : 'bg-card/40'}`}
              >
                <div className="text-sm font-semibold text-foreground/70 mb-1">{day}</div>
                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map((event) => (
                    <div
                      key={event.id}
                      className={`text-xs px-1 py-0.5 rounded cursor-pointer truncate ${categoryColors[event.category]}`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="text-xs text-muted-foreground">+{dayEvents.length - 3} more</div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Events List */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Events This Month</h3>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {monthEvents.map((event) => (
              <ExpandableEventCard
                key={event.id}
                event={event}
                categoryColor={categoryColors[event.category]}
                categoryLabel={categoryLabels[event.category]}
                onEventClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedEvent?.title}</DialogTitle>
            <DialogDescription>
              <Badge className={`mt-2 ${selectedEvent ? categoryColors[selectedEvent.category] : ''}`}>
                {selectedEvent && categoryLabels[selectedEvent.category]}
              </Badge>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Date</p>
              <p className="text-foreground">
                {selectedEvent && new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            {selectedEvent?.time && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Time</p>
                <p className="text-foreground">{selectedEvent.time}</p>
              </div>
            )}
            {selectedEvent?.description && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground">Description</p>
                <p className="text-foreground">{selectedEvent.description}</p>
              </div>
            )}
            <div className="pt-4 border-t border-border">
              {selectedEvent && <AddToCalendarButton event={selectedEvent} variant="default" size="default" />}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
