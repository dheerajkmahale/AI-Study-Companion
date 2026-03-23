import { Brain, Clock, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const days = [
  {
    day: "Monday",
    tasks: [
      { time: "9:00 AM", topic: "Physics — Electromagnetic Waves", type: "Revision" },
      { time: "11:00 AM", topic: "Chemistry — Alkene Reactions", type: "Practice Quiz" },
      { time: "2:00 PM", topic: "Math — Eigenvalues", type: "Problem Solving" },
    ],
  },
  {
    day: "Tuesday",
    tasks: [
      { time: "9:00 AM", topic: "English — Essay Writing", type: "Practice" },
      { time: "11:00 AM", topic: "Physics — Thermodynamics", type: "Revision" },
      { time: "2:00 PM", topic: "Biology — Cell Division", type: "Study" },
    ],
  },
  {
    day: "Wednesday",
    tasks: [
      { time: "9:00 AM", topic: "Math — Integration", type: "Problem Solving" },
      { time: "11:00 AM", topic: "Chemistry — Organic Mechanisms", type: "Revision" },
      { time: "2:00 PM", topic: "Mixed Revision Quiz", type: "Quiz" },
    ],
  },
];

const typeColors: Record<string, string> = {
  Revision: "bg-streak/10 text-streak-foreground",
  "Practice Quiz": "bg-primary/10 text-primary",
  "Problem Solving": "bg-chart-blue/10 text-chart-blue",
  Practice: "bg-secondary text-secondary-foreground",
  Study: "bg-muted text-muted-foreground",
  Quiz: "bg-destructive/10 text-destructive",
};

const StudyPlan = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between animate-reveal-up">
        <div>
          <h1 className="text-2xl font-bold font-display tracking-tight">Study Plan</h1>
          <p className="text-muted-foreground mt-1">Your AI-generated weekly study schedule.</p>
        </div>
        <Button className="gap-1.5">
          <Sparkles className="h-4 w-4" />
          Regenerate Plan
        </Button>
      </div>

      <div className="space-y-6">
        {days.map((d, di) => (
          <div key={di} className="animate-reveal-up" style={{ animationDelay: `${(di + 1) * 80}ms` }}>
            <h2 className="text-sm font-semibold font-display uppercase tracking-wider text-muted-foreground mb-3">
              {d.day}
            </h2>
            <div className="space-y-2">
              {d.tasks.map((task, ti) => (
                <div
                  key={ti}
                  className="bg-card border rounded-lg p-4 flex items-center gap-4 hover:shadow-sm transition-shadow duration-200"
                >
                  <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{task.topic}</p>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${typeColors[task.type] || "bg-muted text-muted-foreground"}`}>
                    {task.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                    <Clock className="h-3.5 w-3.5" />
                    {task.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPlan;
