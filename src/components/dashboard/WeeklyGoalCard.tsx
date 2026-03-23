import { Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface WeeklyGoalCardProps {
  completed: number;
  total: number;
}

export const WeeklyGoalCard = ({ completed, total }: WeeklyGoalCardProps) => {
  const pct = Math.round((completed / total) * 100);
  return (
    <div className="bg-card border rounded-lg p-4 animate-reveal-up delay-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Target className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-medium">Weekly Goal</p>
          <p className="text-2xl font-bold font-display stat-number">{completed}/{total}</p>
        </div>
      </div>
      <Progress value={pct} className="h-2" />
    </div>
  );
};
