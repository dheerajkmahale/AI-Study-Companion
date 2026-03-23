import { BookOpen, Play, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const subjects = [
  { name: "Physics", topics: 12, icon: "⚡" },
  { name: "Chemistry", topics: 15, icon: "🧪" },
  { name: "Mathematics", topics: 18, icon: "📐" },
  { name: "English", topics: 8, icon: "📝" },
  { name: "Biology", topics: 14, icon: "🧬" },
  { name: "Computer Science", topics: 10, icon: "💻" },
];

const recentQuizzes = [
  { subject: "Physics", topic: "Electromagnetic Waves", score: 65, total: 10, date: "Today" },
  { subject: "Math", topic: "Eigenvalues", score: 80, total: 10, date: "Yesterday" },
  { subject: "Chemistry", topic: "Alkene Reactions", score: 70, total: 10, date: "2 days ago" },
];

const Quizzes = () => {
  return (
    <div className="space-y-6">
      <div className="animate-reveal-up">
        <h1 className="text-2xl font-bold font-display tracking-tight">Quizzes</h1>
        <p className="text-muted-foreground mt-1">Select a subject to start a quiz or review past attempts.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-reveal-up delay-100">
        {subjects.map((s) => (
          <div
            key={s.name}
            className="bg-card border rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer group active:scale-[0.98]"
          >
            <div className="text-3xl mb-3">{s.icon}</div>
            <h3 className="font-display font-semibold text-base">{s.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{s.topics} topics available</p>
            <Button size="sm" className="mt-4 gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
              <Play className="h-3.5 w-3.5" />
              Start Quiz
            </Button>
          </div>
        ))}
      </div>

      <div className="animate-reveal-up delay-200">
        <h2 className="text-lg font-semibold font-display mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          Recent Quizzes
        </h2>
        <div className="space-y-3">
          {recentQuizzes.map((q, i) => (
            <div key={i} className="bg-card border rounded-lg p-4 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{q.topic}</p>
                <p className="text-xs text-muted-foreground">{q.subject} · {q.date}</p>
              </div>
              <div className="text-right">
                <p className="font-display font-bold stat-number text-lg">
                  {q.score}/{q.total}
                </p>
                <p className="text-xs text-muted-foreground">{q.score * 10}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
