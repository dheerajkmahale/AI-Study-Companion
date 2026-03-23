import { Flame } from "lucide-react";

interface StreakCardProps {
  days: number;
}

export const StreakCard = ({ days }: StreakCardProps) => {
  return (
    <div className="bg-card border rounded-lg p-4 animate-reveal-up delay-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-streak/10 flex items-center justify-center animate-streak-pulse">
          <Flame className="h-5 w-5 text-streak" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-medium">Study Streak</p>
          <p className="text-2xl font-bold font-display stat-number">{days} days</p>
        </div>
      </div>
    </div>
  );
};
