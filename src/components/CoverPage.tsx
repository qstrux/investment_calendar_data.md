import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CoverPageProps {
  onEnter: () => void;
}

export default function CoverPage({ onEnter }: CoverPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"></div>
      </div>

      <div className="container max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
              2025
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary">
              Investment Cycle Navigator
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground italic max-w-2xl mx-auto">
            "Those who master time, deserve to master wealth."
          </p>

          {/* Timezone Notice */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
              <span className="text-sm text-foreground/90">
                🕐 <strong className="text-primary">All times in Eastern Time (ET)</strong>
                {' '}— New York timezone
              </span>
            </div>
          </div>

          {/* Branding */}
          <div className="pt-8 space-y-3">
            <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-foreground/90">
              <span className="font-semibold">Jenna Ryan CFA</span>
              <span className="text-primary">|</span>
              <span>Alpha Wealth Capital</span>
              <span className="text-primary">|</span>
              <span>StreamAlphaX</span>
            </div>
            <p className="text-sm text-muted-foreground">Elite Edition</p>
          </div>

          {/* CTA Button */}
          <div className="pt-12">
            <Button
              size="lg"
              onClick={onEnter}
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Enter Calendar
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="pt-16 max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> This calendar is provided for educational and informational purposes only. 
              It does not constitute investment advice, financial advice, trading advice, or any other sort of advice. 
              Past performance is not indicative of future results. All investments involve risk, and individual results may vary. 
              Please consult with a qualified financial advisor before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
