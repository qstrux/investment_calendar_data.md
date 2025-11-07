import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, TrendingUp, BookOpen, Lightbulb } from "lucide-react";
import type { CalendarEvent } from "@/lib/investmentData";
import { getEventInsight, hasInsight } from "@/lib/eventInsights";
import AddToCalendarButton from "./AddToCalendarButton";

interface ExpandableEventCardProps {
  event: CalendarEvent;
  categoryColor: string;
  categoryLabel: string;
  onEventClick: () => void;
}

export default function ExpandableEventCard({
  event,
  categoryColor,
  categoryLabel,
  onEventClick
}: ExpandableEventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const insight = getEventInsight(event.id);
  const canExpand = hasInsight(event.id);

  const handleCardClick = () => {
    if (canExpand) {
      setIsExpanded(!isExpanded);
    } else {
      onEventClick();
    }
  };

  return (
    <Card
      className={`p-4 transition-all duration-300 ${
        canExpand ? 'cursor-pointer hover:border-primary/50' : 'cursor-pointer hover:border-primary/50'
      } ${isExpanded ? 'border-primary/50' : ''}`}
    >
      <div onClick={handleCardClick}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <Badge className={`mb-2 ${categoryColor}`}>
              {categoryLabel}
            </Badge>
            <h4 className="font-semibold text-foreground">{event.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </p>
            {event.time && (
              <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
            )}
            {canExpand && (
              <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                <BookOpen className="h-3 w-3" />
                <span>Click to read analysis</span>
                {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              </div>
            )}
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <AddToCalendarButton event={event} variant="ghost" size="icon" />
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && insight && (
        <div className="mt-4 pt-4 border-t border-border space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Background */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-sm text-foreground">Background</h5>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {insight.background}
            </p>
          </div>

          {/* Market Impact */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-sm text-foreground">Market Impact</h5>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {insight.marketImpact}
            </p>
          </div>

          {/* Historical Context */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h5 className="font-semibold text-sm text-foreground">Historical Context</h5>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {insight.historicalContext}
            </p>
          </div>

          {/* Key Takeaways */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              <h5 className="font-semibold text-sm text-foreground">Key Takeaways</h5>
            </div>
            <ul className="space-y-1">
              {insight.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="flex-1">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground italic">
              <strong>Disclaimer:</strong> This analysis is for educational purposes only and does not constitute investment advice. 
              Past performance is not indicative of future results. Please consult with a qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
