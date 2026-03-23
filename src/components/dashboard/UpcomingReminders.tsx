import { Calendar, Clock } from "lucide-react";

const reminders = [
  { title: "Physics Midterm", date: "Mar 28", priority: "high" as const },
  { title: "Chemistry Lab Report", date: "Mar 30", priority: "medium" as const },
  { title: "Math Assignment", date: "Apr 2", priority: "low" as const },
  { title: "English Essay Draft", date: "Apr 5", priority: "low" as const },
];

const priorityStyles = {
  high: "border-l-destructive bg-weak-light/30",
  medium: "border-l-streak bg-streak/5",
  low: "border-l-primary bg-secondary/30",
};

export const UpcomingReminders = () => {
  return (
    <div className="bg-card border rounded-lg p-6 animate-reveal-up delay-400">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold font-display">Upcoming</h2>
      </div>
      <div className="space-y-2">
        {reminders.map((r, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg border-l-4 ${priorityStyles[r.priority]} transition-colors duration-150`}
          >
            <p className="text-sm font-medium">{r.title}</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {r.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
