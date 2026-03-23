import { type LucideIcon, TrendingUp } from "lucide-react";

interface QuickStatsProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

export const QuickStats = ({ label, value, icon: Icon, trend }: QuickStatsProps) => {
  return (
    <div className="bg-card border rounded-lg p-4 animate-reveal-up delay-300 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-2xl font-bold font-display stat-number">{value}</p>
        </div>
      </div>
      <p className="text-xs text-primary font-medium mt-2">{trend}</p>
    </div>
  );
};
