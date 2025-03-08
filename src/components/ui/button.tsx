import { Slot } from "@radix-ui/react-slot";
import { type ComponentProps, forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "flex items-center justify-center gap-2 rounded-lg text-sm font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2",

  variants: {
    variant: {
      primary:
        "bg-gradient-to-r from-blue-600 via-pink-600 to-purple-900 hover:from-blue-800 hover:via-pink-800 hover:to-purple-950 rounded-lg px-5 py-2 font-bold transition-colors duration-300 text-violet-50",
      secondary: "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 ring-zinc-900",
    },

    size: {
      default: "px-4 py-2.5",
      sm: "px-3 py-2",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    );
  }
);

Button.displayName = "Button";
