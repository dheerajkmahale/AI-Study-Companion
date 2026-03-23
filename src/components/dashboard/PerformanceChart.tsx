import { BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", score: 65 },
  { day: "Tue", score: 72 },
  { day: "Wed", score: 58 },
  { day: "Thu", score: 80 },
  { day: "Fri", score: 75 },
  { day: "Sat", score: 88 },
  { day: "Sun", score: 82 },
];

export const PerformanceChart = () => {
  return (
    <div className="bg-card border rounded-lg p-6 animate-reveal-up delay-300">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold font-display">Weekly Performance</h2>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "13px",
              }}
              cursor={{ fill: "hsl(var(--muted))", radius: 4 }}
            />
            <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
