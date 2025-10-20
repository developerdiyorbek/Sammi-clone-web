"use client";

import { Star } from "lucide-react";
import { MouseEvent, useMemo, useState } from "react";
import clsx from "clsx";

type ReactStarsProps = {
  onChange?: (newValue: number) => void;
  value?: number;
  count?: number;
  size?: number;
  color?: string;
  activeColor?: string;
  readOnly?: boolean;
  className?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function ReactStars({
  onChange,
  value = 0,
  count = 5,
  size = 32,
  color = "#E5E7EB",
  activeColor = "#FACC15",
  readOnly = false,
  className,
}: ReactStarsProps) {
  const [hover, setHover] = useState<number | null>(null);

  const displayValue = hover ?? value;
  const stars = useMemo(
    () => Array.from({ length: count }, (_, i) => i + 1),
    [count]
  );

  function getPointValue(index: number, e: MouseEvent<HTMLDivElement>) {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - left) / width;
    return ratio <= 0.5 ? index - 0.5 : index;
  }

  function handleMouseMove(star: number, e: MouseEvent<HTMLDivElement>) {
    if (readOnly) return;
    setHover(clamp(getPointValue(star, e), 0, count));
  }

  function handleClick(star: number, e: MouseEvent<HTMLDivElement>) {
    if (readOnly || !onChange) return;
    onChange(getPointValue(star, e));
  }

  return (
    <div
      className={clsx(
        "inline-flex gap-1.5 select-none",
        readOnly ? "cursor-default" : "cursor-pointer",
        className
      )}
      onMouseLeave={() => !readOnly && setHover(null)}
    >
      {stars.map((star) => {
        const fillTill = Math.floor(displayValue);
        const fraction = displayValue - fillTill;
        const fillPortion =
          star <= fillTill ? 1 : star === fillTill + 1 ? fraction : 0;

        return (
          <div
            key={star}
            onMouseMove={(e) => handleMouseMove(star, e)}
            onClick={(e) => handleClick(star, e)}
            className="relative transition-transform duration-200 hover:scale-110 active:scale-95"
            style={{
              width: size,
              height: size,
            }}
            tabIndex={0}
            aria-label={`${star} stars`}
          >
            <Star
              width={size}
              height={size}
              strokeWidth={2}
              color={color}
              fill={color}
              className="transition-all duration-200"
            />

            <div
              className="absolute inset-0 overflow-hidden transition-all duration-300 ease-out"
              style={{
                width: `${fillPortion * 100}%`,
                pointerEvents: "none",
              }}
            >
              <Star
                width={size}
                height={size}
                strokeWidth={0}
                fill={`url(#starGradient)`}
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="starGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor={activeColor} />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {fillPortion > 0 && (
              <div
                className="absolute inset-0 rounded-full blur-md opacity-60 pointer-events-none"
                style={{
                  background: activeColor,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
