import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Quizzes from "./pages/Quizzes";
import WeakAreas from "./pages/WeakAreas";
import StudyPlan from "./pages/StudyPlan";
import Reminders from "./pages/Reminders";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected dashboard */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Routes>
                    <Route index element={<Dashboard />} />
                    <Route path="quizzes" element={<Quizzes />} />
                    <Route path="weak-areas" element={<WeakAreas />} />
                    <Route path="study-plan" element={<StudyPlan />} />
                    <Route path="reminders" element={<Reminders />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
