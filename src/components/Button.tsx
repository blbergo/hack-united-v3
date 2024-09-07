interface ButtonProps {
  variant: BUTTON_VARIANTS;
  children: React.ReactNode;
  className?: string;
}

export enum BUTTON_VARIANTS {
  OUTLINE = "bg-white border-2 border-primary text-primary",
  SOLID = "solid",
}

export function Button({ variant, children, className }: ButtonProps) {
  return <button className={`${variant} ${className} rounded-lg`}>{children}</button>;
}
