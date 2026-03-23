import { Brain, Clock, CheckCircle2, Circle } from "lucide-react";

const tasks = [
  { time: "9:00 AM", topic: "Organic Chemistry — Alkenes", done: true },
  { time: "10:30 AM", topic: "Linear Algebra — Eigenvalues", done: true },
  { time: "1:00 PM", topic: "Physics — Electromagnetic Waves", done: false },
  { time: "3:00 PM", topic: "Revision Quiz — Weak Topics", done: false },
  { time: "5:00 PM", topic: "English Literature — Essay Practice", done: false },
];

export const TodayStudyPlan = () => {
  return (
    <div className="bg-card border rounded-lg p-6 animate-reveal-up delay-200">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold font-display">Today's Study Plan</h2>
        <span className="ml-auto text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
          AI Generated
        </span>
      </div>
      <div className="space-y-3">
        {tasks.map((task, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-150 ${
              task.done ? "bg-success-light/50" : "bg-muted/50 hover:bg-muted"
            }`}
          >
            {task.done ? (
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${task.done ? "line-through text-muted-foreground" : ""}`}>
                {task.topic}
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
              <Clock className="h-3.5 w-3.5" />
              {task.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
