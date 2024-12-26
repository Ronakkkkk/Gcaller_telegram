"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { milestones?: number[]; max?: number }
>(({ className, value, milestones = [500, 1000, 1500, 2000], max = 2000, ...props }, ref) => (
  <div className="relative w-full">
    {/* Progress bar root */}
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-[14px] w-full overflow-hidden rounded-full bg-[#9747FF]/20",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-[#9747FF] rounded-full transition-all"
        style={{ transform: `translateX(-${100 - ((value || 0) / max) * 100}%)` }}
      />
    </ProgressPrimitive.Root>

    {/* Milestone indicators */}
    <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
      {milestones.map((milestone, index) => {
        const position = (milestone / max) * 100
        const isLast = index === milestones.length - 1
        return (
          <div
            key={milestone}
            className="absolute top-0 h-[14px] w-[14px] rounded-[8px] bg-white"
            style={{
              left: isLast ? `calc(${position}% - 7px)` : `${position}%`, // Adjust position for the last milestone
            }}
          >
            <div className="absolute top-[120%] mt-1 text-xs text-white -translate-x-1/2">
              {milestone}
            </div>
          </div>
        )
      })}
    </div>
  </div>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
