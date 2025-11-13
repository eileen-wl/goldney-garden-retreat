import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "panel" | "subtle";
}

export const GlassCard = ({ children, className, variant = "default", ...props }: GlassCardProps) => {
  const variantClasses = {
    default: "glass-card",
    panel: "glass-panel",
    subtle: "backdrop-blur-sm bg-card/30 border border-border/10 rounded-xl shadow-lg",
  };

  return (
    <div className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
};
