import { describe, it, expect } from "vitest";
import { ProgressRing } from "../ProgressRing";

describe("ProgressRing", () => {
  it("accepts percentage prop", () => {
    const component = <ProgressRing percentage={75} label="Progress" />;
    expect(component.props.percentage).toBe(75);
  });

  it("accepts label prop", () => {
    const component = <ProgressRing percentage={50} label="Completion" />;
    expect(component.props.label).toBe("Completion");
  });

  it("accepts optional size prop", () => {
    const component = <ProgressRing percentage={50} label="Test" size={160} />;
    expect(component.props.size).toBe(160);
  });

  it("accepts optional strokeWidth prop", () => {
    const component = (
      <ProgressRing percentage={50} label="Test" strokeWidth={4} />
    );
    expect(component.props.strokeWidth).toBe(4);
  });

  it("rounds percentage values", () => {
    expect(Math.round(66.7)).toBe(67);
    expect(Math.round(50.2)).toBe(50);
  });

  it("handles zero percentage", () => {
    const component = <ProgressRing percentage={0} label="Empty" />;
    expect(component.props.percentage).toBe(0);
  });

  it("handles 100 percentage", () => {
    const component = <ProgressRing percentage={100} label="Complete" />;
    expect(component.props.percentage).toBe(100);
  });
});
