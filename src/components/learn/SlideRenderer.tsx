import { useState } from "react";
import type { LessonSlide } from "@/lib/types";
import { getQuestionById, getConfig } from "@/lib/content-loader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface SlideRendererProps {
  slide: LessonSlide;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}

export function SlideRenderer({ slide, onAnswered, answered }: SlideRendererProps) {
  switch (slide.type) {
    case "explain":
      return <ExplainSlide content={slide.content} note={slide.note} onAnswered={onAnswered} />;
    case "fill-blank":
      return (
        <FillBlankSlide
          textBefore={slide.textBefore}
          blank={slide.blank}
          distractors={slide.distractors}
          textAfter={slide.textAfter}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "select-answer":
      return (
        <SelectAnswerSlide
          question={slide.question}
          choices={slide.choices}
          correctId={slide.correctId}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "highlight":
      return (
        <HighlightSlide
          instruction={slide.instruction}
          terms={slide.terms}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "reveal":
      return (
        <RevealSlide
          prompt={slide.prompt}
          answer={slide.answer}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "order":
      return (
        <OrderSlide
          instruction={slide.instruction}
          items={slide.items}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "match":
      return (
        <MatchSlide
          instruction={slide.instruction}
          pairs={slide.pairs}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "slider":
      return (
        <SliderSlide
          question={slide.question}
          min={slide.min}
          max={slide.max}
          step={slide.step}
          unit={slide.unit}
          correctValue={slide.correctValue}
          tolerance={slide.tolerance}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "pool-pick":
      return (
        <PoolPickSlide
          instruction={slide.instruction}
          pool={slide.pool}
          explanation={slide.explanation}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
    case "exam-question":
      return (
        <ExamQuestionSlide
          questionId={slide.questionId}
          onAnswered={onAnswered}
          answered={answered}
        />
      );
  }
}

// ─── Feedback banner ──────────────────────────────────────────────────────────

function Feedback({ correct, explanation }: { correct: boolean; explanation?: string }) {
  return (
    <div
      className={`mt-4 rounded-lg p-4 ${
        correct ? "bg-green-500/10 text-green-700 dark:text-green-400" : "bg-red-500/10 text-red-700 dark:text-red-400"
      }`}
    >
      <div className="flex items-center gap-2 font-medium">
        {correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
        {correct ? "Correct!" : "Not quite"}
      </div>
      {explanation && <p className="mt-1 text-sm opacity-80">{explanation}</p>}
    </div>
  );
}

// ─── Slide type renderers ─────────────────────────────────────────────────────

function ExplainSlide({
  content,
  note,
  onAnswered,
}: {
  content: string;
  note?: string;
  onAnswered: (correct: boolean) => void;
}) {
  return (
    <div className="space-y-4">
      <p className="text-base leading-relaxed">{content}</p>
      {note && (
        <p className="rounded-lg bg-muted p-3 text-sm text-muted-foreground">
          📝 {note}
        </p>
      )}
      <Button className="w-full" onClick={() => onAnswered(true)}>
        Got it
      </Button>
    </div>
  );
}

function FillBlankSlide({
  textBefore,
  blank,
  distractors,
  textAfter,
  explanation,
  onAnswered,
  answered,
}: {
  textBefore: string;
  blank: string;
  distractors: string[];
  textAfter: string;
  explanation?: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [choices] = useState(() => shuffleArray([blank, ...distractors]));
  const isCorrect = selected === blank;

  const handleSelect = (choice: string) => {
    if (answered) return;
    setSelected(choice);
    onAnswered(choice === blank);
  };

  return (
    <div className="space-y-4">
      <p className="text-base leading-relaxed">
        {textBefore}{" "}
        <span
          className={`inline-block min-w-16 rounded border-b-2 px-2 font-semibold ${
            answered
              ? isCorrect
                ? "border-green-500 text-green-700"
                : "border-red-500 text-red-700"
              : "border-primary"
          }`}
        >
          {selected ?? "___"}
        </span>{" "}
        {textAfter}
      </p>
      <div className="flex flex-wrap gap-2">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleSelect(choice)}
            disabled={answered}
            className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
              answered && choice === blank
                ? "border-green-500 bg-green-500/10 text-green-700"
                : answered && choice === selected && !isCorrect
                  ? "border-red-500 bg-red-500/10 text-red-700"
                  : "border-border hover:bg-muted"
            }`}
          >
            {choice}
          </button>
        ))}
      </div>
      {answered && <Feedback correct={isCorrect} explanation={explanation} />}
    </div>
  );
}

function SelectAnswerSlide({
  question,
  choices,
  correctId,
  explanation,
  onAnswered,
  answered,
}: {
  question: string;
  choices: { id: string; text: string }[];
  correctId: string;
  explanation: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [displayChoices] = useState(() =>
    getConfig().examRules.shuffleChoices ? shuffleArray(choices) : choices
  );

  const handleSelect = (id: string) => {
    if (answered) return;
    setSelectedId(id);
    onAnswered(id === correctId);
  };

  return (
    <div className="space-y-4">
      <p className="font-medium">{question}</p>
      <div className="space-y-2">
        {displayChoices.map((choice) => {
          const isSelected = selectedId === choice.id;
          const isCorrectChoice = choice.id === correctId;
          let cls = "border-border hover:bg-muted";
          if (answered && isCorrectChoice) cls = "border-green-500 bg-green-500/10";
          else if (answered && isSelected && !isCorrectChoice) cls = "border-red-500 bg-red-500/10";

          return (
            <button
              key={choice.id}
              onClick={() => handleSelect(choice.id)}
              disabled={answered}
              className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${cls}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>
      {answered && (
        <Feedback correct={selectedId === correctId} explanation={explanation} />
      )}
    </div>
  );
}

function HighlightSlide({
  instruction,
  terms,
  explanation,
  onAnswered,
  answered,
}: {
  instruction: string;
  terms: { text: string; correct: boolean }[];
  explanation?: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const correctIndices = terms
    .map((term, idx) => (term.correct ? idx : -1))
    .filter((idx) => idx !== -1);
  const isCorrect =
    correctIndices.every((idx) => selected.has(idx)) &&
    selected.size === correctIndices.length;

  const handleToggle = (idx: number) => {
    if (answered) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) { next.delete(idx); } else { next.add(idx); }
      return next;
    });
  };

  const handleSubmit = () => {
    onAnswered(isCorrect);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{instruction}</p>
      <div className="flex flex-wrap gap-2">
        {terms.map((term, idx) => {
          const isSelected = selected.has(idx);
          const isCorrect = term.correct;
          let cls = "border-border hover:bg-muted";
          if (answered && isCorrect) cls = "border-green-500 bg-green-500/10 text-green-700";
          else if (answered && isSelected && !isCorrect) cls = "border-red-500 bg-red-500/10 text-red-700";
          else if (isSelected) cls = "border-primary bg-primary/10";

          return (
            <button
              key={idx}
              onClick={() => handleToggle(idx)}
              disabled={answered}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${cls}`}
            >
              {term.text}
            </button>
          );
        })}
      </div>
      {!answered && (
        <Button className="w-full" onClick={handleSubmit}>
          Check
        </Button>
      )}
      {answered && <Feedback correct={isCorrect} explanation={explanation} />}
    </div>
  );
}

function RevealSlide({
  prompt,
  answer,
  explanation,
  onAnswered,
  answered,
}: {
  prompt: string;
  answer: string;
  explanation?: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  return (
    <div className="space-y-4">
      <p className="font-medium">{prompt}</p>
      {answered ? (
        <div className="rounded-lg bg-muted p-4">
          <p className="font-semibold">{answer}</p>
          {explanation && <p className="mt-2 text-sm text-muted-foreground">{explanation}</p>}
        </div>
      ) : (
        <Button className="w-full" onClick={() => onAnswered(true)}>
          Reveal Answer
        </Button>
      )}
    </div>
  );
}

function OrderSlide({
  instruction,
  items,
  explanation,
  onAnswered,
  answered,
}: {
  instruction: string;
  items: string[];
  explanation?: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const [shuffled] = useState(() => shuffleArray(items));
  const [order, setOrder] = useState<string[]>(shuffled);
  const [checked, setChecked] = useState(false);

  const moveUp = (idx: number) => {
    if (idx === 0) return;
    const next = [...order];
    const a = next[idx - 1] ?? "";
    const b = next[idx] ?? "";
    next[idx - 1] = b;
    next[idx] = a;
    setOrder(next);
  };

  const moveDown = (idx: number) => {
    if (idx === order.length - 1) return;
    const next = [...order];
    const a = next[idx] ?? "";
    const b = next[idx + 1] ?? "";
    next[idx] = b;
    next[idx + 1] = a;
    setOrder(next);
  };

  const handleCheck = () => {
    setChecked(true);
    const correct = order.every((item, i) => item === items[i]);
    onAnswered(correct);
  };

  const correct = order.every((item, i) => item === items[i]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{instruction}</p>
      <div className="space-y-2">
        {order.map((item, idx) => (
          <div
            key={item}
            className={`flex items-center gap-2 rounded-lg border p-3 ${
              checked && correct ? "border-green-500 bg-green-500/10" : "border-border bg-card"
            }`}
          >
            <span className="w-5 text-center text-sm font-semibold text-muted-foreground">
              {idx + 1}
            </span>
            <span className="flex-1 text-sm">{item}</span>
            {!answered && (
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => moveUp(idx)}
                  disabled={idx === 0}
                  className="px-1 text-muted-foreground disabled:opacity-30"
                >
                  ▲
                </button>
                <button
                  onClick={() => moveDown(idx)}
                  disabled={idx === order.length - 1}
                  className="px-1 text-muted-foreground disabled:opacity-30"
                >
                  ▼
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {!answered && (
        <Button className="w-full" onClick={handleCheck}>
          Check Order
        </Button>
      )}
      {answered && <Feedback correct={correct} explanation={explanation} />}
    </div>
  );
}

function MatchSlide({
  instruction,
  pairs,
  explanation,
  onAnswered,
  answered,
}: {
  instruction: string;
  pairs: { left: string; right: string }[];
  explanation?: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const shuffledRight = useState(() => shuffleArray(pairs.map((p) => p.right)))[0];
  const [matches, setMatches] = useState<Record<number, number | null>>(
    Object.fromEntries(pairs.map((_, i) => [i, null]))
  );
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);

  const handleLeftClick = (idx: number) => {
    if (answered) return;
    setSelectedLeft(idx === selectedLeft ? null : idx);
  };

  const handleRightClick = (rightIdx: number) => {
    if (answered || selectedLeft === null) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: rightIdx }));
    setSelectedLeft(null);
  };

  const handleCheck = () => {
    const correct = pairs.every(
      (pair, i) => shuffledRight[matches[i] ?? -1] === pair.right
    );
    onAnswered(correct);
  };

  const allMatched = Object.values(matches).every((v) => v !== null);

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{instruction}</p>
      <div className="flex gap-3">
        <div className="flex-1 space-y-2">
          {pairs.map((pair, i) => (
            <button
              key={i}
              onClick={() => handleLeftClick(i)}
              disabled={answered}
              className={`w-full rounded-lg border p-2 text-left text-sm transition-colors ${
                selectedLeft === i ? "border-primary bg-primary/10" : "border-border hover:bg-muted"
              }`}
            >
              {pair.left}
            </button>
          ))}
        </div>
        <div className="flex-1 space-y-2">
          {shuffledRight.map((right, i) => (
            <button
              key={i}
              onClick={() => handleRightClick(i)}
              disabled={answered || selectedLeft === null}
              className={`w-full rounded-lg border p-2 text-left text-sm transition-colors ${
                Object.values(matches).includes(i)
                  ? "border-primary/50 bg-primary/5"
                  : "border-border hover:bg-muted"
              }`}
            >
              {right}
            </button>
          ))}
        </div>
      </div>
      {!answered && (
        <Button className="w-full" onClick={handleCheck} disabled={!allMatched}>
          Check Matches
        </Button>
      )}
      {answered && (
        <Feedback
          correct={pairs.every((p, i) => shuffledRight[matches[i] ?? -1] === p.right)}
          explanation={explanation}
        />
      )}
    </div>
  );
}

function SliderSlide({
  question,
  min,
  max,
  step,
  unit,
  correctValue,
  tolerance,
  explanation,
  onAnswered,
  answered,
}: {
  question: string;
  min: number;
  max: number;
  step: number;
  unit: string;
  correctValue: number;
  tolerance: number;
  explanation?: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const [value, setValue] = useState(Math.round((min + max) / 2));

  const handleCheck = () => {
    const correct = Math.abs(value - correctValue) <= tolerance;
    onAnswered(correct);
  };

  const isCorrect = Math.abs(value - correctValue) <= tolerance;

  return (
    <div className="space-y-4">
      <p className="font-medium">{question}</p>
      <div className="space-y-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => {
            if (!answered) setValue(Number(e.target.value));
          }}
          disabled={answered}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{min} {unit}</span>
          <span className="font-semibold text-foreground">{value} {unit}</span>
          <span>{max} {unit}</span>
        </div>
      </div>
      {answered && (
        <p className="text-sm text-muted-foreground">
          Correct answer: {correctValue} {unit}
        </p>
      )}
      {!answered && (
        <Button className="w-full" onClick={handleCheck}>
          Check
        </Button>
      )}
      {answered && <Feedback correct={isCorrect} explanation={explanation} />}
    </div>
  );
}

function PoolPickSlide({
  instruction,
  pool,
  explanation,
  onAnswered,
  answered,
}: {
  instruction: string;
  pool: { text: string; correct: boolean }[];
  explanation?: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const handleToggle = (idx: number) => {
    if (answered) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) { next.delete(idx); } else { next.add(idx); }
      return next;
    });
  };

  const handleCheck = () => {
    const correctIndices = pool
      .map((item, i) => (item.correct ? i : -1))
      .filter((i) => i !== -1);
    const correct =
      correctIndices.every((i) => selected.has(i)) &&
      selected.size === correctIndices.length;
    onAnswered(correct);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">{instruction}</p>
      <div className="flex flex-wrap gap-2">
        {pool.map((item, idx) => {
          const isSelected = selected.has(idx);
          let cls = "border-border hover:bg-muted";
          if (answered && item.correct) cls = "border-green-500 bg-green-500/10 text-green-700";
          else if (answered && isSelected && !item.correct) cls = "border-red-500 bg-red-500/10 text-red-700";
          else if (isSelected) cls = "border-primary bg-primary/10";

          return (
            <button
              key={idx}
              onClick={() => handleToggle(idx)}
              disabled={answered}
              className={`rounded-full border px-3 py-1 text-sm transition-colors ${cls}`}
            >
              {item.text}
            </button>
          );
        })}
      </div>
      {!answered && (
        <Button className="w-full" onClick={handleCheck}>
          Check
        </Button>
      )}
      {answered && (
        <Feedback
          correct={pool
            .map((item, i) => (item.correct ? i : -1))
            .filter((i) => i !== -1)
            .every((i) => selected.has(i)) && selected.size === pool.filter((p) => p.correct).length}
          explanation={explanation}
        />
      )}
    </div>
  );
}

function ExamQuestionSlide({
  questionId,
  onAnswered,
  answered,
}: {
  questionId: string;
  onAnswered: (correct: boolean) => void;
  answered: boolean;
}) {
  const question = getQuestionById(questionId);

  if (!question) {
    return (
      <p className="text-sm text-muted-foreground">Question not found: {questionId}</p>
    );
  }

  return (
    <SelectAnswerSlide
      question={question.wording}
      choices={question.choices}
      correctId={question.correctChoiceId}
      explanation={question.explanation}
      onAnswered={onAnswered}
      answered={answered}
    />
  );
}

// ─── Utility ──────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i] as T;
    copy[i] = copy[j] as T;
    copy[j] = tmp;
  }
  return copy;
}
