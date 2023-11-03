'use client';


import React, {ChangeEvent} from "react";

interface InputProps{
    value: string;
    label: string;
    type: string;
    onChange: (value: string) => void;
    placeholder?: string;
    id?: string
}

const Input = ({value, label, type, onChange, placeholder, id}:InputProps) => { 
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        onChange(value)
    }

    return(
        <div>
            {label && (
                <label
                    className=""
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
            />
        </div>
    )
}

export {Input};
