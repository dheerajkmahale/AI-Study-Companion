import { AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const weakTopics = [
  { topic: "Electromagnetic Waves", subject: "Physics", severity: 85 },
  { topic: "Alkene Reactions", subject: "Chemistry", severity: 72 },
  { topic: "Eigenvalues & Eigenvectors", subject: "Math", severity: 58 },
  { topic: "Shakespearean Sonnets", subject: "English", severity: 40 },
];

export const WeakTopicsCard = () => {
  const getSeverityColor = (severity: number) => {
    if (severity >= 70) return "bg-destructive";
    if (severity >= 50) return "bg-streak";
    return "bg-primary";
  };

  return (
    <div className="bg-card border rounded-lg p-6 animate-reveal-up delay-300">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="h-5 w-5 text-destructive" />
        <h2 className="text-lg font-semibold font-display">Weak Topics</h2>
      </div>
      <div className="space-y-4">
        {weakTopics.map((item, i) => (
          <div key={i} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{item.topic}</p>
                <p className="text-xs text-muted-foreground">{item.subject}</p>
              </div>
              <span className="text-xs font-medium text-muted-foreground stat-number">
                {item.severity}% errors
              </span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getSeverityColor(item.severity)}`}
                style={{ width: `${item.severity}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
