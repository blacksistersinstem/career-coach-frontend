import React from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";
import { gilroy } from "@/styles/font";

enum BtnVariants {
  default = "default",
  error = "error",
  disabled = "disabled",
}

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof BtnVariants;
  label?: React.ReactNode | string;
  customClassname?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const button = cva("", {
  variants: {
    variant: {
      default: "bg-blue-500 ",
      error: "bg-red-500",
      disabled: "bg-blue-500 opacity-50 cursor-not-allowed",
    },
  },
  compoundVariants: [],
});

const Button: React.FC<BtnProps> = (props) => {
  const { label, customClassname, variant, leftIcon, rightIcon, ...rest } =
    props;

  const className = clsx(
    `w-auto h-auto text-white p-4 rounded font-medium text-base flex justify-center items-center shadow-2xl shadow-blue-500/50 transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ${gilroy.className}`,
    customClassname
  );

  return (
    <button
      className={button({
        variant,
        className,
      })}
      {...rest}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {label}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export { Button };
