import { AlertTriangle, TrendingDown, TrendingUp, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const weakAreas = [
  { topic: "Electromagnetic Waves", subject: "Physics", errors: 18, total: 22, trend: "worsening" },
  { topic: "Alkene Reactions", subject: "Chemistry", errors: 14, total: 20, trend: "improving" },
  { topic: "Eigenvalues & Eigenvectors", subject: "Math", errors: 11, total: 18, trend: "stable" },
  { topic: "Shakespearean Sonnets", subject: "English", errors: 7, total: 15, trend: "improving" },
  { topic: "Thermodynamics", subject: "Physics", errors: 9, total: 16, trend: "worsening" },
];

const pieData = [
  { name: "Physics", value: 40, color: "hsl(var(--chart-red))" },
  { name: "Chemistry", value: 25, color: "hsl(var(--chart-amber))" },
  { name: "Math", value: 20, color: "hsl(var(--chart-blue))" },
  { name: "English", value: 15, color: "hsl(var(--chart-green))" },
];

const WeakAreas = () => {
  return (
    <div className="space-y-6">
      <div className="animate-reveal-up">
        <h1 className="text-2xl font-bold font-display tracking-tight">Weak Areas</h1>
        <p className="text-muted-foreground mt-1">Topics where you need the most improvement.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3 animate-reveal-up delay-100">
          {weakAreas.map((area, i) => {
            const severity = Math.round((area.errors / area.total) * 100);
            return (
              <div key={i} className="bg-card border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-sm">{area.topic}</h3>
                    <p className="text-xs text-muted-foreground">{area.subject}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    {area.trend === "worsening" ? (
                      <span className="text-destructive flex items-center gap-0.5">
                        <TrendingDown className="h-3.5 w-3.5" /> Worsening
                      </span>
                    ) : area.trend === "improving" ? (
                      <span className="text-primary flex items-center gap-0.5">
                        <TrendingUp className="h-3.5 w-3.5" /> Improving
                      </span>
                    ) : (
                      <span className="text-muted-foreground">Stable</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          severity >= 70 ? "bg-destructive" : severity >= 50 ? "bg-streak" : "bg-primary"
                        }`}
                        style={{ width: `${severity}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-xs font-medium stat-number text-muted-foreground w-16 text-right">
                    {area.errors}/{area.total} wrong
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card border rounded-lg p-6 animate-reveal-up delay-200">
          <h2 className="text-base font-semibold font-display mb-4">Error Distribution</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" stroke="none">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: "13px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-2">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                <span className="text-muted-foreground">{d.name}</span>
                <span className="ml-auto font-medium stat-number">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeakAreas;
