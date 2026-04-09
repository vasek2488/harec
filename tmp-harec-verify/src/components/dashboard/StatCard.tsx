import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  icon?: ReactNode;
  trend?: "up" | "down";
}

export function StatCard({ label, value, icon, trend }: StatCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
        </div>
        {icon && (
          <div className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-3 text-xs text-muted-foreground">
          {trend === "up" ? "↑" : "↓"} Trend
        </div>
      )}
    </div>
  );
}
