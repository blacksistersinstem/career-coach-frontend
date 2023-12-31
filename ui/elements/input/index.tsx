'use client';


import React, {ChangeEvent} from "react";
import { gilroy } from "@/styles/font";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    value: string;
    label?: string;
    type: string;
    onChange: (value: any ) => void;
    placeholder?: string;
    id?: string
}

const Input = ({value, label, type, onChange, placeholder, id, ...rest}:InputProps) => { 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        onChange(value)
    }

    return(
        <div className= {`${gilroy.className} flex flex-col mb-4`}>
            {label && (
                <label
                    className="text-white font-medium text-base"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input 
                type={type} 
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className="px-6 py-5 rounded text-h6"
                {...rest}
            />
        </div>
    )
}

export {Input};
