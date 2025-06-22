import React from 'react'

const input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  id,
  disabled = false,
  required = false,
  className = '',
  label,
  error,
  onFocus,
  onBlur,
  autoFocus = false,
  maxLength,
  pattern,
  readOnly = false,
  icon,
  variant,
}) => {
  return (
    <div className={`input-wrapper w-full h-full ${className}`}>
      {label && <label htmlFor={id || name}>{label}</label>}

      <div className="input-container w-full h-full">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          required={required}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={autoFocus}
          maxLength={maxLength}
          pattern={pattern}
          readOnly={readOnly}
          className="input-field bg-white w-full px-2 h-full rounded-xl border-solid border-black border-2"
        />
      </div>

      {error && <span className="input-error">{error}</span>}
    </div>
  )
}

export default input
