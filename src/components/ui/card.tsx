import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200",
        className,
      )}
      {...props}
    />
  );
}
