import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const base = "rounded-full px-5 py-2.5 text-sm font-medium transition";
  const variants = {
    default: "bg-stone-900 text-white hover:bg-stone-700",
    outline:
      "border border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}
