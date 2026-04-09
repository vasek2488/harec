import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getLessonById } from "@/lib/content-loader";
import { useProgressStore } from "@/stores/progress-store";
import { Header } from "@/components/layout/Header";
import { PageContainer } from "@/components/layout/PageContainer";
import { SlideRenderer } from "@/components/learn/SlideRenderer";
import { SlideNav } from "@/components/learn/SlideNav";

export function LessonPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const markLessonComplete = useProgressStore((s) => s.markLessonComplete);

  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  const [currentSlide, setCurrentSlide] = useState(0);
  // Track which slides have been answered (index → correct)
  const [answered, setAnswered] = useState<Record<number, boolean>>({});

  if (!lesson) {
    return (
      <>
        <Header title="Lekce" />
        <PageContainer>
          <p className="py-12 text-center text-muted-foreground">
            Lesson not found.
          </p>
        </PageContainer>
      </>
    );
  }

  const slide = lesson.slides[currentSlide];
  const isLast = currentSlide === lesson.slides.length - 1;
  const isAnswered = answered[currentSlide] !== undefined;

  // Explain and reveal slides are "always ready" to advance
  const isPassive =
    slide?.type === "explain" || slide?.type === "reveal";
  const canNext = isAnswered || isPassive;

  const handleAnswered = (correct: boolean) => {
    setAnswered((prev) => ({ ...prev, [currentSlide]: correct }));
  };

  const handleNext = () => {
    if (currentSlide < lesson.slides.length - 1) {
      setCurrentSlide((i) => i + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((i) => i - 1);
    }
  };

  const handleComplete = () => {
    markLessonComplete(lesson.id);
    navigate("/learn");
  };

  if (!slide) return null;

  return (
    <>
      <Header title={lesson.title} subtitle={lesson.objective} />
      <PageContainer>
        <div className="pb-36 pt-2">
          <SlideRenderer
            key={currentSlide}
            slide={slide}
            onAnswered={handleAnswered}
            answered={isAnswered}
          />
        </div>
      </PageContainer>
      <SlideNav
        current={currentSlide}
        total={lesson.slides.length}
        canNext={canNext}
        onPrev={handlePrev}
        onNext={handleNext}
        onComplete={handleComplete}
        isLast={isLast}
      />
    </>
  );
}
