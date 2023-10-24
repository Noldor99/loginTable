/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import css from './CustomInput.module.sass';

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  helperText?: string;
  register: any;
  errors: any;
}

const CustomInput: React.FC<CustomInputProps> = (props: CustomInputProps) => {

  const { label, name, type, helperText, register, errors } = props

  const hasError = !!errors?.[name];

  return (
    <>
      <div className={`${css.inputBox} `}>
        <input
          className={`${hasError ? css.errorInput : css.validInput}`}
          type={type}
          required
          {...register(name)}
        />

        <span className={hasError ? css.errorLabel : css.validLabel}>{label}</span>
        <p className={hasError ? css.errorText : css.validText}>{helperText}</p>
      </div>
      <div className={css.error}>{errors?.[name]?.message}</div>
    </>
  );
};

export default CustomInput;
