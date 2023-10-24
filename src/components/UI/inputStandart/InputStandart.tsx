/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import css from './InputStandart.module.sass';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name?: string;
  errors?: any;
  register?: any;
  ref?: any;
}

const InputStandart: React.FC<CustomInputProps> = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
  const { register, errors, name, label, ...propsRe } = props;

  let hasError = null;
  if (name) {
    hasError = !!errors?.[name];
  }

  return (
    <div className={css.customInput}>
      <label className={`
      ${css.inputLabel}
      ${hasError && css.errorLabel} 
      `}>{label}</label>
      <div className={css.input__box}>
        <input className={css.inputField}
          {...(register && { ...register(name) })}
          {...propsRe}
          {...(ref ? ref : null)}
        />
        {name && <span>{errors?.[name]?.message}</span>}
      </div>
    </div>
  );
});

export default InputStandart;
