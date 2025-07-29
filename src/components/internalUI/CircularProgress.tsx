import React from "react";
import { cn } from "@/lib/utils";

interface CircularProgressProps {
  progress: number; // from 0 to 100
  title?: string;
  color?: string; // e.g., "text-blue-500"
  size?: number; // diameter in px
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  title = "Progress",
  color = "text-blue-500",
  size = 80,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="rotate-[-90deg]"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted stroke-current opacity-20"
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className={cn("transition-all duration-500", color)}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {Math.round(progress)}%
        </div>
      </div>
      {title && (
        <div className="text-xs text-muted-foreground mt-1">{title}</div>
      )}
    </div>
  );
};

export default CircularProgress;
