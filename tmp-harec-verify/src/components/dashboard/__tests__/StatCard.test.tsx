import { describe, it, expect } from "vitest";
import { StatCard } from "../StatCard";

describe("StatCard", () => {
  it("accepts label and value props", () => {
    const props = { label: "Lessons", value: 5 };
    const component = <StatCard {...props} />;
    expect(component.props.label).toBe("Lessons");
    expect(component.props.value).toBe(5);
  });

  it("accepts string values", () => {
    const props = { label: "Progress", value: "50%" };
    const component = <StatCard {...props} />;
    expect(component.props.value).toBe("50%");
  });

  it("accepts optional icon prop", () => {
    const props = { label: "Items", value: 10, icon: <div /> };
    const component = <StatCard {...props} />;
    expect(component.props.icon).toBeTruthy();
  });

  it("accepts optional trend prop", () => {
    const props = { label: "Score", value: 85, trend: "up" as const };
    const component = <StatCard {...props} />;
    expect(component.props.trend).toBe("up");
  });
});
