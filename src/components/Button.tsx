interface ButtonProps {
  variant: BUTTON_VARIANTS;
  children: React.ReactNode;
  className?: string;
  onclick?: () => void;
}

export enum BUTTON_VARIANTS {
  OUTLINE = "bg-white border-2 border-primary text-primary",
  SOLID = "bg-primary text-white",
}

export function Button({ variant, children, className, onclick }: ButtonProps) {
  return (
    <button onClick={onclick} className={`${variant} ${className} rounded-lg`}>
      {children}
    </button>
  );
}
