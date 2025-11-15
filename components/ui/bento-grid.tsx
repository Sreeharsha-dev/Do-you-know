import React, { ReactNode, PropsWithChildren } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

// Fix: Used PropsWithChildren to correctly type the 'children' prop when passed via JSX, resolving a type error in About.tsx.
const BentoGrid = ({
  children,
  className,
  ...props
}: PropsWithChildren<{
  className?: string;
  [key: string]: any;
}>) => {
  return (
    <div
      {...props}
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

// Fix: Explicitly typed BentoCard as a React functional component to resolve an issue where the 'key' prop was not being handled correctly by TypeScript.
interface BentoCardProps {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}

const BentoCard: React.FC<BentoCardProps> = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu bg-slate-900/50 border border-[var(--border-color)] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-[var(--primary-color)] transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-2xl font-bold text-slate-100 font-orbitron">
        {name}
      </h3>
      <p className="max-w-lg text-slate-300">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/40" />
  </div>
);

export { BentoGrid, BentoCard };