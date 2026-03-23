import { Calendar, Plus, Clock, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Reminder {
  id: number;
  title: string;
  date: string;
  priority: "high" | "medium" | "low";
  type: "exam" | "task";
}

const initialReminders: Reminder[] = [
  { id: 1, title: "Physics Midterm Exam", date: "2026-03-28", priority: "high", type: "exam" },
  { id: 2, title: "Chemistry Lab Report Due", date: "2026-03-30", priority: "medium", type: "task" },
  { id: 3, title: "Math Assignment — Ch.5", date: "2026-04-02", priority: "low", type: "task" },
  { id: 4, title: "English Literature Essay", date: "2026-04-05", priority: "medium", type: "task" },
  { id: 5, title: "Biology Final Exam", date: "2026-04-15", priority: "high", type: "exam" },
];

const priorityConfig = {
  high: { label: "High", classes: "border-l-destructive bg-weak-light/30 text-destructive" },
  medium: { label: "Medium", classes: "border-l-streak bg-streak/5 text-streak-foreground" },
  low: { label: "Low", classes: "border-l-primary bg-secondary/30 text-primary" },
};

const Reminders = () => {
  const [reminders] = useState(initialReminders);

  const getDaysUntil = (dateStr: string) => {
    const diff = Math.ceil((new Date(dateStr).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (diff < 0) return "Past due";
    if (diff === 0) return "Today";
    if (diff === 1) return "Tomorrow";
    return `${diff} days`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between animate-reveal-up">
        <div>
          <h1 className="text-2xl font-bold font-display tracking-tight">Reminders</h1>
          <p className="text-muted-foreground mt-1">Track your exams and study deadlines.</p>
        </div>
        <Button className="gap-1.5">
          <Plus className="h-4 w-4" />
          Add Reminder
        </Button>
      </div>

      <div className="space-y-3 animate-reveal-up delay-100">
        {reminders
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .map((r) => {
            const config = priorityConfig[r.priority];
            const daysUntil = getDaysUntil(r.date);
            return (
              <div
                key={r.id}
                className={`bg-card border border-l-4 rounded-lg p-4 flex items-center gap-4 hover:shadow-sm transition-shadow duration-200 ${config.classes.split(" ").filter(c => c.startsWith("border-l-")).join(" ")}`}
              >
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${
                  r.type === "exam" ? "bg-destructive/10" : "bg-primary/10"
                }`}>
                  {r.type === "exam" ? (
                    <Flag className={`h-5 w-5 ${r.priority === "high" ? "text-destructive" : "text-muted-foreground"}`} />
                  ) : (
                    <Calendar className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {new Date(r.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.classes.split(" ").filter(c => !c.startsWith("border-l-")).join(" ")}`}>
                    {config.label}
                  </span>
                  <p className={`text-xs mt-1 font-medium ${
                    daysUntil === "Today" || daysUntil === "Tomorrow" || daysUntil === "Past due"
                      ? "text-destructive"
                      : "text-muted-foreground"
                  }`}>
                    {daysUntil}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Reminders;
