import React from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";

enum BtnVariants {
    default = 'default',
    error = 'error'
}

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: keyof typeof BtnVariants
    label?: React.ReactNode | string;
    customClassname?: string;
}

const button = cva('', {
    variants:{
        variant: {
            default: "bg-secondary-1",
            error: "bg-red-500"
        }
    },
    compoundVariants: []
})

const Button = ({label, customClassname, variant}: BtnProps) => {
    const className = clsx(
        "w-full h-auto text-white p-4 rounded",
        customClassname
    )

    return(
        <button 
            className={button({
                variant,
                className
            })}
        >
            {label}
        </button>
    )
}

export {Button}