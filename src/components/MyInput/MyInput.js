import React from 'react';
import s from "./MyInput.module.css";

const MyInput = ({
                     value,
                     type,
                     name,
                     label,
                     error,
                     onChangeHandler,
                     onBlurHandler,
    placeholder
                 }) => {
    return (
        <div className={s.myInputWrapper}>
            <label htmlFor={name}>{label}</label>
            <div className={s.myInputControls}>
                {error &&
                <p className={s.formErrorNotice}>{error}</p>
                }
                <input
                    type={type}
                    name={name}
                    className={error ? `${s.formField} ${s.invalid}` : s.formField}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    value={value || ''}
                    placeholder={placeholder ? placeholder : ''}
                    multiple={type === 'file'}
                />
            </div>

        </div>
    );
};

export default MyInput;