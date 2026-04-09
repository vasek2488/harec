import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { cs } from "@/../content/i18n/cs";
import {
  BookOpen,
  HelpCircle,
  Clock,
  WifiOff,
  ArrowRight,
} from "lucide-react";

const benefits = [
  { icon: BookOpen, text: cs.welcome.benefitLessons },
  { icon: HelpCircle, text: cs.welcome.benefitQuestions },
  { icon: Clock, text: cs.welcome.benefitExams },
  { icon: WifiOff, text: cs.welcome.benefitOffline },
];

const steps = [
  cs.welcome.howToStep1,
  cs.welcome.howToStep2,
  cs.welcome.howToStep3,
  cs.welcome.howToStep4,
];

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 py-12 lg:py-20">
      <div className="w-full max-w-lg space-y-8 text-center">
        {/* Hero */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {cs.welcome.heading}
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            {cs.welcome.subheading}
          </p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
          {cs.welcome.description}
        </p>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 gap-3 text-left">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.text}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-sm"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{b.text}</span>
              </div>
            );
          })}
        </div>

        {/* How to study */}
        <div className="space-y-3 text-left">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {cs.welcome.howToTitle}
          </h2>
          <ol className="space-y-2">
            {steps.map((step, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="w-full max-w-xs mx-auto"
          onClick={() => navigate("/learn")}
        >
          {cs.welcome.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
