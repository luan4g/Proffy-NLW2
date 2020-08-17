import React, { InputHTMLAttributes } from 'react';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
}

const InputForm: React.FC<InputFormProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  )
}

export default InputForm