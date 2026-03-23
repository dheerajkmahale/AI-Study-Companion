import { Flame, Target, BookOpen, Brain, Calendar, BarChart3, TrendingUp, AlertTriangle } from "lucide-react";
import { StreakCard } from "@/components/dashboard/StreakCard";
import { WeeklyGoalCard } from "@/components/dashboard/WeeklyGoalCard";
import { TodayStudyPlan } from "@/components/dashboard/TodayStudyPlan";
import { WeakTopicsCard } from "@/components/dashboard/WeakTopicsCard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { UpcomingReminders } from "@/components/dashboard/UpcomingReminders";
import { QuickStats } from "@/components/dashboard/QuickStats";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="animate-reveal-up">
        <h1 className="text-2xl font-bold font-display tracking-tight">
          Good morning, Alex 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's your study overview for today.
        </p>
      </div>

      {/* Top Row: Streak + Weekly Goal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StreakCard days={12} />
        <WeeklyGoalCard completed={4} total={7} />
        <QuickStats label="Quizzes Taken" value="47" icon={BookOpen} trend="+3 this week" />
        <QuickStats label="Avg. Score" value="78%" icon={TrendingUp} trend="+5% vs last week" />
      </div>

      {/* Main Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TodayStudyPlan />
          <PerformanceChart />
        </div>
        <div className="space-y-6">
          <WeakTopicsCard />
          <UpcomingReminders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
